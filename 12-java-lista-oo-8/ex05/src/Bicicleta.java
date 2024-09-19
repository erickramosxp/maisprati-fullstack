public class Bicicleta implements IMeioTransporte{
    String modelo;

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Bicicleta(String modelo) {
        this.modelo = modelo;
    }

    @Override
    public void acelerar() {
        System.out.println("Estou acelerando a bicicleta...");
    }

    @Override
    public void frear() {
        System.out.println("Estou freiando a bicicleta...");
    }
}
