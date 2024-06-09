/* 
    17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. 
*/
const prompt = require('prompt-sync')();


let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++){
    let nome = prompt("Insira o nome: ");
    let idade = parseInt(prompt("Insira a idade: "));
    nomes.push(nome);
    idades.push(idade);
}

console.log("Pessoas maiores de idade.");

for (let index in idades) {
    if (idades[index] >= 18) {
        console.log("Nome: " + nomes[index] + " ,Idade: " + idades[index]);
    }
}