console.log("Conectado")
document.addEventListener('DOMContentLoaded', doRequest)

function doRequest(){

    const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/YOUR-PROJECT-ID"));
    console.log(web3.currentProvider);
    console.log(web3.version);


}