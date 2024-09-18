package List;

import javax.sound.midi.Soundbank;

public class TarefasList<T>{
    static Integer totalIds = 0;

    private Node head;

    private class Node {
        Integer id;
        String tarefaConcluida;
        T data;
        boolean isFirst = false;

        Node next;

        public Node(T data) {
            this.data = data;
            this.id = totalIds++;
            this.tarefaConcluida = "Não";
            this.next = null;
        }
    }

    public TarefasList() {
        this.head = null;
    }

    public void add(T data) {
        Node newNode = new Node(data);
        if (this.head == null) {
            newNode.isFirst = true;
            this.head = newNode;
        } else {
            Node current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        System.out.println("Tarefa adicionada com sucesso.");
    }

    public T get(int index) {
        Node current = this.head;
        int count = 0;
        while (current != null) {
            if (count == index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        throw new IndexOutOfBoundsException("Index fora dos limites");
    }

    public void remove(int id) {
        if (head == null) {
            throw new IndexOutOfBoundsException("Lista está vazia");
        }
        Node temp = head;
        while (temp != null && temp.id != id) {
            temp = temp.next;
        }
        if (temp.isFirst) {
            this.head.next.isFirst = true;
            this.head = this.head.next;
            System.out.println("Tarefa removida com sucesso");
            return ;
        }
        Node current = this.head;
        Node prev = null;

        while (current != null && current != temp) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        System.out.println("Tarefa removida com sucesso");
    }

    public void concluirTarefa(Integer id) {
        Node tarefa;
        tarefa = getTarefaById(id);
        if (tarefa == null) {
            System.out.println("\t\tId não identificado");
            return ;
        }
        tarefa.tarefaConcluida = "Sim";
        System.out.println("Tarefa marcada como concluida.");
    }

    public int size() {
        Node current = this.head;
        int count = 0;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }

    public boolean isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }

    public void listarTarefas() {
        Node temp = head;
        while (temp != null) {
            System.out.println("Id: " + temp.id + ", Tarefa: " + temp.data + ", Concluida: " + temp.tarefaConcluida);
            temp = temp.next;
        }
    }


    public Node getTarefaById(Integer id) {
        Node temp = head;

        while (temp != null) {
            if (temp.id == id)
                break ;
            temp = temp.next;
        }
        return temp;
    }

    public void menu() {
        System.out.println("""
                    
                    Bem vindo a sua lista de tarefas
                                OPÇÕES
                1) LISTAR TAREFAS
                2) ADICIONAR TAREFA
                3) REMOVER TAREFA
                4) MARCAR TAREFA COMO CONCLUIDA
                0) SAIR
                """);
    }
}
