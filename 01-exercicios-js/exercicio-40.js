/*
    40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
*/

const prompt = require('prompt-sync')();

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarLinhaUnica(tamanho, min, max) {
    const numeros = new Set();
    while (numeros.size < tamanho) {
        numeros.add(gerarNumeroAleatorio(min, max));
    }
    return Array.from(numeros);
}


const matriz = [];
const linhas = 50;
const colunas = 5;

for (let i = 0; i < linhas; i++) {
    matriz.push(gerarLinhaUnica(colunas, 1, 60));
}

function lerNumeros(numeros) {

    let numerosString = prompt();
    let numerosSplit = numerosString.trim().split(/\s+/);
    numeros = numerosSplit.map(Number);
    numeros = [...new Set(numeros)];
    return (numeros);
}

let numeros;
//console.log(matriz);

do {

    console.log("Digite os 5 numeros sorteados: ")
    numeros = lerNumeros(numeros);
    if (numeros.length != 5 || numeros.some(isNaN)) {
        console.log("Entrada inválida. Certifique-se de digitar exatamente 5 números únicos.");
    }
} while (numeros.length != 5);


function verificarAcertos(gabarito, aposta) {
    let acertos = 0;
    for (let i = 0; i < aposta.length; i++) {
        for (let j = 0; j < gabarito.length; j++) {
            if (aposta[i] == gabarito[j]) {
                acertos++;
                break ;
            }
        }
    }
    return (acertos);
}

function verificarGanhador(gabarito, apostas) {
    for (let i = 0; i < apostas.length; i++) {
        let acertos = verificarAcertos(gabarito, apostas[i]);
        console.log("O apostador "+ (i+1) + " fez " + acertos + " acertos");
        if (acertos == 5) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    }
}

verificarGanhador(numeros, matriz);