/* 
    49. Você recebe um array de objetos representando transações financeiras. Cada
    transação possui id, valor, data, e categoria. Escreva uma função que retorne um 
    objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa 
    categoria. Adicionalmente, inclua um subtotal de valores por categoria. 
*/

const transacoes = [
    { id: 1, valor: 50.00, data: "2024-01-15", categoria: "Alimentação" },
    { id: 2, valor: 120.50, data: "2024-02-22", categoria: "Transporte" },
    { id: 3, valor: 80.00, data: "2024-03-10", categoria: "Lazer" },
    { id: 4, valor: 60.00, data: "2024-03-10", categoria: "Lazer" },
    { id: 5, valor: 350.00, data: "2024-04-05", categoria: "Moradia" },
    { id: 6, valor: 25.75, data: "2024-05-30", categoria: "Alimentação" }
];

function CriarObjs(transacoes) {
    let newOBJ = {}
    for (let obj of transacoes) {
        newOBJ[obj.categoria] = { transacoes: [], subtotal: 0};
    }
    return (newOBJ);
}

function agruparTransacoes(transacoes) {
    let newOBJ = CriarObjs(transacoes);
    for (let obj of transacoes) {
        newOBJ[obj.categoria].transacoes.push(obj.valor);
        newOBJ[obj.categoria].subtotal += obj.valor;
    }
    return (newOBJ);
}

let novoOBJ = agruparTransacoes(transacoes);

console.log(novoOBJ);