<script setup lang="ts">
import Download from '@primeicons/vue/download';
import WavePulse from '@primeicons/vue/wave-pulse';
import Lock from '@primeicons/vue/lock';
import {ref} from 'vue';
import Plus from '@primeicons/vue/plus';

const settings = useAppSettings()
const dialogs = useDialogs()
const menu = ref();
let items = ref()
items = ref([
  {
    label: 'Settings',
    items: [
      {
        label: 'Load Github Gist', icon: Download, disabled: settings.value.disableControls, command: () => {
          loadGist()
        }
      },
      {
        label: 'Read Only Mode', icon: Lock, disabled: settings.value.disableControls, command: () => {
          toggleReadOnly();
        }
      },
      {
        label: 'On Demand Rendering', icon: WavePulse, disabled: settings.value.disableControls, command: () => {
          toggleOnDemandRendering();
        }
      }
    ]
  }
]);

const toggle = (event: any) => {
  menu.value.toggle(event);
};


function toggleReadOnly() {
  settings.value.readOnlyMode = !settings.value.readOnlyMode;
}

function loadGist() {
  dialogs.openDialog('LOAD_GIST_DIALOG')
}

function toggleOnDemandRendering() {
  settings.value.onDemandRendering = !settings.value.onDemandRendering;
}
const toggleDrawer = () => {
  settings.value.drawerVisible = !settings.value.drawerVisible;
}

</script>

<template>
  <div class="header-content">
    <div class="header-logo">
      <NuxtImg src="/logo.png" class="responsive" style="max-height: 3rem; width: auto; object-fit: contain"/>
    </div>
    <div class="header-menu">
      <Button @click="toggleDrawer()" iconOnly>
        <Plus />
      </Button>
      <Menu ref="menu" :model="items" popup class="w-40"/>
      <Button type="button" severity="secondary" variant="outlined" @click="toggle">Settings</Button>
    </div>
  </div>
</template>

<style scoped>
.header-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Drop down to two lines */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 3rem; /* Use min-height so height expands when wrapped */
  height: auto; /* Removes fixed 3rem constraint to fit wrapped lines */
  box-sizing: border-box;
  margin-bottom: 0.5rem;
}
</style>