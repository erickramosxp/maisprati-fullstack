public class Desenvolvedor extends Funcionario{

    public Desenvolvedor() {};

    public Desenvolvedor(String nome, Double salario) {
        super(nome, salario);
    }

    public Double calcularBonus() {
        return (this.getSalario() * 0.15);
    };
}
