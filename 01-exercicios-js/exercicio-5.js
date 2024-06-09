/* 5.Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require("prompt-sync")();

const jogadas = ['pedra', 'papel', 'tesoura'];

let opcaoMaquina = Math.floor(Math.random() * 3);


let opcaoJogador = prompt("Pedra, papel ou teoura ? ");
opcaoJogador = opcaoJogador.toLowerCase();

console.log("O computador escolheu " + jogadas[opcaoMaquina]);

if ((opcaoJogador === "tesoura" && jogadas[opcaoMaquina] === "papel") ||
    (opcaoJogador === "pedra" && jogadas[opcaoMaquina] === "tesoura") ||
    (opcaoJogador === "papel" && jogadas[opcaoMaquina] === "pedra")
    ) {
    console.log("Você ganhou!")
} else if (opcaoJogador ===  jogadas[opcaoMaquina]) {
    console.log("Empate");
} else {
    console.log("Você perdeu");
}
