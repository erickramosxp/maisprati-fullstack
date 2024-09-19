public abstract class FormaPagamento {
    abstract void processarPagamento(Double valor);
    abstract void validarPagamento();
}
