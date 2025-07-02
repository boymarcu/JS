let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

[a, b, c] = [1, 2, 3]; // Desestruturação

// atribuição via desestruturação
const letras = [b, c, a];
[a, b, c] = letras;
// alterando os valores dos índices de acordo com as variáveis

console.log(a, b, c)