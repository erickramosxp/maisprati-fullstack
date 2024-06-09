/* 
    22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a
    média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    350,00. 
*/

const prompt = require('prompt-sync')();

function Pessoa(salario,NumeroFilhos) {
    this.NumeroFilhos = NumeroFilhos;
    this.salario = salario;
}

function calcularMediaFilhos(pessoas) {
    let totalFilhos = 0;
    for (let pessoa in pessoas) {
        totalFilhos += pessoas[pessoa].NumeroFilhos;
    }
    return (totalFilhos / pessoas.length);
}

function calcularMediaSalario(pessoas) {
    let totalSalario = 0;
    for (let pessoa in pessoas) {
        totalSalario += pessoas[pessoa].salario;
    }
    return (totalSalario / pessoas.length);
}

function calcularMaiorSalario(pessoas) {
    let maiorSalario = pessoas[0].salario;
    for (let pessoa in pessoas) {
        if (maiorSalario < pessoas[pessoa].salario){
            maiorSalario = pessoas[pessoa].salario;
        }
    }
    return (maiorSalario);
}

function percentualLimite(pessoas) {
    let contador = 0;
    for (let pessoa in pessoas) {
        if (350 > pessoas[pessoa].salario) {
            contador++;
        }
    }
    return ((contador * 100) / pessoas.length);
}


function receberDados() {

    let pessoas = [];
    let parar = false;

    do {
        let salario = parseFloat(prompt("Insira o salario: "));
        let nbFilhos = parseInt(prompt("Insira o numero de filhos: "));
        if (isNaN(nbFilhos) || isNaN(salario)){
            console.log("Error! Tente novamente!")
            continue ;
        }

        let pessoa = new Pessoa(salario, nbFilhos);
        pessoas.push(pessoa);

        let continua = prompt("Deseja parar ? S - (Sim) | N - (Não): ");
        if (continua.toLocaleLowerCase() == 's') {
            parar = true;
        }
    } while(parar == false)
        return (pessoas);
}

let pessoas = receberDados();
let mediaSalario = calcularMaiorSalario(pessoas);
let mediaNumeroFilhos = calcularMediaFilhos(pessoas);
let maiorSalario = calcularMaiorSalario(pessoas);
let baixaRenda = percentualLimite(pessoas);


console.log("Média de salário da população e R$ " + mediaSalario);
console.log("Média do número de filhos é " + mediaNumeroFilhos.toFixed(2));
console.log("Maior salário é R$ " + maiorSalario);
console.log("Percentual de pessoas com salário até R$ 350,00 é " + baixaRenda.toFixed(2) + "%");
