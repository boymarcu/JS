const verdadeira = true;

let nome = 'Marcus'; // criando uma LET
var nome2 = 'Rayna';

// // Não é possível redeclarar LET.


// if (verdadeira) {
//     console.log(nome, nome2);
// }

// // LET possuem escopo de blocos, logo:
// // Tudo que estiver dentro de chaves é um bloco (isso é um bloco)

//  /*
// if (verdadeira) {
//     let nome ='Rarararayna'; // criando OUTRA LET
//     console.log(nome, nome2);
// }
// */

// // VAR só tem escopo de função!!


// if (verdadeira) {
//     let nome = 'di novo';
//     console.log(nome, nome2)

//     if (verdadeira){
//         let nome = 'tinganei'
//         console.log(nome, nome2)
//     }
// }

// var nome2 = 'Vinicius' // Var Redeclarada
// console.log(nome, nome2)

// if (verdadeira){
//     var nome2 = 'Targino'
//     console.log (nome, nome2)
// }

// if (verdadeira){
//     var nome2 = 'Santos'
//     console.log(nome, nome2)

//     if (verdadeira){
//         var nome2 = 'Albuquerque'
//         console.log(nome, nome2)
//     }
// }

// // em uma FUNCTION, não é possível declarar dentro e chamar fora do escopo da função

// function falaOi(){
//     var nome = 'Marcus';
//     console.log(nome, nome2);
// }
// falaOi();

// Porém, é possível pegar o valor da uma VAR para chamar 


// ELEVAÇÃO -  Hoisting (eleva a declaração de variáveis)
console.log(sobrenome); // chamando uma variável antes dela ser definida

// var sobrenome = 'Lima' // retornará undefinded
 
// com LET não corre Hoisting
let sobrenome = 'Lima'