/*
 4. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. 
*/

let array = Array(10).fill(0);

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  let matriz = [];
  for (let i = 0; i < 6; i++) {
    let linha = [];
    for (let j = 0; j < 8; j++) {
      linha.push(gerarNumeroAleatorio(-10, 10)); // Números entre -10 e 10
    }
    matriz.push(linha);
  }
  
console.log(matriz);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < 0) {
            array[i] += 1;
        }
    }
}

for (let i = 0; i < matriz.length; i++)
    console.log("Linha "+ (i + 1) + " " + array[i] + " numeros negativos");