/* 
    46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor.
     Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. 
*/

let loja = [
    {nome: "Claudio" , vendas: [1200,3000,4000]},
    {nome: "Patricia", vendas: [600,3500,400]},
    {nome: "Andreia", vendas: [700,2500,2000]},
    {nome: "Junior", vendas: [200,4000,7000]},
]

function calcularVendasPorVendedos(loja){
    for (let vendedor of loja) {
        let totalVendas = 0;
        for (let vendas in vendedor.vendas) {
            totalVendas += vendedor.vendas[vendas];
        }
        console.log(`O vendedor ${vendedor.nome} teve R$${totalVendas} reais em vendas`);
    }
}

calcularVendasPorVendedos(loja);