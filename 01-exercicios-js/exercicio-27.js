/* 
    27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final. 
*/

let array = [];

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function multiplicar(numero, valor) {
    return (numero * valor);
}
  
  const matriz = [];
  for (let i = 0; i < 6; i++) {
    const linha = [];
    for (let j = 0; j < 6; j++) {
      linha.push(gerarNumeroAleatorio(1, 99));
    }
    matriz.push(linha);
  }


  for (let i = 0; i < matriz.length; i++) {
    let linha = "";
    for (let j = 0; j < matriz[i].length; j++) {
        linha += matriz[i][j] + (matriz[i][j] > 9 ? "| " : " | ");
    }
    console.log(linha);
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        array.push(multiplicar(matriz[i][j], 2));
    }
}

console.log(array);