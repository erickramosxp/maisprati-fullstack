import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Empresa olx = new Empresa();
        Scanner sc = new Scanner(System.in);
        Integer opcao = -1;

        while (opcao != 0) {
            menu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    adicionarEmpregado(olx);
                    break;
                case 2:
                    olx.listarEmpregados();
                    break;
                case 3:
                    olx.listarCargos();
                    break;
                case 4:
                    alterarCargo(olx);
                    break;
                case 5:
                    olx.calcularFolhaPagamento();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
                    break;
            }
        }
    }

    private static void alterarCargo(Empresa olx) {
        Scanner sc = new Scanner(System.in);
        olx.listarEmpregados();
        System.out.println("Digite o nome da pessoa que ira alterar o cargo");
        String nome = sc.nextLine();
        Empregado empregado = olx.getFuncionario(nome);
        if (empregado == null) {
            System.out.println("Funcionario não encontrado");
            System.out.println();
            return ;
        }
        olx.listarCargos();
        System.out.println("Digite o nome do cargo para alteração");
        String cargo = sc.nextLine();
        empregado.setCargo(cargo);
        System.out.println("Cargo atualizado com sucesso!\n");
        System.out.println("Deseja alterar o salario ? S / N");
        String op = sc.nextLine();
        if (op.equalsIgnoreCase("n"))
            return ;
        System.out.println("Digite o novo salário");
        Double salario = sc.nextDouble();
        sc.nextLine();
        empregado.setSalario(salario);
        System.out.println("Salario atualizado com sucesso!\n");
    }

    private static void adicionarEmpregado(Empresa olx) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Insira o nome do funcionario:");
        String nome = sc.nextLine();
        olx.listarCargos();
        System.out.println("Insira o cargo do funcionario: ");
        String cargo = sc.nextLine();
        System.out.println("Insira o salario do funcionario:");
        Double salario = sc.nextDouble();
        sc.nextLine();
        Empregado empregado = new Empregado(nome, salario, cargo);
        olx.adicionarFuncionario(empregado);
    }

    private static void menu() {
        System.out.println("""
                1) ADICIONAR EMPREGADO
                2) LISTAR EMPREGADOS
                3) LISTAR CARGOS
                4) ALTERAR CARGO
                5) CALCULAR FOLHA DE PAGAMENTO
                0) SAIR
                """);
    }
}
