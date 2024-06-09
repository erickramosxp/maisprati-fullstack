/* 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require("prompt-sync")();

console.log("Bem vindo ao jogo no número secreto");

let numeroSecreto = Math.floor((Math.random() * 5) + 1);

let chute = parseInt(prompt("Escolha um numero de 1 a 5: "));


if (chute === numeroSecreto) {
    console.log("Parabéns você acertou!");
} else {
    console.log("Que pena você errou, o número secreto era " + numeroSecreto);
}