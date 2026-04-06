# Tasques del Projecte: EcoTrack AI

Aquest document desglossa l'execució del projecte en diferents fases estructurades per garantir l'òptim compliment de les especificacions i les funcions clau.

## 1. Setup de Nuxt i PWA
- [x] **Inicialització del projecte:** Crear l'esquelet utilitzant `npx nuxi init`.
- [x] **Mòduls Essencials:** Instal·lació i configuració de les eines base al `nuxt.config.ts`.
  - Tailwind CSS (`@nuxtjs/tailwindcss`).
  - Pinia (`@pinia/nuxt`) juntament amb persistència (`@pinia-plugin-persistedstate/nuxt`).
  - Funcionalitat instal·lable Offline amb Vite PWA (`@vite-pwa/nuxt`).
- [x] **Tipatge i Stores:** Desenvolupar la interfície de dades globals `SustainableAction` i habilitar el store `useEcoTrackStore`.

## 2. Creació de la UI de l'assistent (chatbot)
- [x] **Base UI PWA:** Crear l'estructura a `layouts/default.vue` preparada per aplicacions de mòbil modernes juntament amb una pestanya separada a `pages/chat.vue`.
- [x] **Component Reactiu:** Maquetar `ChatWidget.vue` incloent avatars d'usuari i IA, un indicador gràfic animat de càrrega i bombolles de xat estilitzades en Tailwind.
- [x] **Sincronització Connectivitat:** Implementar cartell visual informatiu bloquejador d'interacció en cas de trobar-se utilitzant the Web App en mode "Offline".

## 3. Implementació de la funció serverless per al chatbot
- [x] **Integració Oficial AI:** Enllaçar `@google/generative-ai` com a paquet de control del model de llenguatge (Gemini).
- [x] **Endpoint Serverless API:** Configurar estrictament `server/api/chat.post.ts` per processar les crides del font-end i protegir de forma robusta la clau d'activació per defecte amagada en l'entorn de desplegament (`.env`).
- [x] **Control d'esdeveniments:** Capturar anomalies o absència de xarxa en el backend i retornar respostes descriptives al *Chatbot*.

## 4. Creació del dashboard de punts
- [x] **Formulari de Creació Dades:** Disseny del panell amb entrades i escriptures de text obert a `ActionForm.vue` on el consum s'emmagatzema internament gràcies a l'arquitectura global Pinia.
- [x] **Visualitzador d'Estadístiques:** Generar targetes premium dissenyades amb Tailwind en l'arxiu `DashboardStats.vue` ressaltant de forma verda i ecològica els *punts aconseguits* per l'usuari.
- [x] **Llistat i Integració General:** Integrar els ginys informatius de les accions i l'estadística final centralitzant-los exclusivament a la porta inicial `pages/index.vue`.
