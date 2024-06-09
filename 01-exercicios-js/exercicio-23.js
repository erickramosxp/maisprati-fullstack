/* 
    23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
    diagonal principal são iguais a 1 e os demais são nulos.
 */


let matriz = [];

for (let i = 0; i < 7; i++) {
    matriz[i] = [];
    for(let j = 0; j < 7; j++){
        if (j == i) {
            matriz[i][j] = 1;
        } else {
            matriz[i][j] = null;
        }
    }
}

for (let i = 0; i < matriz.length; i++) {
    let linha = "";
    for (let j = 0; j < matriz[i].length; j++) {
        linha += matriz[i][j] + (matriz[i][j] == 1 ? "    " : "  ");
    }
    console.log(linha);
}