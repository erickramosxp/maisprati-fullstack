/* 
    2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
    h-¹, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
    multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. 
*/

const prompt = require('prompt-sync')();

let velocidadeCarro = parseInt(prompt("Qual a velocidade do carro ? "));

if (velocidadeCarro > 80){
    console.log("Você foi multado em...");
    let valorDaMulta = (velocidadeCarro - 80) * 5;
    console.log("R$ " + valorDaMulta.toFixed(2) + " reais");
} else {
    console.log("Parabéns meu querido!");
}