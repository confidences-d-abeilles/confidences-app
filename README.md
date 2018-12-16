# Plateforme de parrainage de Confidences d'Abeilles
## Prérequis
Quel que soit le système, vous devez être préalablement équipé de `nodejs` en version `10.*`, et `npm` en version `6.*`. Ces 2 programmes sont installable selon votre système en téléchargement ou directement via votre gestionnaire d'application, notamment sur Linux.
## Recupération des fichiers sources
Clonez les fichiers de ce repo, via les commandes habituelles
```shell
git clone https://github.com/NicolasProject/confidences-app
```
## Installation des modules NodeJS
Placez vous dans le répertoire dans lequel vous avez cloné vos fichiers, dans notre cas
```shell
cd confidences-app
```
Puis, lancer la mise à jour des modules via la commande
```shell
npm install
```
Si tout se passe bien, vous devriez n'avoir aucune erreur (il peut y avoir un certain nombre de warnings), et une mention similaire à `Added x packages`, x étant le nombre de modules installés, quelques centaines voire milliers pour le premier lancement.
## Création du fichier de configuration
Rendez vous ensuite dans le répertoire `src`, ou vous allez créer un fichier vierge nommé `config.js`. Si vous travaillez en local avec les configurations par défaut, insérez-y le code suivant :
```javascript
module.exports = {
  server_url : 'http://localhost:1337',
  app_url : 'http://localhost:3000',
  cdn_url: 'http://localhost'
}
```
Ces url, qui correspondent respectivement à l'url de votre serveur API et de cette application React, peuvent varier selon votre configuration. En cas de doute, ces urls vous sont rappelées lors du lancement de ces 2 serveurs.
## Lancement de l'application
Lorsque toutes les étapes précédentes ont été complétées, vous pouvez lancer le serveur à l'aide de la commande
```shell
npm start
```
Si vous n'avez pas d'erreurs, les warnings n'empêchant pas la compilation, vous pouvez maintenant accéder à l'application via votre navigateur, à l'adresse `http://localhost:3000` (toujours dans le cas ou vous travaillez en local avec les configurations par défaut).
