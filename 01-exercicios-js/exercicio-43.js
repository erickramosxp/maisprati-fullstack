/* 
    43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos. 
*/

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
};

const animal = {
    nome: "Leão",
    especie: "Panthera leo",
    habitat: "Savana africana"
};
  

function novoObj(obj1, obj2) {
    let novoObj = {};
    for (let elemento in obj1) {
        novoObj[elemento] = obj1[elemento];
    }
    for (let elemento in obj2) {
        novoObj[elemento] = obj2[elemento];
    }
    return (novoObj);
}

let nObj = novoObj(livro, animal);

console.log(nObj);