var Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/YOUR-PROJECT-ID"
  )
);
let address = "0x0000000000000000000000000000000000000000"; //Definir el address
let ABI = []; //Definir el ABI

let contract = new web3.eth.Contract(ABI, address);

async function instance() {
  let number = await contract.methods.candidateListLength().call();
  let candidate;
  let votos;
  for (let i = 0; i < number; i++) {
    candidate = await contract.methods.candidateList(i).call();
    votos = await contract.methods.totalVotesFor(candidate).call();
    console.log(
      i,
      candidate,
      web3.utils.toUtf8(candidate),
      " Total votes:    " + votos
    );
  }
}
instance();
