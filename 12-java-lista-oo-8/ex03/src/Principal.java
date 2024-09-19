public class Principal {
    public static void main(String[] args) {
        Desenvolvedor dev = new Desenvolvedor("Datena", 2000.0);
        Gerente gerente = new Gerente("Carlos", 3500.0);

        System.out.println(dev.calcularBonus());
        System.out.println(gerente.calcularBonus());
    }
}
