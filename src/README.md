# API de Test Ping en TypeScript

## Introduction

Cette API minimaliste en TypeScript répond aux requêtes HTTP GET sur `/ping` en renvoyant les headers de la requête au format JSON. Si une requête est effectuée sur une autre URL que `/ping`, elle renvoie une réponse vide avec un code 404.

## Installation

Assurez-vous d'avoir Node.js et npm installés sur votre système.

1. Clonez ce repository.
2. Installez les dépendances en exécutant `npm install`.

## Configuration

Pour configurer le port sur lequel le serveur doit écouter, vous pouvez créer un fichier `.env` à la racine de votre projet avec la variable d'environnement `PING_LISTEN_PORT`. Par exemple :

PING_LISTEN_PORT=3000



## Utilisation 

Pour tester l'API, vous pouvez utiliser des commandes PowerShell ou un navigateur web :

1. Pour obtenir les headers de la requête sur `/ping` :

   ```powershell
   Invoke-WebRequest -Uri "http://localhost:3000/ping" -Method GET


Résultat JSON :

{
  "host": "localhost:3000",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ..."
  // Autres headers...
}
Pour tester une URL autre que /ping, vous obtiendrez une réponse 404 :



Invoke-WebRequest -Uri "http://localhost:3000/quelquechose" -Method GET


Résultat :

StatusCode        : 404
StatusDescription : Not Found
N'hésitez pas à modifier le port ou les URL selon votre configuration. Amusez-vous à explorer cette API de test !