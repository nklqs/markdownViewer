<script setup lang="ts">
import {useContentStore} from "~/store/content.ts";

const contentStore = useContentStore()

const content = computed({
  get: () => contentStore.currentFile.content,
  set: (newValue: string) => {
    contentStore.updateCurrentContent(newValue)
  }
})
</script>

<template>
  <div class="p-textarea">
    <Textarea v-model="content" autoresize rows="20"/>
  </div>
</template>

<style scoped>
.p-textarea {
  width: 100% !important;
  height: 100% !important;
  border: 0;
}
</style>