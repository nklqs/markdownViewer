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
  get: () => activeDialog.value === 'TRUST_AUTHOR_DIALOG',
  set: (val) => {
    if (!val) closeDialog()
  }
})

</script>

<template>
  <Dialog v-model:visible="visible" modal header="Load public Github Gist" :style="{ width: '24rem' }"
          :closable="false">
    <div class="dialog-content">
      <Label for="name">Make sure you trust the author:</Label>
      <Label></Label>
    </div>
    <template #footer>
      <Button severity="secondary" variant="outlined">
        Accept
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