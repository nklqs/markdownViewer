<script setup lang="ts">
const rawContent = `# Hello\nMy name is Niklas and this is **Markdown!**\n| Name|  Age | Occupation |
|-------|-----|------------|
| Zhang | 25  | Engineer   |
| Li    | 30  | Designer   |
| Wang  | 28  | Product Manager | \n\n I *really* ~~love~~ ==like markdown==`


const content = computed(() => { return rawContent.replace(/==([^=\n]+)==/g, '<mark>$1</mark>')})

</script>

<template>
  <div class="markdown-content-container">
    <div class="markdown-content">
      <Markdown>{{ content }}</Markdown>
    </div>
  </div>
</template>

<style scoped>
  .markdown-content {
    display: flex;
    flex-direction: column;
    font-family: Helvetica, Arial, sans-serif;
  }
  .markdown-content-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;
  }


  :deep(table) {  /* Penetrate child items deep() */
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
</style>