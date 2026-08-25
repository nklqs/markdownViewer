<script setup lang="ts">
const rawContent = defineModel<string>({required: true})
</script>

<template>
    <Textarea v-model="rawContent" autoresize rows="20"/>
</template>

<style scoped>
.p-textarea {
  width: 100% !important;
  height: 100% !important;
  border: 0;
}
</style>