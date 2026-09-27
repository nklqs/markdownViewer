<script setup lang="ts">
import Download from '@primeicons/vue/download';
import WavePulse from '@primeicons/vue/wave-pulse';
import Lock from '@primeicons/vue/lock';
import {ref} from 'vue';
import Bars from '@primeicons/vue/bars';

const settings = useAppSettings()
const dialogs = useDialogs()
const menu = ref();
let items: Ref
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
      <h2>Markdown Viewer</h2>
    </div>
    <div class="header-menu">
      <Menu ref="menu" :model="items" popup class="w-40"/>
      <Button class="loading-button" type="button" severity="secondary" variant="outlined" @click="loadGist()">Load Github Gist</Button>
      <Button type="button" severity="secondary" variant="outlined" @click="toggle">Settings</Button>
      <Button @click="toggleDrawer()" iconOnly>
        <Bars/>
      </Button>
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
.header-logo{
  display: flex;
  align-items: center;
}
.header-menu, button {
  display: flex;
  margin-left: 1rem;
  height: 100%;
}
h2 {
  margin: 0;
}
@media screen and (max-width: 650px) {
  .loading-button {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}
</style>