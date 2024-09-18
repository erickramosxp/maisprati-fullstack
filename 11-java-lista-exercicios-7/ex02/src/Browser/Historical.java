package Browser;

public class Historical {

    private Node head;
    private int qtdNode;
    private int limite;

    private static class Node {
        String caminho;
        Node next;

        public Node(String data) {
            this.caminho = data;
            this.next = null;
        }
    }

    public Historical(int limite) {
        this.head = null;
        this.qtdNode = 0;
        if (limite < 1)
            throw new RuntimeException("Erro, valor de limite de historico invalido.");
        this.limite = limite;
    }

    public void printHistory() {
        Node temp = this.head;
        while (temp != null) {
            System.out.println("Endereço: " + temp.caminho);
            temp = temp.next;
        }
        System.out.println();
    }

    public void add(String data) {
        Node newNode = new Node(data);
        this.qtdNode++;
        if (this.head == null) {
            this.head = newNode;
        } else {
            Node current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
            if (this.qtdNode > this.limite) {
                this.head = this.head.next;
                this.qtdNode--;
            }
        }
    }
}
