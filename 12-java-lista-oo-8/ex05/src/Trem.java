public class Trem implements IMeioTransporte{
    private String modelo;

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Trem(String modelo) {
        this.modelo = modelo;
    }

    @Override
    public void acelerar() {
        System.out.println("O trem está acelerando...");
    }

    @Override
    public void frear() {
        System.out.println("O trem está freiando...");
    }
}
