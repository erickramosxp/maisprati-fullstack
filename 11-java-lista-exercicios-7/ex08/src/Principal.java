import sistema.FilaProcessos;
import sistema.Processo;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) throws InterruptedException {

        FilaProcessos processos = new FilaProcessos();
        Scanner sc = new Scanner(System.in);
        Integer opcao = -1;

        while (opcao != 0) {
            menu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    processos.executarProcesso();
                    break;
                case 2:
                    processos.removerProcesso();
                    break;
                case 3:
                    processos.listarProcessos();
                    break;
                case 4:
                    adicionarNovoProcesso(processos);
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

    private static void adicionarNovoProcesso(FilaProcessos processos) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o nome do novo processo: ");
        String nomeProcesso = sc.nextLine();
        Processo novoPorcesso = new Processo(nomeProcesso);
        processos.adicionarProcesso(novoPorcesso);
    }

    private static void menu() {
        System.out.println("""
                1) EXECUTAR PROCESSO
                2) EXECUTAR E FINALIZAR PROCESSO
                3) LISTAR PROCESSOS
                4) ADICIONAR PROCESSO
                0) SAIR
                """);
    }
}
