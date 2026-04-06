# Especificació Funcional: EcoTrack PWA

## 1. Visió General
EcoTrack és una aplicació web progressiva (PWA) orientada a incentivar i monitorar el reciclatge i els hàbits ecològics de l'usuari quotidià d'una manera gamificada i assistida mitjançant Intel·ligència Artificial.

## 2. PWA i Instal·labilitat
L'experiència central ha de ser propera a la d'una aplicació mòbil nativa per facilitar el seu accés de butxaca:
- S'oferirà la instal·lació d'icona directament a l'escriptori del sistema o tauleta via un web manifest establert.
- Proporcionarà un entorn *offline*: l'estat previ i el dashboard han de ser consultables parcialment o totalment fins i tot mancant de xarxa.

## 3. Elements Core del Sistema
### 3.1. Assistent de Reciclatge amb IA (Chatbot)
- Un fil de conversa directe on l'usuari pugui transmetre dubtes específics com ara "A quin espai del punt verd porto els pintallavis usats?".
- L'assistent respondrà fent ús d'un processament backend *serverless*.
- Notificació evident en la interfície si la connexió d'internet d'enviament de missatges ha estat interceptada per l'inici mode *offline*.

### 3.2. Dashboard de Punts Sostenibles
- Secció de visualització de l'acumulatiu de fites ecològiques realitzades (text, dades i quantitats de punts).
- Una interfície simple permetrà afegir noves entrades al diari intern per augmentar el càlcul numèric dels punts de sostenibilitat globals obtinguts.

## 4. Tipologia d'usuari (Persona)
Qualsevol membre o particular que desitja portar els seus esforços ecològics al llarg del temps mentre busca respostes àgils en els punts ambigus del reciclatge.
