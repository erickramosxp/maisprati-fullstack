import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
        Carro carro = new Carro("HB20");
        Bicicleta bike = new Bicicleta("Monark");
        Trem trem = new Trem("Trem Bala");

        ArrayList<IMeioTransporte> transportes = new ArrayList<>();

        transportes.add(carro);
        transportes.add(bike);
        transportes.add(trem);

        for (IMeioTransporte transporte : transportes) {
            transporte.acelerar();
            transporte.frear();
            System.out.println();
        }
    }
}
