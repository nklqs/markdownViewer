<script setup lang="ts">
import breaks from 'comark/plugins/breaks'
import jsonRender from '@comark/vue/plugins/json-render'
import {useContentStore} from "~/store/content.ts";

const settings = useAppSettings()
const contentStore = useContentStore()
const dialog = useDialogs()
let content = ref('')

watch(() => contentStore.currentFile, async (newFile) => {
  if (newFile.content.length >= 2000  && !settings.value.largeContentDialogSet && !settings.value.onDemandRendering) {
    dialog.openDialog('LARGE_CONTENT_WARNING')
    settings.value.largeContentDialogSet = true
  }
  if(!settings.value.onDemandRendering) {
    content.value = await customContentProcessor(newFile.content)
  }
  console.log(contentStore.currentFile.filename)
}, {deep: true, immediate: true})

async function customContentProcessor(text: string) {
  let rawContentPs = text
  rawContentPs = rawContentPs.replace(
      /(^|\s)#([\wÀ-ÿ]+)/g,
      '$1<span class="custom-tag">#$2</span>'
  );
  rawContentPs = rawContentPs.replace(/^(\s*\{[\s\S]*?})/g, '<pre>$1</pre>')
  return rawContentPs.replace(/==([^=\n]+)==/g, '<mark>$1</mark>')
}

async function updateContent() {
  content.value = await customContentProcessor(contentStore.currentFile.content)
}

</script>

<template>
    <div class="markdown-content-container">
      <Button class="refresh" v-if="settings.onDemandRendering" @click="updateContent()">Refresh</Button>
      <Suspense>
        <Markdown :plugins="[breaks(), jsonRender()]" style="width: 100%">{{ content }}</Markdown>
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
.refresh {
  height: 2rem;
  flex-shrink: 0;
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
:deep(pre) {
  background-color: #dcdcdc;
  border-radius: 3px;
  padding: 2px 4px;
}
:deep(.custom-tag) {
  background-color: #d9d1ff;
  color: #6c22da;
  border-radius: 1rem;
  padding: 0 3px;
  border: #6c22da solid 1px;
}

@media screen and (max-width: 650px) {
  .markdown-content-container {
    margin: 0;
    padding: 0.2rem;
  }
}
</style>