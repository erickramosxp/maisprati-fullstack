/*
    44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número. 
*/

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",            
    idade: 35,               
    casada: false,           
    endereco: {
      rua: "Rua das Flores",
      numero: 123
    },
    interesses: ["música", "viagens", "culinária"],
    dataNascimento: new Date("1989-03-15")
};

function contarStringNoObjeto(objeto) {
    let contador = 0;
    for (let elemento in objeto) {
        if (typeof objeto[elemento] === 'string')
            contador++;
    }
    return (contador);
}

let numeroStringNoObjeto = contarStringNoObjeto(pessoa);

console.log("Quantidade de strings: " + numeroStringNoObjeto);
  