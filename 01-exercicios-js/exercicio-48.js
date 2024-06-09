/* 
    48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.
*/

const inventarioLojaA = {
    "camiseta": 25,
    "calça jeans": 18,
    "tênis": 12,
    "jaqueta": 8,
    "boné": 30,
    "meia": 50
};
  
const inventarioLojaB = {
    "camiseta": 32,
    "calça jeans": 20,
    "tênis": 15,
    "moletom": 10,
    "boné": 25,
    "cachecol": 12
};

function somaDeEstoque(estoqueLoja1, estoqueLoja2) {
    let novoObjeto = {};
    for (let chave in estoqueLoja1) {
        novoObjeto[chave] = estoqueLoja1[chave];
    }
    for (let chave in estoqueLoja2) {
        if (novoObjeto[chave] >= 0) {
            novoObjeto[chave] += estoqueLoja2[chave];
        } else {
            novoObjeto[chave] = estoqueLoja2[chave];
        }
    }
    return (novoObjeto);
}


let newOBJ = somaDeEstoque(inventarioLojaA, inventarioLojaB);

console.log(newOBJ);