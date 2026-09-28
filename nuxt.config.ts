// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
    primitive: {
        blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554'
        }
    },
    semantic: {
        primary: {
            0: '#ffffff',
            50: '{purple.50}',
            100: '{purple.100}',
            200: '{purple.200}',
            300: '{purple.300}',
            400: '{purple.400}',
            500: '{purple.500}',
            600: '{purple.600}',
            700: '{purple.700}',
            800: '{purple.800}',
            900: '{purple.900}',
            950: '{purple.950}'
        }
    }
});


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [ '~/assets/css/main.css' ],
  modules: ['@comark/nuxt', '@nuxtjs/color-mode', '@primevue/nuxt-module', '@nuxt/image', '@pinia/nuxt'],
  primevue: {
      options: {
          license: 'eyJpZCI6ImY2MGU5ODljLTQ1OWMtNDJlOC1hYWEyLTY0N2E1MTU4MGY3MiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODc0MTA0OTcsImV4cCI6MTgxODk0NjQ5N30.HP704RvFlegQov0bQpQzj52185a3p_S00lH3TwWxg-NTLtmNDVMVrZOSV1JICbw7W1aAuuFsUpwspIfAp_m1Bw',
          theme: {
              preset: MyPreset,
              options: {
                  darkModeSelector: '.my-app-dark',
              }
          }
      }
  }
})