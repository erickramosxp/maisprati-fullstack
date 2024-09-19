public class Gerente extends Funcionario{

    public Gerente() {};

    public Gerente(String nome, Double salario) {
        super(nome, salario);
    }
    public Double calcularBonus() {
        return (this.getSalario() * 0.30);
    };
}
