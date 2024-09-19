import java.util.ArrayList;

public class Empresa {
    ArrayList<Empregado> funcionarios = new ArrayList<>();

    public void adicionarFuncionario(Empregado empregado) {
        funcionarios.add(empregado);
    }

    public void listarCargos() {
        for (Cargo cargo : Cargo.values()) {
            System.out.println(cargo.name());
        }
    }

    public void listarEmpregados() {
        for (Empregado empregado : funcionarios) {
            System.out.println("Nome: " + empregado.getNome() + ", Cargo: " + empregado.getCargo());
        }
    }

    public void calcularFolhaPagamento() {
        Double total = 0.0;
        Double bonus = 0.0;
        for (Empregado empregado : funcionarios) {
            total += empregado.calcularSalario();
            total += empregado.calcularBonus();
            bonus += empregado.calcularBonus();
        }
        System.out.println("O total na folha de pagamento da empresa é R$ %.2f".formatted(total));
        System.out.println("Total em bonus R$ %.2f".formatted(bonus));
    }

    public Empregado getFuncionario(String nome) {
        for (Empregado empregado : funcionarios) {
            if (empregado.getNome().toLowerCase().contains(nome.toLowerCase())) {
                return empregado;
            }
        }
        return null;
    }
}
