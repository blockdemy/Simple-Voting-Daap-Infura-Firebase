var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/02cdd32348b841d6b62ecf5396d092e4"));
let ABI = [ { "constant": false, "inputs": [ { "name": "candidate", "type": "bytes16" } ], "name": "voteForCandidate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "candidateNames", "type": "bytes16[]" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "candidateList", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "candidateListLength", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "candidate", "type": "bytes16" } ], "name": "totalVotesFor", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
var VotingContract = web3.eth.contract(ABI);
let address = "0xbbc3edf3ae24741ff2906f2fe5d98bfb0d44a44d";

var contractInstance = VotingContract.at(address);


console.log(contractInstance);


console.log(contractInstance.totalVotesFor(contractInstance.candidateList(0)).toNumber());
