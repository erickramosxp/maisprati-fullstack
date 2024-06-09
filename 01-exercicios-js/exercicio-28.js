/* 
    28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
    a) a soma dos elementos acima da diagonal principal;
    b) a soma dos elementos abaixo da diagonal principal; 
*/


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const matriz = [];
  for (let i = 0; i < 6; i++) {
    const linha = [];
    for (let j = 0; j < 6; j++) {
      linha.push(gerarNumeroAleatorio(1, 99));
    }
    matriz.push(linha);
  }

  console.log(matriz);

let acima = 0;
let abaixo = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if ((i - j) < 0) {
            acima += matriz[i][j];
        }
        else if((i - j) > 0){
            abaixo += matriz[i][j];
        }
    }
}

console.log("Soma dos elementos acima da diagonal principal : " + acima);
console.log("Soma dos elementos abaixo da diagonal principal : " + abaixo);