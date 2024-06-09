/* 
    36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
    um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
    do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
    número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
    o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
    mensagem "Parabéns, tu foi o GANHADOR".
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
const linhas = 100;
const colunas = 13;

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
        if (acertos == 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
        console.log();
    }
}

let numeros;
//console.log(matriz);

do {

    console.log("Digite os 13 numeros sorteados: ")
    numeros = lerNumeros(numeros);
    if (numeros.length != 13 || numeros.some(isNaN)) {
        console.log("Entrada inválida. Certifique-se de digitar exatamente 13 números únicos.");
    }
} while (numeros.length != 13);


verificarGanhador(numeros, matriz);