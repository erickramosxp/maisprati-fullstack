/*
    38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
    variável identificadora que calcule a operação conforme a informação contida nesta
    variável:
        1- soma dos elementos;
        2- produto dos elementos;
        3- média dos elementos;
        4- ordene os elementos em ordem crescente;
        5- mostre o vetor. 
*/


const prompt = require("prompt-sync")();

function calcularMedia(vetor) {
    let media = 0;
    for (let i = 0; i < vetor.length; i++) {
        media += vetor[i];
    }
    media = media / vetor.length;
    return (media);
}

function multiplicarElementos(vetor) {
    let resultado = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        resultado *= vetor[i];
    }
    return (resultado);
}

function somarElementos(vetor) {
    let resultado = 0;
    for (let i = 0; i < vetor.length; i++) {
        resultado += vetor[i];
    }
    return (resultado);
}

let vetor = [];
let input;

for (let i = 0; i < 6; i++) {
    input = parseInt(prompt(`Insira o ${i+1}° do vetor: `));
    vetor.push(input);
}

console.log(vetor);

console.log("1- soma dos elementos");
console.log("2- produto dos elementos");
console.log("3- média dos elementos");
console.log("4- ordene os elementos em ordem crescente");
console.log("5- mostre o vetor\n");

input = parseInt(prompt("Insira o opção que deseja realizar : "));

switch(input) {
    case 1:
        console.log("A soma dos elementos é " + somarElementos(vetor));
        break ;
    case 2:
        console.log("O produto dos elementos é " + multiplicarElementos(vetor));
        break ;
    case 3:
        console.log("A média é " + calcularMedia(vetor));
        break ;
    case 4:
        console.log("Vetor ordenado \n" + vetor.sort());
        break ;
    case 5:
        console.log("Vetor \n" + vetor);
        break ;
    default:
        console.log("Opção inexistente!")
        break;
}
