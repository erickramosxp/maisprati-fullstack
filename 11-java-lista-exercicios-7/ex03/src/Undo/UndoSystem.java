package Undo;

public class UndoSystem {
    private Node head;

    private static class Node {
        String data;
        Node next;

        public Node(String data) {
            this.data = data;
            this.next = null;
        }
    }

    public UndoSystem() {
        this.head = null;
    }

    public void add(String data) {
        Node newNode = new Node(data);

        newNode.next = head;
        head = newNode;
        System.out.println("Ação adicionada com sucesso!\n");
    }

    public void undo() {
        if (this.head == null) {
            System.out.println("Nada a ser desfeito.");
            return ;
        }
        System.out.println("Ação: " + this.head.data + " removida com sucesso");
        this.head = this.head.next;
    }

    public void printList() {
        if (this.head == null) {
            System.out.println("Nada a ser exibido");
            return ;
        }
        Node temp = this.head;
        while (temp != null) {
            System.out.println("Ações: " + temp.data);
            temp = temp.next;
        }
        System.out.println();
    }
}
