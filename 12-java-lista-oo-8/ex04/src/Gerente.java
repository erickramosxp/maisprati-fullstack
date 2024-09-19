public class Gerente extends Funcionario{

    public Gerente() {};

    public Gerente(String nome, Double salario) {
        super(nome, salario);
    }
    public Double calcularBonus() {
        return (this.getSalario() * 0.30);
    };

    @Override
    public void trabalhar() {
        System.out.println("Estou orientando toda minha equipe...");
    }
}
