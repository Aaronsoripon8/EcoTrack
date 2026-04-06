---
description: Normes de Desenvolupament d'EcoTrack PWA
---

# EcoTrack PWA - Constitució

Aquest document defineix les regles fonamentals i l'estàndard de qualitat que s'ha de respectar a l'hora de desenvolupar l'aplicació EcoTrack.

## 1. Stack Tecnològic
- **Llenguatge:** TypeScript (obligatori en tots els fitxers de lògica).
- **Core:** Nuxt 3.
- **UI i Estils:** Tailwind CSS.

## 2. PWA i Bones Pràctiques
- L'aplicació ha de complir els estàndards PWA per assegurar la millor experiència mòbil possible i funcionar adequadament de forma autònoma o *offline* segons on provingui la dada.

## 3. Arquitectura d'Estat i Components
- **Framework Reactiu:** Utilitzarem Vue 3.
- **API a utilitzar:** Exclusivament la **Composition API** (fomentant l'ús del format recomanat `<script setup lang="ts">`).
- **Modularitat:** Tot el codi ha de mantenir-se net, altament llegible i completament modular. S'ha d'evitar codi redundant i s'han d'extreure les llistes lògiques o visuals cap a sub-components.
