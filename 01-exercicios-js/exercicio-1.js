/* 
    1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias. 
*/

const prompt = require('prompt-sync')();

let cigarrosPorDia = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "));
let anosDeFumo = parseInt(prompt("Digite quantos anos já fuma: "));

let totalDeCigarros = cigarrosPorDia * (anosDeFumo * 365);
let vidaEmMinutos = totalDeCigarros * 10;
let vidaPerdidaEmDias = ((vidaEmMinutos / 60) / 24).toFixed(2);

console.log("Você perderá " + vidaPerdidaEmDias + " dias de vida pelo uso do cigarro.");

