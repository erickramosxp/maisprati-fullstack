package TextEditor;

public class Vim {
    Node head;
    Node tail;
    Node redo;

    public void listar() {
        if (head == null) {
            System.out.println("Nada para mostrar.\n");
            return ;
        }
        Node temp = head;
        System.out.println("------ INICIO DO ARQUIVO ------");
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
        System.out.println("---------- FIM DO ARQUIVO -----------\n");
    }

    class Node {
        String data;

        Node prev;
        Node next;

        public Node(String data) {
            this.data = data;
            this.prev = null;
            this.next = null;
        }
    }

    public Vim() {
        this.head = null;
        this.tail = null;
        this.redo = null;
    }

    public void add(String data) {
        Node newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    public void deleteAll() {
        this.head = null;
        this.tail = null;
        this.redo = null;
        System.out.println("Todo o conteudo foi apagado com sucesso.\n");
    }

    public void undo() {
        if (this.head == null) {
            System.out.println("Nada a ser desfeito\n");
            return ;
        }
        if (this.head.prev == null && this.head.next == null) {
            this.redo = head;
            this.head = null;
            this.tail = null;
            return ;
        }
        Node temp = this.tail;
        this.tail.prev.next = null;
        this.tail = temp.prev;
        temp.prev = null;
        this.redo = temp;
        System.out.println("Conteudo { \"" + temp.data + "\" removido}\n");
    }

    public void redo() {
        if (this.redo == null) {
            System.out.println("Nenhuma ação a ser refeita\n");
            return ;
        }
        if (this.head == null) {
            this.head = this.redo;
            this.tail = this.redo;
            System.out.println("Conteudo {\"" + this.redo.data + "\"} inserido");
            this.redo = null;
            return ;
        }
        this.tail.next = this.redo;
        this.redo.prev = this.tail;
        this.tail = this.redo;
        System.out.println("Conteudo {\"" + this.redo.data + "\"} inserido");
        this.redo = null;
    }
}
