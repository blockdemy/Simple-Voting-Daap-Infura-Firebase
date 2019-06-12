pragma solidity ^0.5.9;

//Herramienta en linea que hace converciones de texto:
//https://www.asciitohex.com/


//Pasar el siguiente arreglo al constructor para definir a los candidatos:
// ["0x4c6f70657a000000","0x42726f6e636f0000","0x416e617961000000","0x4d65616465000000"]

//Donde 
// 0x4c6f70657a000000 = Lopez     5
// 0x42726f6e636f0000 = Bronco  6
// 0x416e617961000000 = Anaya     5
// 0x4d65616465000000 = Meade     5

contract Voting {

    mapping (bytes8 => uint8) votesReceived;
    bytes8[] public candidateList;


    constructor(bytes8[] memory candidateNames) public{
	    candidateList = candidateNames;
    }
    function totalVotesFor(bytes8 candidate) view public returns (uint8) {
        require(validCandidate(candidate));
        return votesReceived[candidate];
    }

    function voteForCandidate(bytes8 candidate) public {
        require(validCandidate(candidate));
        votesReceived[candidate]  += 1;
    }
  
    function candidateListLength () public view returns(uint){
       return candidateList.length;
    }

    function validCandidate(bytes8 candidate) view internal returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
   
}