/*
    39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let matriz = [];

for (let i = 0; i < 100; i++) {
      matriz.push(gerarNumeroAleatorio(-99, 99));
      matriz.push(null);
}

function new_vetor(vetor) {
    let new_array = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0 && !isNaN(vetor[i]) && vetor[i] != null) {
            new_array.push(vetor[i]);
        }
    }
    return (new_array);
}


console.log(matriz);

matriz = new_vetor(matriz);

console.log(matriz);