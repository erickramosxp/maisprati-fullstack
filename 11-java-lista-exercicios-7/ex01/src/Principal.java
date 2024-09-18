import List.TarefasList;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        TarefasList<String> tarefas = new TarefasList();
        Scanner scanner = new Scanner(System.in);
        Integer opcao = -1;

        tarefas.listarTarefas();
        while (opcao != 0) {
        tarefas.menu();
        opcao = scanner.nextInt();
        scanner.nextLine();
            switch (opcao) {
                case 1:
                    tarefas.listarTarefas();
                    break;
                case 2:
                    adicionarTarefa(tarefas);
                    break;
                case 3:
                    removerTarefa(tarefas);
                    break;
                case 4:
                    marcarConcluida(tarefas);
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção não encontrada");
                    break;
            }
        }


    }

    private static void removerTarefa(TarefasList tarefas) {
        Scanner sc = new Scanner(System.in);
        System.out.println("\tDigite o id da tarefa que deseja remover");
        Integer id = sc.nextInt();
        tarefas.remove(id);
    }

    private static void adicionarTarefa(TarefasList tarefas) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Insira a tarefa que deseja adicionar");
        String tarefa = sc.nextLine();
        tarefas.add(tarefa);
    }

    private static void marcarConcluida(TarefasList tarefas) {
            Scanner sc = new Scanner(System.in);
            tarefas.listarTarefas();
            System.out.println();
            System.out.println("Por favor insira o id da tarefa para marcar como concluida.");
            Integer id = sc.nextInt();
            tarefas.concluirTarefa(id);
    }
}
