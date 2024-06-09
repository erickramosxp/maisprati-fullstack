/* 
    45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. 
*/

const strings = [
    "maçã",
    "banana",
    "laranja",
    "maçã",
    "uva",
    "banana",
    "pera",
    "laranja",
    "maçã",
    "pera"
];

function contarElementos(string){
    let obj = {};
    for (let elemento in string) {
        if (obj[string[elemento]] >= 1)
            obj[string[elemento]] += 1;
        else
            obj[string[elemento]] = 1;
    }
    return (obj)
}

let contador = contarElementos(strings);

console.log(contador);