<script setup lang="ts">
import breaks from 'comark/plugins/breaks'

const props = defineProps({
  rawContent: {
    type: String,
    required: true
  }
})

const settings = useAppSettings()
const dialog = useDialogs()
let content = ref('')

// Initial restart
content.value = await customContentProcessor()

watch(() => props.rawContent, async (newContent) => {
  const length = newContent?.length || 0
  if (length >= 20  && !settings.value.largeContentDialogSet && !settings.value.onDemandRendering) {
    dialog.openDialog('LARGE_CONTENT_WARNING')
    settings.value.largeContentDialogSet = true
  }
  if(!settings.value.onDemandRendering) {
    content.value = await customContentProcessor()
  }
})

function setLiveRender(value: boolean) {
  settings.value.onDemandRendering = value
  dialog.closeDialog()
}

async function customContentProcessor() {
  let rawContentPs = props.rawContent.valueOf()
  rawContentPs = rawContentPs.replace(
      /(^|\s)#([\wÀ-ÿ]+)/g,
      '$1<span class="custom-tag">#$2</span>'
  );
  return rawContentPs.replace(/==([^=\n]+)==/g, '<mark>$1</mark>')
}

async function updateContent() {
  content.value = await customContentProcessor()
}

</script>

<template>
    <div class="markdown-content-container">
      <Button v-if="settings.onDemandRendering" @click="updateContent()">Refresh</Button>
      <Suspense>
        <Markdown :plugins="[breaks()]" style="width: 100%">{{ content }}</Markdown>
      </Suspense>
    </div>



</template>

<style scoped>

.markdown-content-container {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  max-height: 80vh; /* Limits height so scrolling triggers */
  overflow-y: auto; /* Uses 'auto' to only show scrollbars when needed */
  width: 100%;
  scroll-behavior: smooth;
  transition: transform 1s;
}


:deep(table) { /* Penetrate child items deep() */
  border-collapse: collapse;
  width: 100%;
}

:deep(th), :deep(td) {
  border: 1px solid #e5e7eb;
  padding: 8px 12px;
  text-align: left;
}

:deep(th) {
  background-color: #f9fafb;
  font-weight: 600;
}


:deep(blockquote) {
  font: 14px/22px normal helvetica, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 15px;
  border-left: 3px solid #8436f4;
  background-color: #e7ccff;
}
:deep(code) {
  background-color: #dcdcdc;
  border-radius: 3px;
  padding: 2px 4px;
}
:deep(.custom-tag) {
  background-color: #d9d1ff;
  color: #6c22da;
  border-radius: 1rem;
  padding: 0px 3px;
  border: #6c22da solid 1px;
}

@media screen and (max-width: 650px) {
  .markdown-content-container {
    margin: 0;
    padding: 0.2rem;
  }
}
</style>