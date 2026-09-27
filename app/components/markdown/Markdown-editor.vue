<script setup lang="ts">
import {useContentStore} from "~/store/content.ts";

const contentStore = useContentStore()
</script>

<template>
    <Textarea v-model="contentStore.currentFile.content" autoresize rows="20"/>
</template>

<style scoped>
.p-textarea {
  width: 100% !important;
  height: 100% !important;
  border: 0;
}
</style>