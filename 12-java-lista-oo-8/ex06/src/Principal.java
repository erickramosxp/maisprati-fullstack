import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {

        Gato gato = new Gato();
        gato.setNome("Garfield");
        Cachorro dog = new Cachorro();
        dog.setNome("Fred");
        Vaca vaca = new Vaca();
        vaca.setNome("Monalisa");

        ArrayList<Animal> animais = new ArrayList<Animal>();

        animais.add(gato);
        animais.add(dog);
        animais.add(vaca);

        for (Animal animal : animais) {
            System.out.println("Nome: " + animal.getNome());
            animal.emitirSom();
            System.out.println();
        }
    }


}
