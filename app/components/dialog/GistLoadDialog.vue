<script setup lang="ts">
import {mapContent} from "~/utils/mapContent.ts";
import Check from '@primeicons/vue/check';
import Spinner from '@primeicons/vue/spinner';

const settings = useAppSettings()
const {activeDialog, closeDialog} = useDialogs()
const loading = ref(false)
const visible = computed({
  get: () => activeDialog.value === 'LOAD_GIST_DIALOG',
  set: (val) => {
    if (!val) closeDialog()
  }
})


async function loadGist() {
  loading.value = true
  await mapContent()
  loading.value = false
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
      <Button severity="secondary" variant="outlined" :disabled="loading" @click="closeDialog()">Cancel</Button>
      <Button severity="secondary" variant="outlined" :disabled="loading" @click="loadGist()">
        <Spinner v-if="loading" class="animate-spin" />
        <Check v-else />
        {{loading ? 'Loading...' : 'Load Gist'}}
      </Button>
    </template>
  </Dialog>
</template>

<style scoped>

</style>