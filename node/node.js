var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/YOUR-PROJECT-ID"));
let ABI = []; //Definir el ABI
var VotingContract = web3.eth.contract(ABI);
let address = ""; //Definir el address


var contractInstance = VotingContract.at(address);

//Ahora podemos hacer llamadas al contrato
//console.log(contractInstance);

var number= contractInstance.candidateListLength().toNumber()

for(let i= 0; i< number; i++){
    console.log(web3.toUtf8(contractInstance.candidateList(i)) );
    console.log(contractInstance.totalVotesFor(contractInstance.candidateList(i)).toNumber());
}



