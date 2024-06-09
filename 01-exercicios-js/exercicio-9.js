/* 
    9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário. 
*/

const prompt = require('prompt-sync')();

let salariosMaculino = [];
let salariosFeminino = [];

let continuar = 1;

do {
    let sexo = prompt("Insira o sexo do funcionario: M (Masculino ) ou F (Feminino): ");
    let salario = parseFloat(prompt("Insira o salário do funcionario: "));
    if (sexo.toLocaleLowerCase() == 'm') {
        salariosMaculino.push(salario);
    } else if (sexo.toLocaleLowerCase() == 'f') {
        salariosFeminino.push(salario);
    } else {
        console.log("Entrada não identificada");
        return (1);
    }
    continuar = parseInt(prompt("Digite 0 para parar ou qualquer outra tecla para continuar."));
} while (continuar);


function calcular_total(salarios) {
    let total = 0;
    for (let salario in salarios) {
        total += salarios[salario];
    }
    return (total);
}


let totalFeminino = parseFloat(calcular_total(salariosFeminino)).toFixed(2);
let totalMasculino = parseFloat(calcular_total(salariosMaculino)).toFixed(2);

if (totalFeminino > 0) {
    console.log("Total do salario feminino é de R$ " + totalFeminino);
} else {
    console.log("Salario feminino não informado.")
}

if (totalMasculino > 0) {
    console.log("Total do salario masculino é de R$ " + totalMasculino);
} else {
    console.log("Salario masculino não informado.")
}


