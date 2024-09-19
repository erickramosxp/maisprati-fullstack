public class Pix extends FormaPagamento{
    @Override
    void processarPagamento(Double valor) {
        if (valor <= 0) {
            System.out.println("Não foi possível realizar a transação.");
            return ;
        }
        System.out.println("Transferindo o valor de R$ %.2f.".formatted(valor));
        System.out.println("Comprovante da transação impresso.");
    }

    @Override
    void validarPagamento() {
        System.out.println("Validando chave Pix...");
        System.out.println("Validando valor da transação...");
        System.out.println("Confirmando transação...");
    }
}
