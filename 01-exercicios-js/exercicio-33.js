/* 
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. 
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

function calcularMediaDiagonalSecundaria(matriz) {
    let media = 0;
    for (let i = 0 ; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i + j == (matriz.length - 1)) {
                media += matriz[i][j];
            }
        }
    }
    return (parseInt(media / matriz.length));
}

function multiplicarDiagonalPrincipal(matriz) {
    let media = calcularMediaDiagonalSecundaria(matriz);
    for (let i = 0 ; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i == j) {
                matriz[i][j] = matriz[i][j] * media;
            }
        }
    }
    return (matriz);
}

imprimirMatriz(matriz);

console.log("Media : " + calcularMediaDiagonalSecundaria(matriz));

multiplicarDiagonalPrincipal(matriz);

imprimirMatriz(matriz);