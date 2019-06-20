# Simple-Voting-Daap-Infura-Firebase
Este repositorio despliega una Dapp sencilla de votaciones con ayuda de infura para la conexión con Ethereum y Firebase para el hosting.

## Requerimientos
* `node` para laparte de node
    
    https://nodejs.org/es/
* `firebase-cli` para deployar la DApp 

    https://github.com/firebase/firebase-tools


## Estructura del proyecto

* Contato
* Node
* src


 ### Contrato

 Contiene el contrato de votaciones sencillo que debe ser desplegado en alguna testnet como Rinkeby o Ropsten, posterioremente será instanciado con ayuda de Web3js que ya está cargado como CDN en el index.html.

 ### Node

 Script sencillo para la interacción del contrato a través de node. Es totalmente independiente de la carpeta src que contiene la DApp.

### SRC

Carpeta que contiene el index.html, styles.css y el main.js para la llamada del smart contract y desplegar la información en la DApp.

En el archivo main.js, es necesario agregar tu projectID, el ABI del contrato y la dirección del contrato desplegado.

* `projectID es otorgado por `INFURA` cuando se inicia un nuevo proyecto.
* `ABI` se obtiene de `Remix` despues de compilar el contrato
* `address contract` es la dirección del contrato desplegado en la red de prueba elegida

Para deployar la daap con ayuda de `firebase-cli`, nos preguntará que carpeta se desea desplegar, se debe cambiar el "public" que viene por default y cambialo a "src".