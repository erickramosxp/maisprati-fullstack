/*
    21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. 
*/

const prompt = require('prompt-sync')();

function calcularPesoIdeal(sexo, altura) {
    if (sexo == 'f'){
        let pesoIdeal = 62.1 * altura - 44.7;
        return (pesoIdeal);
    } else if (sexo == 'm') {
        let pesoIdeal = 72.7 * altura - 58;
        return (pesoIdeal);
    }else {
        console.log("Invalido!");
        return (0);
    }
}

let sexo;
let altura;
let peso;


console.log("Vamos calcular seu peso ideal.");

sexo = prompt("Insira seu sexo - M para (Masculino) - F para (Feminino): ");

altura = prompt("Insira sua altura: ");

peso = calcularPesoIdeal(sexo.toLocaleLowerCase(),altura);

console.log("Seu peso ideal é " + peso.toFixed(2) + " Kgs");

