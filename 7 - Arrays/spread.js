// ... = spread
//                             ÍNDICES
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2      
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]
];

console.log(numeros[1][2]); // acessando o índice 6

// nesta forma nós utilizamos a vírgula para pular o índice 0
// dentro do índice um colocamos mais um par de [] e utilizamos mais vírgula para pular os demais índices
const [ , [ , , seis]] = numeros; // acessando i índice 6 com spread.
console.log(seis);