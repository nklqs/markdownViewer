<template>
  <div class="flex justify-center">
    <Drawer v-model:visible="settings.drawerVisible" :closable="false">
      <template #header>
        <div class="flex items-center gap-2">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
          <span class="font-bold">Amy Elsner</span>
        </div>
      </template>
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
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

</script>