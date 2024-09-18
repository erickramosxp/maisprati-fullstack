package Jogo;

public class Baralho {

    int size;
    Node head;
    Node tail;

    class Node {
        int index;
        Carta carta;

        Node next;
        Node prev;

        public Node(Carta carta) {
            this.carta = carta;
            this.prev = null;
            this.next = null;
        }
    }

    public Baralho() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        cartasIniciais();
    }

    public int getSize() {
        return size;
    }

    public void add(Carta carta) {
        Node newNode = new Node(carta);
        this.size++;
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.index = this.tail.index + 1;
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    public void remove(int index) {
        if (head == null) {
            System.out.println("Nada a ser removido\n");
            return ;
        }
        if (index < 0 || index >= this.size) {
            System.out.println("Indice fora do range de cartas\n");
            return ;
        }
        if (index == 0 && this.size == 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return ;
        }
        if (index == 0) {
            head = head.next;
            head.prev = null;
            reorganizeIndex();
            size--;
            return ;
        }
        Node temp = this.head;
        while (temp != null && temp.index != index) {
            temp = temp.next;
        }
        Node prev = temp.prev;
        prev.next = temp.next;
        if (temp.next != null) {
            temp.next.prev = prev;
        }
        reorganizeIndex();
        size--;
        System.out.println("Removida com sucesso");
    }

    public void mostrarBaralho() {
        Node temp = this.head;
        while (temp != null) {
            System.out.println("Indice: " + temp.index + " -> " + temp.carta.getValor()  + " - Nipe -> "+ temp.carta.getNipe());
            temp = temp.next;
        }
        System.out.println();
    }

    public void cartasIniciais() {
        Carta carta1 = new Carta();
        carta1.setNipe("Espadas");
        carta1.setValor("Ás");
        this.add(carta1);

        Carta carta2 = new Carta();
        carta2.setNipe("Copas");
        carta2.setValor("Rei");
        this.add(carta2);

        Carta carta3 = new Carta();
        carta3.setNipe("Ouros");
        carta3.setValor("Dama");
        this.add(carta3);

        Carta carta4 = new Carta();
        carta4.setNipe("Paus");
        carta4.setValor("Valete");
        this.add(carta4);

        Carta carta5 = new Carta();
        carta5.setNipe("Espadas");
        carta5.setValor("10");
        this.add(carta5);
        System.out.println("\n 5 CARTAS INICIAS FORAM ADICIONADAS\n");
    }

    private void reorganizeIndex() {
        Node temp = this.head;
        int i = 0;
        while (temp != null) {
            temp.index = i;
            i++;
            temp = temp.next;
        }
    }

    public Node getCartaPorIndex(Integer index) {
        Node temp = this.head;
        while (temp.index != index) {
            temp = temp.next;
        }
        return (temp);
    }

    public Node desanexNode(Node src) {
        if (src.index == 0) {
            this.head = this.head.next;
            this.head.prev = null;
            src.next = null;
        } else if (src.index == size - 1) {
            this.tail.prev.next = null;
            this.tail = src.prev;
            src.prev = null;
        } else {
            src.next.prev = src.prev;
            src.prev.next = src.next;
            src.next = null;
            src.prev = null;
        }
        size--;
        return (src);
    }

    public void moverCartaTo(Integer origem, Integer destino) {
        Node src = getCartaPorIndex(origem);
        Node dest = getCartaPorIndex(destino);

        src = desanexNode(src);

        if (dest.prev == null) {
            src.next = dest;
            dest.prev = src;
            this.head = src;
        } else if (dest.next == null) {
            this.tail.next = src;
            src.prev = this.tail;
            this.tail = src;
        } else {
            dest.prev.next = src;
            src.prev = dest.prev;
            src.next = dest;
            dest.prev = src;
        }
        size++;
        reorganizeIndex();
        System.out.println("Carta movida com sucesso.\n");
    }
}
