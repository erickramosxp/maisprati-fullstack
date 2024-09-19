public class Boleto extends FormaPagamento{
    @Override
    void processarPagamento(Double valor) {
        if (valor <= 0) {
            System.out.println("Não foi possível realizar a transação.");
            return ;
        }
        System.out.println("Validando pagamento...");
        System.out.println("O valor de R$ %.2f foi realizado para o boleto.".formatted(valor));
    }

    @Override
    void validarPagamento() {
        System.out.println("Validando dados do boleto...");
        System.out.println("Consultando o banco...");
    }
}
