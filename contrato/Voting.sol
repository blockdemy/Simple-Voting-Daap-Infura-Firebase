pragma solidity ^0.5.0;

//Herramienta en linea que hace converciones de texto:
//https://www.asciitohex.com/


//Pasar el siguiente arreglo al constructor para definir a los candidatos:
// ["0x4c6f70657a","0x42726f6e636f","0x4d61726b","0x4d65616465"]

//Donde 
// 0x4c6f70657a = Lopez
// 0x42726f6e636f = Bronco
// 0x416e617961 = Anaya
// 0x4d65616465 = Meade

contract Voting {

    mapping (bytes16 => uint8) votesReceived;
    bytes32[] public candidateList;


    constructor(bytes16[] memory candidateNames) public{
	    candidateList = candidateNames;
    }
    function totalVotesFor(bytes16 candidate) view public returns (uint8) {
        require(validCandidate(candidate));
        return votesReceived[candidate];
    }

    function voteForCandidate(bytes16 candidate) public {
        require(validCandidate(candidate));
        votesReceived[candidate]  += 1;
    }
  
    function candidateListLength () public view returns(uint){
       return candidateList.length;
    }

    function validCandidate(bytes16 candidate) view internal returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
   
}