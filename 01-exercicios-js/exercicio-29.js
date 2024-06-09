/* 
    29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
    Escrever essas somas e a matriz. 
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

  console.log(matriz);

let somaLQuatro = 0;
let somaColunaDois = 0;
let somaDiagonal = 0;
let somaTotal = 0;


for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i == 3) {
            somaLQuatro += matriz[i][j];
        }
        if(j == 1){
            somaColunaDois += matriz[i][j];
        }
        if (i == j) {
            somaDiagonal += matriz[i][j];
        }
        somaTotal += matriz[i][j];
    }
}

console.log("A soma da linha 4 é " + somaLQuatro);
console.log("A soma da coluna 2 é " + somaColunaDois);
console.log("A soma da diagonal principal é " + somaDiagonal);
console.log("A soma de todos elementos é " + somaTotal);
