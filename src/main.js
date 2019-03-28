console.log("Conectado")
document.addEventListener('DOMContentLoaded', doRequest)

function doRequest(){


    // Se define infura como proveedor, se copia en el dashboard de infura el cual tiene tu project ID
    const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/YOUR-PROJECT-ID"));

    // Log del proveedor actual, con el objetivo de ver que Metamask no entra en acción
    console.log(web3.currentProvider);
    console.log(web3.version);

    let ABI = []; //Definir el ABI del contrato deployado, se obtiene de Remix

    //Se crea una instancia del contrato indicando el ABI y la dirección 
    // donde se encuentra deployado.

    var VotingContract = web3.eth.contract(ABI);
    let address = ""; // Definir la dirección
    var contractInstance = VotingContract.at(address);
    
    
}