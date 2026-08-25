<script setup lang="ts">
import Header from "~/layouts/Header.vue";
</script>

<template>
  <header class="header">
    <Header/>
  </header>
  <div>
    <MarkdownContainer/>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
}

.responsive {
  width: 30%;
  height: auto;
}
</style>