public enum Cargo {
    DESENVOLVEDOR("Desenvolvedor"),
    GERENTE("Gerente"),
    ESTAGIARIO("Estagiário"),
    AUXILIARTI("Auxiliar de ti"),
    DESCONHECIDO("Desconhecido");

    private String cargo;

    Cargo(String cargo) {
        this.cargo = cargo;
    }

    public static Cargo fromString(String text) {
        for (Cargo cargoN : Cargo.values()) {
            if (cargoN.cargo.equalsIgnoreCase(text)) {
                return cargoN;
            }
        }
        System.out.println("Cargo não encontrado.");
        return DESCONHECIDO;
    }
}
