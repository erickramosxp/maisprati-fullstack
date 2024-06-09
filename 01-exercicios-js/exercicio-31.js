/* 
    31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
    Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    todos os elementos de V diferentes de A. Mostre os resultados. 
*/


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const matriz = [];

for (let i = 0; i < 5; i++) {
    const linha = [];
    for (let j = 0; j < 5; j++) {
      linha.push(gerarNumeroAleatorio(1, 99));
    }
    matriz.push(linha);
}

function matchInMatriz(matriz, find) {
    let contador = 0;
    let newMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        newMatriz[i] = [];
        for (j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] == find){
                contador++;
            } else {
                newMatriz[i].push(matriz[i][j]);
            }
        }
    }
    return ([contador, newMatriz]);
}

console.log("Matriz antes: ");
console.log(matriz);

let resultados = matchInMatriz(matriz, 5);
let encontrados = resultados[0];
let novaMatriz = resultados[1];

console.log("\nQuantidade de números encontados: " + encontrados);
console.log("Nova matriz sem os elementos: ");
let i = -1;
while (++i < novaMatriz.length) {
    console.log(novaMatriz[i])
}

