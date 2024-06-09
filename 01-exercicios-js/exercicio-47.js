/* 
    47. Crie uma função que transforme um objeto de entrada aplicando uma função
    fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados. 
*/

let objeto = {
    nome: "Maria Silva",
    idade: 20, 
    interesse: ['música', 'viagem'],
    endereco: {
        rua: 'Avenida Principal',
        numero: 309,
        cidade: 'Cidade Exemplo'
    }
}

let funUpper = function transformUpper(conteudo) {
    if (typeof conteudo === 'string')
        return conteudo.toUpperCase();
    else
        return conteudo;
}

function multiplica(conteudo) {
    if (typeof conteudo === 'number')
        return conteudo * 2;
    else
        return conteudo;
}


function transform(objeto, funcao) {
    let novoObjeto = {}
    Object.keys(objeto).forEach(chave => {
        if (Array.isArray(objeto[chave])) {
            novoObjeto[chave] = objeto[chave].map(funcao);
        } else if (typeof objeto[chave] === 'object' && !Array.isArray(objeto[chave])) {
            novoObjeto[chave] = transform(objeto[chave], funcao)
        } else {
            novoObjeto[chave] = funcao(objeto[chave]);
        }
    });
    return novoObjeto;
}

let newOBJ = transform(objeto, multiplica);

console.log(newOBJ);
