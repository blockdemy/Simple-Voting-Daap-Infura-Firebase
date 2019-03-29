var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/YOUR-PROJECT-ID"));
let ABI = []; //Definir el ABI
var VotingContract = web3.eth.contract(ABI);
let address = ""; //Definir el address

var contractInstance = VotingContract.at(address);

//Ahora podemos hacer llamadas al contrato
console.log(contractInstance);
console.log(contractInstance.totalVotesFor(contractInstance.candidateList(0)).toNumber());

