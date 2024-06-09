/*
 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados. 
*/

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function somarCadaLinha(matriz) {
      let somaLinhas = [];
      for (let i = 0; i < matriz.length; i++) {
          let soma = 0;
          for (let j = 0; j < matriz[i].length; j++) {
              soma += matriz[i][j];
            }
            somaLinhas.push(soma);
        }
        return (somaLinhas);
    }
    
    function somaColunas(matriz) {
        let somaColunas = [];
        for (let j = 0 ; j < matriz[0].length; j++) {
            let soma = 0;
            for (let i = 0; i < matriz.length; i++) {
                soma += matriz[i][j];
            }
            somaColunas.push(soma);
        }
        return (somaColunas);
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

let somaCadaColunas = somaColunas(matriz);
let somarLinha = somarCadaLinha(matriz);

console.log("Soma das colunas é respectivamente " + somaCadaColunas);
console.log("Soma das Linhas é respectivamente " + somarLinha);
    