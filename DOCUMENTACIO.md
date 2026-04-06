# Memòria del Projecte: EcoTrack PWA

**Enllaç al repositori públic de GitHub:** [https://github.com/Aaronsoripon8/EcoTrack](https://github.com/Aaronsoripon8/EcoTrack)

## 1. Explicació de les funcionalitats de l’aplicació

**Descripció de l'aplicació:**
EcoTrack és una Aplicació Web Progressiva (PWA) dissenyada per ajudar i motivar les persones a reciclar més i millor, a través d'un seguiment personalitzat i assistència intel·ligent. D'aquesta manera es fomenta la sostenibilitat diària d'una manera propera amb interfície mòbil amable i senzilla d'operar.

**Principals característiques i casos d'ús:**
1. **Assistent de Reciclatge per IA (Chatbot):** L'usuari pot obrir ràpidament el xat (a la pestanya inferior) i demanar recomanacions en llenguatge natural ("*On llenço els taps de suro?*", "*Què faig amb les piles*"). L'aplicació consulta a Google Gemini des del cantó del servidor (*Serverless API*) i entrega una resposta immediata evitant que l'usuari cerqui per internet llargues respostes documentades.
2. **Dashboard d'Ecopunts:** Una pantalla central on l'usuari visualitza de forma molt visual i gamificada un comptador global d'accions on cada activitat suma "punts verd". D'aquesta manera s'estableix un repte de millora d'hàbits.
3. **Registre d'Accions Personal amb respecte a la Privacitat:** L'arquitectura treballa des d'un disseny de zero necessitat d'Internet (*Offline first*) i *localStorage*. Això permet a un usuari escriure qualsevol activitat privada (Ex. "He reduït un paper") sense crear un compte o viatjar per la xarxa: resoldrà la velocitat i privacitat mantenint-ho per Pinia internament al dispositiu.

## 2. Captures de l’aplicació

> *(Aquestes captures són d'exemple. Talla per tu mateix pantalles del teu terminal PWA)*

- **Figura 1: Pantalla Principal del Dashboard i Formulari de Punts**
*(Insereix aquí la imatge de la pantalla d'inici on està la fitxa verda dels punts i el component per sumar un comportament ecològic amb Icones)*

- **Figura 2: Xat Funcional (Mode Online o Error)**
*(Insereix aquí l'experiment del Chat fent preguntes a Gemini amb respostes en català - Pestanya Xat de PWA)*


## 3. Procés d’especificació (Spec-Driven Development)

**Metodologia utilitzada:** 
Aquest projecte complex ha estat conceptualitzat utilitzant la potent filosofia i mètode **Speckit**. Aquesta aproximació estableix la creació de l'aplicació dictant normes i plànols de disseny complets com un projecte d'arquitectura prèvia abans que qualsevol programador intenti implementar res per lliure (*Design then Build*).

**Detall del contingut i execució de cada fase:**

**a. Foundations (Definició del context i pautes):**
Durant la creació del manifest de Speckit (`speckit.constitution`), es varen imposar normes no trençables per a EcoTrack com mantenir alts estàndards visuals Premium (Tailwind) limitant accions a Composition API de Vue i Nuxt per al nucli. Cap lògica podria desviar-se del PWA.

**b. Specify (Descripció i disseny funcional):**
S'aborden les regles amb `/speckit.specify` generant un document lligat a les expectatives comercials (Ex. Ajudar l'usuari quotidià a fer ecologia i obligar que la plataforma constés necessàriament d'un IA com assistent ràpid en els contenidors de carrers).

**c. Planning (Organització i decisió tècnica final):**
L'agent tècnic s'enfrontà a debats estructurals formulant un decisiu `plan.md` on es dividien en tecnologies d'aplicacions i resolia dilemes clau: *Com integrem una xarxa IA sense desestabilitzar les claus?* A través d'una capa interna Nitro (`/server/api`). *Com preservem punts de perfil sense servidor per afavorir l'offline?* Configurant exclusivament variables reactives de `Pinia` sobre memòries *Web Storage* persistents de forma local pel telèfon. L'esquema derivava el repartiment real d'escenar files (`tasks.md`).


## 4. Annex d'Elements de Speckit

Es presenta una reducció mostrant com es materialitzaren l'arquitectura teòrica de l'eina abans de l'escriptura total:

**A. Constitució d'Agent (.agent/workflows/speckit.constitution.md)**
```markdown
# EcoTrack PWA - Constitució
Aquest document defineix les regles fonamentals i l'estàndard de qualitat.
- **Stack Tecnològic:** TypeScript, Nuxt 3, i Tailwind CSS obligatori.
- **PWA:** Funcionalistes en aplicació progressiva per garantir comportament com una app de *Google Chrome*.
- **Arquitectura:** Extenses abstraccions de lògica fent servir l'estructura modular *Composition API*.
```

**B. Plànol d'Arquitectura Tècnica (specs/001-ecotrack/plan.md)**
```markdown
# Pla Tècnic: EcoTrack AI (PWA Serverless)
- **1. Serverless Endpoint:** Creació de `server/api/chat.post.ts` enllaçant remotament al Model (Gemini 1.5) fent instàncies asíncrones per protegir el API env KEY fora del rang d'accés de l'usuari general d'UI de navegador.
- **2. Arquitectura de Registre Pinia:** Generació de *stores/ecotrack.ts* com magatzem base.
```
