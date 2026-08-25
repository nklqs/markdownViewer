<script setup lang="ts">
import breaks from 'comark/plugins/breaks'

const props = defineProps({
  rawContent: {
    type: String,
    required: true
  }
})


const content = computed(() => {
  return props.rawContent.valueOf().replace(/==([^=\n]+)==/g, '<mark>$1</mark>')
})

</script>

<template>
    <div class="markdown-content-container">
      <Suspense>
        <Markdown :plugins="[breaks()]" style="width: 100%">{{ content }}</Markdown>
        <!-- <p>Hello<br>world</p> -->
      </Suspense>
    </div>

</template>

<style scoped>

.markdown-content-container {
  display: flex;
  margin: 1rem;
  padding: 1rem;
  max-height: 80vh; /* Limits height so scrolling triggers */
  overflow-y: auto; /* Uses 'auto' to only show scrollbars when needed */
  width: 100%;
  scroll-behavior: smooth;
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
</style>