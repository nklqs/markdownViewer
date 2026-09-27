<script setup lang="ts">
import {useContentStore} from "~/store/content.ts";

const contentStore = useContentStore()
const element = ref<string>()

function refresh() {
  element.value = contentStore.currentFile.content
}

function save() {
  if (element.value) contentStore.currentFile.content = element.value
}
</script>

<template>
  <div>
    <Button @click="refresh()">refresh</Button>
    <Button @click="save()">save</Button>
    <Textarea v-model="element" autoresize rows="20"/>
  </div>
</template>

<style scoped>
.p-textarea {
  width: 100% !important;
  height: 100% !important;
  border: 0;
}
</style>