<script setup lang="ts">

const settings = useAppSettings()
const {activeDialog, dialogPayload, closeDialog} = useDialogs()

//Prüfen, ob DIESER Dialog aktiv ist
const visible = computed({
  get: () => activeDialog.value === 'LARGE_CONTENT_WARNING',
  set: (val) => {
    if (!val) closeDialog()
  }
})

function enableOnDemand() {
  settings.value.onDemandRendering = true
  settings.value.largeContentDialogSet = true
  closeDialog()
}

function keepLive() {
  settings.value.largeContentDialogSet = true
  settings.value.onDemandRendering = false
  closeDialog()
}
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Large content" :style="{ width: '30rem' }">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1.5">
        <Label>Your content is large. It is recommended to turn off live preview to increase performance.</Label>
      </div>
    </div>
    <template #footer>
      <Button severity="secondary" variant="outlined" @click="keepLive()">No, use live preview</Button>
      <Button @click="enableOnDemand()">Yes, activate On-Demand Render</Button>
    </template>
  </Dialog>
</template>

<style scoped>

</style>