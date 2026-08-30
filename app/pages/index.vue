<script setup lang="ts">
import Header from "~/layouts/Header.vue";
import DrawerComponent from "~/components/DrawerComponent.vue";
</script>

<template>
  <header class="header">
    <Header/>
  </header>
  <div>
    <MarkdownContainer/>
  </div>
  <DialogContainer/>
  <DrawerComponent />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  margin: 0 1rem 0 1rem
}

.responsive {
  width: 30%;
  height: auto;
}
</style>