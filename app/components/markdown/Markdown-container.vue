<script setup lang="ts">
import {ref} from 'vue';

const content = useContent()
const rawContents = content.currentFile

const settings = useAppSettings()
</script>

<template>
  <ClientOnly>
    <div class="markdown-container">
      <Transition name="side-panel">
        <div v-if="!settings.readOnlyMode" class="markdown-editor">
          <Markdown-editor v-model="rawContents.content"/>
        </div>
      </Transition>
      <div class="markdown-viewer">
        <div class="markdown-viewer-toc">
          <Markdown-tableOfContents :rawContent="rawContents.content"/>
        </div>
        <div class="resizer" id="resizer"></div>
        <div class="markdown-viewer-viewer">
          <Markdown-Viewer :rawContent="rawContents.content.valueOf()"/>
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
  padding: 0.5rem 0;
  margin: 0 1rem 0 1rem;
  height: calc(100vh - 7rem);
  max-height: calc(100vh - 7rem);
  border-radius: 1rem;
}

.markdown-editor {
  display: flex;
  width: 100%;
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
  width: 100%;
  height: 100%;
  min-width: 0;
  border-radius: 1rem;
  border: 3px solid #1d04ac;
  margin: 0.5rem;
  transition: all 0.4s ease-in-out;
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


/*Transition*/
.side-panel-enter-active,
.side-panel-leave-active {
  transition: all 0.4s;
  max-width: 50%;
  overflow: hidden;
  white-space: nowrap;
}

.side-panel-enter-from,
.side-panel-leave-to {
  opacity: 0;
  max-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  margin: 0px;
}

@media screen and (max-width: 650px) {
  .markdown-container {
    flex-direction: column;
    padding: 1rem 0.2rem;
    margin: 0.2rem;
  }

  .markdown-editor {
    border-radius: 0.5rem;
    min-height: 50%;
  }

  .markdown-viewer {
    border-radius: 0.5rem;
    margin: 0.2rem;
    min-height: 50%;
    max-height: 100%;
  }

  .markdown-viewer-toc {
    border-radius: 0.5rem;
    margin: 0;
    padding: 0;
  }
  .side-panel-enter-active,
  .side-panel-leave-active {
    max-width: 100%;
  }
  .side-panel-enter-from,
  .side-panel-leave-to {
    max-height: 0;
    max-width: 100%;
  }

}
</style>