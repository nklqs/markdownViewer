<template>
  <div class="flex justify-center">
    <Drawer v-model:visible="settings.drawerVisible">
      <template #header>
      </template>
      <Listbox v-model="selected" :options="contentStore.files" optionLabel="name" scrollHeight="auto" class="w-full">
        <template #option="slotProps">
          <div class="flex items-center justify-between w-full gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <span class="truncate">{{ slotProps.option.filename }}</span>
            </div>
            <span class="text-xs font-mono px-1.5 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-muted-color in-data-selected:bg-primary in-data-selected:text-primary-contrast">{{  }}</span>
          </div>
        </template>
      </Listbox>
      <Button variant="outlined" @click="">New file</Button>
      <template #footer>
      </template>
    </Drawer>
  </div>
</template>
<script setup>
import {useContentStore} from "~/store/content.ts";

const settings = useAppSettings()
const contentStore = useContentStore()
const selected = ref()
watch(() => selected.value, () => {
  contentStore.setCurrentFile(selected.value.filename)
  console.log(contentStore.activeFileName)
  console.log(contentStore.currentFile.filename)
  console.log(contentStore.currentFile.content)
})

</script>