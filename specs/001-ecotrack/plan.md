# Pla Tècnic: EcoTrack AI (PWA Serverless)

Aquest document defineix de forma tècnica les decisions d'arquitectura sol·licitades sobre connectivitat i persistència, assegurant el compliment de la [Constitució d'EcoTrack](../.agent/workflows/speckit.constitution.md).

## 1. Com connectarem el xat amb l'API de IA?

La connexió es realitzarà de forma totalment segura i tancada al client per evitar la filtració de claus d'autenticació:

- **Ruta Backend (Nitro):** Farem servir el motor integrat de Nuxt per crear el directori i endpoint `/server/api/chat.post.ts`. Aquest endpoint actuarà com a *proxy* autònom.
- **Client (Frontend):** Descarregarem un paquet per comunicar-nos en la UI (per exemple, usant la Composition API amb `$fetch('/api/chat')`). Tota instància o gestió directa d'intel·ligència artificial (es proposa Google Gemini 1.5) succeeix al servidor, que després respon un fitxer JSON pur a la PWA.
- **Seguretat:** La clau d'ús s'ha d'inserir obligatòriament a l'arrel de l'aplicació dins un fitxer protegit `.env` sota la sintaxi `NUXT_AI_API_KEY`.

## 2. Com guardarem els punts de l'usuari de forma serverless?

Els punts ecològics i les metes diàries de reciclatge necessiten estar sempre disponibles, fins i tot en entorn limitat de xarxa.

- **Utilització Funcional del `LocalStorage`:** Així evitem necessitar un backend tradicional com Firebase o PostgreSQL. Totes les "Accions Sostenibles" s'emmagatzemaran en la memòria nativa del navegador del dispositiu de l'usuari final per garantir privacitat al 100%.
- **Pinia com a Gestor:** Crearem el fitxer `stores/ecotrack.ts` basat en Pinia, on s'escriuran i llegiran les dades globalment. S'implementarà conjuntament amb `@pinia-plugin-persistedstate/nuxt` per fer que, transparentment, qualsevol punt sumat i tota l'activitat quedin registrats offline eternament a la ràdio d'emmagatzematge sense contactar amb cap servidor.
