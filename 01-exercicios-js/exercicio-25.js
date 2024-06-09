/* 
    25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente. 
*/

let array = Array(20).fill(0);

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const matriz = [];
  for (let i = 0; i < 15; i++) {
    const linha = [];
    for (let j = 0; j < 20; j++) {
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
        array[j] += matriz[i][j];
    }
}

for (let i = 0; i < array.length; i++){
    console.log((i + 1) + "° Coluna somatorio = " + array[i]);

}