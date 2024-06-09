/* 
    10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares. 
*/


const prompt = require('prompt-sync')();

let continuar = 1;
let somatorio = 0;
let menorvalor = 0;
let valoresPares = 0;
let contador = 0;

do {
    let numero = parseInt(prompt("Insira um número: "));
    somatorio += numero;
    if (contador == 0) {
        menorvalor = numero;
    } if (numero < menorvalor) {
        menorvalor = numero;
    } if (numero % 2 == 0) {
        valoresPares++;
    }
    contador++;
    continuar = parseInt(prompt("Deseja continuar ? 0 - NÃO | OUTRO NUMERO - SIM"));
} while (continuar);


console.log("O somatório dos valores foi de " + somatorio + " o menor valor digitado foi " + menorvalor + " a media de todos os valores é " + (somatorio / contador) + " e existiam " + valoresPares + " números pares.");