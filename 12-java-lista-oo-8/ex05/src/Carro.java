public class Carro implements IMeioTransporte{
    private String modelo;

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Carro(String modelo) {
        this.modelo = modelo;
    }

    @Override
    public void acelerar() {
        System.out.println("O carro está acelerando...");
    }

    @Override
    public void frear() {
        System.out.println("O carro está freiando...");
    }
}
