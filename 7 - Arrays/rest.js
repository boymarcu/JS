//                           Indíce
//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//                           Valores
const[primeiroNumero, segundoNumero, ...resto] = numeros; //! ... = rest operator (resto)
console.log(primeiroNumero, segundoNumero, resto);