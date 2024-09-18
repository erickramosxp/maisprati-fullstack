import TextEditor.Vim;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Vim vim = new Vim();
        Integer opcao = -1;

        while (opcao != 0) {
            menu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    escreverNoVim(vim);
                    break ;
                case 2:
                    vim.listar();
                    break;
                case 3:
                    vim.undo();
                    break;
                case 4:
                    vim.redo();
                    break;
                case 5:
                    vim.deleteAll();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção não reconhecida");
                    break;
            }
        }
    }

    private static void escreverNoVim(Vim vim) {
        Scanner sc = new Scanner(System.in);
        System.out.println("A QUALQUER MOMENTO DIGITE [ :wq ] PARA SAIR");
        String entrada = "";
        while (true) {
            entrada = sc.nextLine();
            if (entrada.equals(":wq"))
                break ;
            vim.add(entrada);
        }
        System.out.println("Arquivo fechado :)");
    }

    private static void menu() {
        System.out.println("""
                1) ESCREVER NO EDITOR
                2) MOSTRAR ARQUIVO
                3) DESFAZER ULTIMA ENTRADA
                4) REFAZER ULTIMA OPÇÃO DESFEITA
                5) APAGAR TUDO
                0) SAIR
                """);
    }
}
