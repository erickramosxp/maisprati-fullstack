public abstract class Funcionario {
    private String nome;
    private Cargo cargo;
    private Double salario;
    private Double bonus;

    public Funcionario() {};

    public Funcionario(String nome, Double salario, String cargo) {
        this.nome = nome;
        this.salario = salario;
        setCargo(cargo);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCargo() {
        return cargo.name();
    }

    public void setCargo(String cargo) {
        this.cargo = Cargo.fromString(cargo);
        if (this.cargo == Cargo.DESENVOLVEDOR) {
            this.bonus = 0.15;
        } else if (this.cargo == Cargo.ESTAGIARIO) {
            this.bonus = 0.08;
        } else if (this.cargo == Cargo.AUXILIARTI) {
            this.bonus = 0.10;
        } else if (this.cargo == Cargo.GERENTE) {
            this.bonus = 0.2;
        } else {
            this.bonus = 0.05;
        }
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        if (salario <= 0) {
            System.out.println("Valor do salário não permitido.");
        }
        if (salario < 1200) {
            System.out.println("Valor muito abaixo do mínimo permitido");
        }
        this.salario = salario;
    }

    public abstract Double calcularBonus();
    public abstract Double calcularSalario();

    public Double getBonus() {
        return bonus;
    }
}
