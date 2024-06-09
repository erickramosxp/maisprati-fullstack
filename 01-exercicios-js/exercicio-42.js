/* 
    42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays. 
*/

let dados = {
    rua: "Projetada",
    numero: 299,
    cidade: "Magé",
    distritos: ["Magé", "Santo Aleixo", "Rio do Ouro", "Suruí", "Guia de Pacobaíba", "Vila Inhomirim"],
    sextoDistrito: ["Jardim Novo Horizonte", "Maurimárcia", "Parque Caçula", "Pau Grande", "Piabetá", "Vila Inhomirim", "Vila Recreio"]
}


function novo_objeto(objeto) {
    let novoObj = {};
    for(let elemento in objeto){
        if (Array.isArray(objeto[elemento])) {
            novoObj[elemento] = objeto[elemento];
        }
    }
    return (novoObj);
}

let novoObj = novo_objeto(dados);

console.log(novoObj);