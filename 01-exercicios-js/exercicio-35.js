/* 
    35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
    conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
    vetor pode ser preenchido quantas vezes forem necessárias. 
*/

const prompt = require('prompt-sync')();

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let vetor = [];
let vetorImpar = [];
let vetorPar = [];

for (let i = 0; i < 30; i++) {
      vetor.push(gerarNumeroAleatorio(1, 99));
}

console.log(vetor);

function adicionarNoVetorPar(numero) {
    if (numero % 2 == 0 && vetorPar.length == 5) {
        console.log("Vetor par já preenchido.");
        return ;
    }
    if (vetorPar.length < 5 && numero % 2 == 0) {
        vetorPar.push(numero);
        if (vetorPar.length == 5) {
            console.log("vetor par: " + vetorPar);
        }
    }
}

function adicionarNoVetorImpar(numero) {
    if (numero % 2 != 0 && vetorImpar.length == 5) {
        console.log("Vetor impar já preenchido.");
        return ;
    }
    if (vetorImpar.length < 5 && numero % 2 != 0) {
        vetorImpar.push(numero);
        if (vetorImpar.length == 5) {
            console.log("vetor impar: " + vetorImpar);
        }
    }
}

function dividirMatrizEmImparEPar() {
    while (vetorImpar.length < 5 || vetorPar.length < 5) {
        let numero = parseInt(prompt("Digite um número para ser feita a sepacação: "));
        if (!isNaN(numero) && numero != undefined) {
            adicionarNoVetorImpar(numero);
            adicionarNoVetorPar(numero);
        } else {
            console.log("Entrada invalida!");
        }
    }
    console.log("Vetores totalmente preenchidos");
    console.log("vetor par: " + vetorPar);
    console.log("vetor impar: " + vetorImpar);
}

dividirMatrizEmImparEPar();