public class Produto {
    private String nome;
    private Double preco;
    private Integer quantidade;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        if (preco < 0) {
            System.out.println("O valor do produto não pode ser negativo");
            return ;
        }
        this.preco = preco;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQunatidade(Integer quantidade) {
        if (quantidade < 0) {
            System.out.println("A quantidade não pode ser negativa");
            return ;
        }
        this.quantidade = quantidade;
    }

    public void aplicarDesconto(Double porcentagem) {
        if (porcentagem > 50.0 ) {
            throw new RuntimeException("O desconto não pode ser superior a 50%");
        }
        if (porcentagem < 0.0) {
            throw new RuntimeException("O valor de desconto não pode ser negativo");
        }
        Double desconto = (preco * porcentagem) / 100;
        this.preco = preco - desconto;
        System.out.println("O valor de R$ %.2f foi aplicado de desconto.".formatted(desconto));
    }
}
