// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [ '~/assets/css/main.css' ],
  modules: ['@comark/nuxt', '@nuxtjs/color-mode', '@primevue/nuxt-module', '@nuxt/image'],
  primevue: {
      options: {
          license: 'eyJpZCI6ImY2MGU5ODljLTQ1OWMtNDJlOC1hYWEyLTY0N2E1MTU4MGY3MiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODc0MTA0OTcsImV4cCI6MTgxODk0NjQ5N30.HP704RvFlegQov0bQpQzj52185a3p_S00lH3TwWxg-NTLtmNDVMVrZOSV1JICbw7W1aAuuFsUpwspIfAp_m1Bw',
          theme: {
              preset: Aura
          }
      }
  }
})