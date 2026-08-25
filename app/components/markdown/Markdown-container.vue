<script setup lang="ts">
import {ref} from 'vue';

const rawContents = ref(`# This is the page title\n## Wow another help\nMy name is Niklas and this is **Markdown!**\n ### Table\n | Name|  Age | Occupation |
  |-------|-----|------------|
  | Zhang | 25  | Engineers   |
  | Li    | 30  | Designer   |
  | Wang  | 28  | Product Manager | \n\n I *really* ~~love~~ ==like markdown==`)
</script>

<template>
  <ClientOnly>
    <div class="markdown-container">
      <div class="markdown-editor">
        <Markdown-editor v-model="rawContents"/>
      </div>
      <div class="markdown-viewer">
        <div class="markdown-viewer-toc">
          <Markdown-tableOfContents :rawContent="rawContents"/>
        </div>
        <div class="markdown-viewer-viewer">
          <Markdown-Viewer :rawContent="rawContents.valueOf()"/>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.markdown-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 3px solid #1d04ac;
  padding: 8px 12px;
  margin: 1rem;
  height: calc(100vh - 10rem);
  border-radius: 1rem;
}

.markdown-editor {
  display: flex;
  width: 50%;
  height: 100%;
  overflow-y: auto;
  min-width: 0;
  border-radius: 1rem;
  border: 3px solid #1d04ac;
  margin: 0.5rem;
}

.markdown-viewer {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  min-width: 0;
  border-radius: 1rem;
  border: 3px solid #1d04ac;
  margin: 0.5rem;
}

.markdown-viewer-toc {
  display: flex;
  width: 100%;
  height: 30%;
  background-color: #eae6ff;
  border-radius: 1rem;

}

.markdown-viewer-viewer {
  display: flex;
  width: 100%;
  height: 70%;
  overflow-y: auto;
}
</style>