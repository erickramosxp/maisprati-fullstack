/* 
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. 
*/

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const matriz = [];

for (let i = 0; i < 3; i++) {
    const linha = [];
    for (let j = 0; j < 3; j++) {
      linha.push(gerarNumeroAleatorio(1, 99));
    }
    matriz.push(linha);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + (matriz[i][j] > 9 ? " |" : "  |");
        }
        console.log(linha);
    }
}

function multiplicarPelaDiagonalP(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let n = matriz[i][i]; 
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = matriz[i][j] * n;
        }
    }
}

console.log("Antes");
imprimirMatriz(matriz);

multiplicarPelaDiagonalP(matriz);

console.log("Depois");

imprimirMatriz(matriz);