import Undo.UndoSystem;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        UndoSystem list = new UndoSystem();
        Scanner sc = new Scanner(System.in);
        int opcao = -1;

        while (opcao != 0) {
            menu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    addText(list);
                    break;
                case 2:
                    list.undo();
                    break;
                case 3:
                    list.printList();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção não encontrada.");
                    break;
            }
        }
    }

    private static void menu() {
        System.out.println("""
                1) ADICIONAR AÇÃO REALIZADA
                2) REMOVER ULTIMA AÇÃO REALIZADA
                3) IMPRIMIR AÇÕES REALIZADAS
                0) SAIR
                """);
    }

    private static void addText(UndoSystem list) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Adicione uma a ação realizada");
        String acao = sc.nextLine();
        list.add(acao);
    }
}
