import Browser.Historical;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Integer opcao = -1;
        System.out.println("Insira o limite de quantidade de itens no historico");
        Integer limite = sc.nextInt();
        sc.nextLine();
        Historical history = new Historical(limite);

        while (opcao != 0) {
            printMenu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    adicionarAoHistorico(history);
                    break;
                case 2:
                    history.printHistory();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    break;
            }
        }
    }

    private static void printMenu() {
        System.out.println("""
                        Escolha uma opcao
                1) ADICIONAR AO HISTORICO
                2) IMPRIMIR HISTORICO
                0) SAIR
                """);
    }

    private static void adicionarAoHistorico(Historical history) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Insira o conteudo a ser adicionado ao histórico");
        String url = sc.nextLine();
        history.add(url);
    }
}
