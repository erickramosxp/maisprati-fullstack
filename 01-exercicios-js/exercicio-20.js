/* 
    20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
    INSS). 
*/

class funcionario {
    constructor (matricula, nome, salario) {
        this.matricula = matricula;
        this.nome = nome;
        this.salarioBruto = salario;
        this.deducaoINSS = this.salarioBruto * 0.12;
        this.salarioLiquido = (this.salarioBruto - this.salarioBruto * 0.12);
    }

    toString() {
        return (
            `matricula: ${this.matricula},\nnome: ${this.nome}\nsalarioBruto: ${this.salarioBruto},\ndeducaoINSS: ${this.deducaoINSS},\nsalarioLiquido: ${this.salarioLiquido}`
        );
    }
}

let pessoa = new funcionario(21455221, "João", 3000);

console.log(pessoa.toString());

