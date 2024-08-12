import javax.swing.plaf.synth.SynthOptionPaneUI;

public class Principal {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};


        // INVERTER ELEMENTOS
        int aux;

        for (int i = 0; i < ((array.length) / 2) ; i++) {
            aux = array[i];
            array[i] = array[(array.length - 1) - i];
            array[(array.length - 1) - i] = aux;
        }

//        for (int element : array) {
//            System.out.println(element);
//        }


        // REMOVER UM ELEMENTO
        int[] novoArray = new int[array.length - 1];

        int index = 5;

        System.arraycopy(array,0,  novoArray, 0, index);
        System.arraycopy(array,index + 1, novoArray, index, array.length - index - 1);

        array = novoArray;
        novoArray = null;
//        for (int element : array) {
//            System.out.println(element);
//        }

        // ADICIONAR UM ELEMENTO

        int newElement = 20;
        novoArray = new int[array.length + 1];
        System.arraycopy(array, 0, novoArray, 0, array.length);

        novoArray[array.length] = newElement;

        array = novoArray;
        novoArray = null;
//        for (int element : array) {
//            System.out.println(element);
//        }

        // PESQUISAR ELEMENTOS
        int find = 20;

        for (int i = 0; i < array.length; i++) {
            if (array[i] == find) {
                System.out.println("Elemento " + find + " foi encontrado no indice " + i);
            }
        }


        // SOMA DIAGONAL MATRIZ

        int[][] matriz = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        int somaPrincipal = 0;
        int somaSecundaria = 0;

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                if (i  == j) {
                    somaPrincipal += matriz[i][j];
                }
                if ((i + j) == matriz.length)
                    somaSecundaria += matriz[i][j];
            }
        }

        System.out.println(somaPrincipal);
        System.out.println(somaSecundaria);
        System.out.println();

        // IMPRIMIR MATRIZ
        for (int[] row : matriz) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }

        // ROTACIONAR MATRIZ

        int size = matriz.length;

        int[][] matrizRotacionada = new int[size][size];

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length ; j++) {
                matrizRotacionada[i][j] = matriz[j][i];
            }
        }
        System.out.println("Depois: ");
        for (int[] row : matrizRotacionada) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }

        // ACHAR OCORRENCIAS NA MATRIZ

        int quantidade = 0;
        find = 5;

        for (int i = 0 ; i < matrizRotacionada.length; i++) {
            for (int j = 0; j < matrizRotacionada[i].length; j++) {
                if (matrizRotacionada[i][j] == find){
                    System.out.println((quantidade + 1) + "° elemento encontrado na linha " + i + " coluna " + j);
                    quantidade++;
                }
            }
        }
        if (quantidade != 0) {
            System.out.println("Foi encontrada " + quantidade + (quantidade > 1 ? " ocorrencias" : " ocorrencia") + " do " + find);
        } else {
            System.out.println("Não foi encontrado nenhuma ocorrencia.");
        }
    }
}
