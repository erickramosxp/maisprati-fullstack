import Bank.Fila;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Fila filaBank = new Fila();
        Scanner sc = new Scanner(System.in);
        Integer opcao = -1;

        while (opcao != 0) {
            menu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    try {
                        String cliente = filaBank.atender();
                        System.out.println("Cliente " + cliente + " foi atendido.");
                        System.out.println();
                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case 2:
                    adicionarNaFila(filaBank);
                    break;
                case 3:
                    filaBank.printFila();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção não encontrada.\n");
                    break;
            }
        }
    }

    private static void adicionarNaFila(Fila filaBank) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o nome do cliente a ser adicionado na fila");
        String nome = sc.nextLine();
        filaBank.adicionarAFila(nome);
    }

    private static void menu() {
        System.out.println("""
                1) ATENDER PROXIMO DA FILA
                2) ADICIONAR A FILA
                3) VISUALIZAR FILA
                """);
    }
}
