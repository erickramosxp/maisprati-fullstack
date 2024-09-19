public class CartaoCredito extends FormaPagamento{
    @Override
    void processarPagamento(Double valor) {
        if (valor <= 0) {
            System.out.println("Não foi possível realizar a transação.");
            return ;
        }
        System.out.println("Aguardado autorização da bandeira...");
        System.out.println("O valor de R$ %.2f foi debitado do seu cartão.".formatted(valor));
    }

    @Override
    void validarPagamento() {
        System.out.println("Validando dados do cartão...");
        System.out.println("Validando autorização do cartão...");
        System.out.println("Vericicação de segurança do cartão...");
    }
}
