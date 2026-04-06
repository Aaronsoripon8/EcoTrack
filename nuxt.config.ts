// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: 'EcoTrack AI',
      short_name: 'EcoTrack',
      description: 'Track sustainable actions and get AI advice on recycling.',
      theme_color: '#10b981', // Tailwind emerald-500
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js']
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})
