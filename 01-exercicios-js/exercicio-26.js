/* 
    26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    P[1..3,1..5]. 
*/

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const matriz = [];
  const matriz2 = [];

function preencherMatriz(matriz) {
  for (let i = 0; i < 3; i++) {
const linha = [];
    for (let j = 0; j < 5; j++) {
      linha.push(gerarNumeroAleatorio(1, 10));
    }
    matriz.push(linha);
    }
}

preencherMatriz(matriz);
preencherMatriz(matriz2);

console.log("Duas Matrizes: ");

console.log(matriz);
console.log(matriz2);

function calcularProdutoEntreMatriz(matriz, matriz2) {
    let novaMatriz = [];
    for (let i = 0; i < matriz.length && i < matriz2.length; i++) {
        let linha = [];
        for (let j = 0; j < matriz[i].length && matriz2[i].length; j++) {
            linha.push(matriz[i][j] * matriz2[i][j]);
        }
        novaMatriz.push(linha);
    }
    return (novaMatriz);
}

let novaMatriz = calcularProdutoEntreMatriz(matriz, matriz2);

console.log("Matriz produto");
console.log(novaMatriz);