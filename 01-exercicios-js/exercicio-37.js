/*
    37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário. 
*/

let g = ['A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E'];

let alunos = [
    ['A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'D', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'B', 'E']
]

function verificarAcertos(gabarito, respostaAluno) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] == respostaAluno[i]) {
            acertos++;
        }
    }
    return (acertos);
}


for (let i = 0; i < alunos.length; i++) {
    let acertos;
    acertos = verificarAcertos(g, alunos[i]);
    if (acertos >= 12) {
        console.log("O aluno " + (i + 1) + " fez " + acertos + " acertos, está aprovado.");
    } else {
        console.log("O aluno " + (i + 1) + " fez " + acertos + " acertos, está reprovado.");
    }
}
