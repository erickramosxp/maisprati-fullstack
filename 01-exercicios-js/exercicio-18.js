/*
    18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.
 */

const prompt = require('prompt-sync')();

class funcionarios {
    constructor (nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

let nome = prompt("Insira o nome do Funcionario: ");
let cargo = prompt("Insira o cargo do Funcionario: ");
let salario = parseFloat(prompt("Insira o salario do funcionario: "));

let funcionario = new funcionarios(nome, cargo, salario);

console.log(funcionario);