<script setup lang="ts">
import {mapContent} from "~/utils/mapContent.ts";
import Check from '@primeicons/vue/check';
import Spinner from '@primeicons/vue/spinner';
import ExclamationTriangle from '@primeicons/vue/exclamation-triangle';

const settings = useAppSettings()
const {activeDialog, closeDialog} = useDialogs()
const loading = ref(false)
const errorLoading = ref(false)
const visible = computed({
  get: () => activeDialog.value === 'LOAD_GIST_DIALOG',
  set: (val) => {
    if (!val) closeDialog()
  }
})


async function loadGist() {
  loading.value = true
  const result = await mapContent()
  loading.value = false
  if (result) {
    closeDialog()
  } else {
    errorLoading.value = true
  }
}
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Load public Github Gist" :style="{ width: '24rem' }" :closable="false" >
    <div class="dialog-content">
      <Label for="name">Gist-Url:</Label>
      <InputText id="name" class="inputText" v-model="settings.gitGistAddress" autoFocus/>
      <Message severity="error" v-if="errorLoading">
        <template #icon>
          <ExclamationTriangle/>
        </template>
        Could not load Gist from Github.
      </Message>
    </div>
    <template #footer>
      <Button severity="secondary" variant="outlined" :disabled="loading" @click="closeDialog(); errorLoading = false">Cancel</Button>
      <Button severity="secondary" variant="outlined" :disabled="loading" @click="loadGist()">
        <Spinner v-if="loading" class="animate-spin"/>
        <Check v-else/>
        {{ loading ? 'Loading...' : 'Load Gist' }}
      </Button>
    </template>
  </Dialog>
</template>

<style scoped>
.dialog-content * {
  margin: 0.1rem;
}
.inputText {
  width: 100%;
}
</style>