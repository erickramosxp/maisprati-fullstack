/*
    4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    comprimentos e diga se é possível formar um triângulo com essas retas.
    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    lado deve ser menor que a soma dos outros dois. 
*/

const prompt = require('prompt-sync')();

console.log("Vamos analizar se os números forma um triangulo com base em 3 retas:");

let reta1 = parseInt(prompt("Digite o tamanho da primeira reta: "));
let reta2 = parseInt(prompt("Digite o tamanho da segunda reta: "));
let reta3 = parseInt(prompt("Digite o tamanho da terceira reta: "));

if (((reta1 + reta2) > reta3) && ((reta2 + reta3) > reta1) && ((reta3 + reta1) > reta2)) {
    console.log("Os valores formam um triângulo.");
} else {
    console.log("Os valores não formam um triângulo.");
}