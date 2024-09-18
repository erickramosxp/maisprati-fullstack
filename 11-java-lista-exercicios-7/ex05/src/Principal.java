import Jogo.Baralho;
import Jogo.Carta;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Baralho baralho = new Baralho();

        Integer opcao = -1;

        while (opcao != 0) {
            menu();
            opcao = sc.nextInt();
            sc.nextLine();
            switch (opcao) {
                case 1:
                    baralho.mostrarBaralho();
                    break;
                case 2:
                    removerCarta(baralho);
                    break;
                case 3:
                    adicionarCarta(baralho);
                    break;
                case 4:
                    moverCarta(baralho);
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    break;
            }
        }
    }

    private static void moverCarta(Baralho baralho) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o indice da carta que deseja mover");
        Integer cartaIndice = sc.nextInt();
        sc.nextLine();
        if (cartaIndice < 0 || cartaIndice >= baralho.getSize()) {
            System.out.println("Valor fora dos limites.");
            return;
        }
        System.out.println("Digite para qual indice deseja mover a carta.");
        Integer moverTo = sc.nextInt();
        sc.nextLine();
        if (moverTo < 0 || moverTo >= baralho.getSize()) {
            System.out.println("Valor fora dos limites.");
            return;
        } else if (moverTo == cartaIndice) {
            System.out.println("Movimentação não e necessaria");
            return ;
        }
        baralho.moverCartaTo(cartaIndice, moverTo);
    }

    private static void adicionarCarta(Baralho baralho) {
        Carta carta = new Carta();
        Scanner sc = new Scanner(System.in);
        System.out.println("Insira o valor da carta");
        carta.setValor(sc.nextLine());
        System.out.println("Insira o nipe da carta");
        carta.setNipe(sc.nextLine());
        baralho.add(carta);
        System.out.println("Carta adicionada com sucesso.\n");
    }

    private static void removerCarta(Baralho baralho) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o indice da carta que deseja remover");
        Integer indice = sc.nextInt();
        sc.nextLine();
        baralho.remove(indice);
    }

    private static void menu() {
        System.out.println("""
                1) EXIBIR CARTAS
                2) REMOVER CARTA
                3) ADICIONAR CARTA
                4) MOVER CARTA
                0) SAIR
                """);
    }
}
