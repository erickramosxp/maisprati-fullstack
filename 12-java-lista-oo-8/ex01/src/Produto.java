import javax.sound.midi.Soundbank;

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
}
