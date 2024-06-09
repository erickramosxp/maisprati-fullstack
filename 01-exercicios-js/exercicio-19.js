/* 
    19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de    repetição. Escrever cada um deles no formato HH.MM.SS. 
*/

const prompt = require('prompt-sync')();

let horarios = [];

for (let i = 0; i < 5; i++) {
    let correto = false;
    do {
        let horario = prompt("Insira o " + (i + 1) + "° horario no seguinte formato HH:MM:SS - ");
        if (horario.length != 8) {
            console.log("Formato das horas invalido! Tente novamente!");
            continue ;
        }
        let separacao = horario.split(':');
        if ((parseInt(separacao[0]) > 23) || isNaN(parseInt(separacao[0]))){
            console.log("Erro formato da hora incorreto, tente novamente!");
            continue ;
        } if (parseInt(separacao[1]) > 59 || isNaN(parseInt(separacao[1]))) {
            console.log("Erro formato dos minutos incorreta, tente novamente!");
            continue ;
        } if (parseInt(separacao[2]) > 59 || isNaN(parseInt(separacao[2]))) {
            console.log("Erro formato dos segundos incorreta, tente novamente!");
            continue ;
        }
        horarios.push(horario);
        correto = true;
    } while (!correto);
}

for (let horario in horarios) {
    console.log("Horario - " + horarios[horario])
}