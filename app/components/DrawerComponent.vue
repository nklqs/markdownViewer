<template>
  <div class="flex justify-center">
    <Drawer v-model:visible="settings.drawerVisible">
      <template #header>
        <div class="flex items-center gap-2">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
          <span class="font-bold">Amy Elsner</span>
        </div>
      </template>

      <Listbox v-model="selected" :options="files" optionLabel="name" scrollHeight="auto" class="w-full">
        <template #option="slotProps">
          <div class="flex items-center justify-between w-full gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <span class="truncate">{{ slotProps.option.filename }}</span>
            </div>
            <span class="text-xs font-mono px-1.5 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-muted-color in-data-selected:bg-primary in-data-selected:text-primary-contrast">{{  }}</span>
          </div>
        </template>
      </Listbox>
      <Button @click="">New file</Button>
      <template #footer>
        <div class="flex items-center gap-2">
          <Button class="w-full" variant="outlined">
            <User />
            Account
          </Button>
          <Button class="w-full" severity="danger" text>
            <SignOut />
            Logout
          </Button>
        </div>
      </template>
    </Drawer>
  </div>
</template>
<script setup>
import SignOut from '@primeicons/vue/sign-out';
import User from '@primeicons/vue/user';

const settings = useAppSettings()
const content = useContent()
const selected = ref()
watch(() => selected.value, () => {
  console.log(selected.value.filename)
  content.setCurrentFile(selected.value.filename)
})

const files = ref(content.files)
console.log(files.value)

</script>