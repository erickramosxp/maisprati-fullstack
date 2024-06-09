/* 
    7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:
    Carros populares
    - Até 100 Km percorridos: R$ 0,20 por Km
    - Acima de 100 Km percorridos: R$ 0,10 por Km
    Carros de luxo
    - Até 200 Km percorridos: R$ 0,30 por Km
    - Acima de 200 Km percorridos: R$ 0,25 por Km
 */

function calculo_popular(quantidadeDias, kms){
    let valorkms;
    let valorDias;
    let total;
    if (kms > 100) {
        valorkms = ((kms - 100) * 0.10) + (100 * 0.2);
    } else {
        valorkms = kms * 0.2;
    }
    valorDias = quantidadeDias * 90;
    total = valorDias + valorkms;
    return (total);
}

function calculo_luxo(quantidadeDias, kms) {
    let valorkms;
    let valorDias;
    let total;
    if (kms > 200) {
        valorkms = ((kms - 200) * 0.25) + (200 * 0.3);
    } else {
        valorkms = kms * 0.3;
    }
    valorDias = quantidadeDias * 150;
    total = valorDias + valorkms;
    return (total);
}

const prompt = require('prompt-sync')();

let tipoCarro = prompt("Digite o tipo de carro, popular ou de luxo ? : ");
let quantidadeDias = parseInt(prompt("Insira a quantidade de dias de aluguel: "));
let kms = parseInt(prompt("Insira a quantidade de Km percorrido: "));
let valorTotal;

if (tipoCarro === 'popular') {
    valorTotal = calculo_popular(quantidadeDias, kms);
} else if (tipoCarro == 'luxo') {
    valorTotal = calculo_luxo(quantidadeDias,kms);
} else
    console.log("Não encontrado.");

    if (valorTotal)
        console.log("O valor a ser pago é de R$ " + valorTotal.toFixed(2));
