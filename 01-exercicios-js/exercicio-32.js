/*
    32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.
*/

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const matriz = [];

for (let i = 0; i < 12 ;i++) {
    const linha = [];
    for (let j = 0; j < 13; j++) {
      linha.push(gerarNumeroAleatorio(1, 99));
    }
    matriz.push(linha);
}

function maiorValor(linha) {
    let maior = Math.abs(linha[0]);
    for (let i = 0; i < linha.length; i++) {
        if (maior < Math.abs(linha[i])) {
            maior = Math.abs(linha[i]);
        }
    }
    return (maior);
}


function dividirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let maiorNaLinha = maiorValor(matriz[i]);
        for(let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = parseFloat((matriz[i][j] / maiorNaLinha).toFixed(2));
        }
    }
    return (matriz);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + (matriz[i][j] > 9 ? " |" : "  |");
        }
        console.log("Linha : " + (i + 1)  + " -- ",linha);
    }
}

console.log("Matriz Antes: ");

imprimirMatriz(matriz);


console.log("Matriz Depois: ");

imprimirMatriz(dividirMatriz(matriz));