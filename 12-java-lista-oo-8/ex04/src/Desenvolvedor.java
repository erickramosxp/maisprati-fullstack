public class Desenvolvedor extends Funcionario{

    public Desenvolvedor() {};

    public Desenvolvedor(String nome, Double salario) {
        super(nome, salario);
    }

    public Double calcularBonus() {
        return (this.getSalario() * 0.15);
    };

    @Override
    public void trabalhar() {
        System.out.println("Estou resolvendo alguns bugs...");
    }
}
