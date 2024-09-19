public class Empregado extends Funcionario{

    public Empregado() {};

    public Empregado(String nome, Double salario, String cargo) {
        super(nome, salario, cargo);
    }
    @Override
    public Double calcularBonus() {
        return this.getBonus() * this.getSalario();
    }

    @Override
    public Double calcularSalario() {
        return this.getSalario();
    }
}
