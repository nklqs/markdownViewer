<script setup lang="ts">
import {mapContent} from "~/utils/mapContent.ts";

const props = defineProps({
  content: {
    type: String,
    required: false,
  }
})
const settings = useAppSettings()
const {activeDialog, dialogPayload, closeDialog} = useDialogs()

const visible = computed({
  get: () => activeDialog.value === 'LOAD_GIST_DIALOG',
  set: (val) => {
    if (!val) closeDialog()
  }
})


async function loadGist() {
  await mapContent()

  closeDialog()
}
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Load public Github Gist" :style="{ width: '24rem' }">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1.5">
        <Label for="name">Gist-Url:</Label>
        <InputText id="name" v-model="settings.gitGistAddress" autoFocus/>
      </div>
    </div>
    <template #footer>
      <Button severity="secondary" variant="outlined" @click="closeDialog()">Cancel</Button>
      <Button severity="secondary" variant="outlined" @click="loadGist()">Load</Button>
    </template>
  </Dialog>
</template>

<style scoped>

</style>