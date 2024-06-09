/* 
    11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

const prompt = require('prompt-sync')();

let termo = parseInt(prompt("Insira o primeiro termo da PA: "));
let razao = parseInt(prompt("Insira a razão da PA: "));
let somatorio = 0;

let i = 0;

while (i < 10) {
    console.log((i + 1) + " : " + termo);
    somatorio += termo;
    termo += razao;
    i++;
}

console.log("Soma dos termos: "+ somatorio);

