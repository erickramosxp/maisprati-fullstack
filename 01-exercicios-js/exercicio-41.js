/*
    41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade. 
*/

let pessoa = {
    nome: "Erick",
    idade: 24
};

console.log("A idade é " + pessoa.idade + " anos");

pessoa.email = "test@test.com";

console.log(pessoa);