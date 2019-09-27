document.addEventListener("DOMContentLoaded", doRequest);

function doRequest() {
  // Se define infura como proveedor, se copia en el dashboard de infura el cual tiene tu project ID
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/v3/YOUR-PROJECT-ID"
    )
  );

  // Log del proveedor actual, con el objetivo de ver que Metamask no entra en acción
  console.log(web3.currentProvider);
  console.log(web3.version);

  let address = "0x0000000000000000000000000000000000000000"; // Definir la dirección
  let ABI = []; //Definir el ABI del contrato deployado, se obtiene de Remix

  //Se crea una instancia del contrato indicando el ABI y la dirección
  // donde se encuentra deployado.

  let contractInstance = new web3.eth.Contract(ABI, address);

  async function render() {
    //Se obtiene el total de candidatos y se itera para mostrar los candidatos
    // y el total de votos
    let totalCandidates = await contractInstance.methods
      .candidateListLength()
      .call();
    let candidate;
    let votes;

    let textnode;

    for (let i = 0; i < totalCandidates; i++) {
      //se llama a la funcion candidateList con el numero de candidato
      candidate = await contractInstance.methods.candidateList(i).call();
      //se llama a la función totalVotesFor para obtener el total de votos por candidato
      votes = await contractInstance.methods.totalVotesFor(candidate).call();

      console.log(candidate, votes);

      let tarjeta = document.createElement("div");
      tarjeta.setAttribute("class", "card");

      candidateField = document.createElement("div");
      candidateField.setAttribute("class", "candidate");

      voteField = document.createElement("div");
      voteField.setAttribute("class", "votes");

      textnode = document.createTextNode(web3.utils.toUtf8(candidate));
      candidateField.appendChild(textnode);

      textnode = document.createTextNode(votes);
      voteField.appendChild(textnode);

      tarjeta.appendChild(candidateField);
      tarjeta.appendChild(voteField);
      document.getElementById("lista").appendChild(tarjeta);
    }
  }

  render();
}
