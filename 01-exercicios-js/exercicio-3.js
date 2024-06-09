/*
 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. 
*/

const prompt = require("prompt-sync")();

let distancia = prompt("Digite a distancia da viagem: ");
let valorCobrado;

if (distancia > 200) {
    valorCobrado = distancia * 0.45;
} else {
    valorCobrado = distancia * 0.50;
}
console.log("O valor cobrado será de R$ " + valorCobrado.toFixed(2) + " reais.");