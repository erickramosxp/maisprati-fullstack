import Gerenciador.ProcessoImpressao;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        ProcessoImpressao prcessos = new ProcessoImpressao();
        Scanner sc = new Scanner(System.in);
        Integer opcao = -1;

        while (opcao != 0) {
            menu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    try {
                        String processo = prcessos.imprimir();
                        System.out.println("O processo " + processo + " foi impresso.");
                        System.out.println();
                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case 2:
                    adicionarNaFila(prcessos);
                    break;
                case 3:
                    prcessos.printFila();
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

    private static void adicionarNaFila(ProcessoImpressao processos) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o nome do processo a ser adicionado na fila de impressão");
        String nome = sc.nextLine();
        processos.adicionarAFila(nome);
    }

    private static void menu() {
        System.out.println("""
                1) IMPRIMIR PROXIMO DA FILA
                2) ADICIONAR A FILA DE IMPRESSÃO
                3) VISUALIZAR FILA DE IMPRESSÃO
                """);
    }
}
