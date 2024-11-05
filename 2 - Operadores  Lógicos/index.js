// Operadores Lógicos

/*
&& -> AND -> E
|| -> OR  -> OU
! -> NOT -> NÃO
*/

// Exemplos Rápidos

// And -> && -> e (Todas as expressões precisam ser verdadeiras para retornar TRUE)
const expressaoAnd1 = true && true;
const expressaoAnd2 = false && true;
console.log(expressaoAnd1); //Retornará true
console.log(expressaoAnd2); //Retornará false

// Or -> || -> Ou (Se uma expressão for TRUE, todas retornarão TRUE. Só retorna FALSE se ambas forem FALSE)
const expressaoOr1 = true || false;
const expressaoOr2 = false || false;

const expressaoOr3 = false || true;
const expressaoOr4 = true || true;

console.log(expressaoOr1); //Retornará false
console.log(expressaoOr2); //Retornará true
console.log(expressaoOr3); //Retornará true
console.log(expressaoOr4); //Retornará true

// Not -> ! -> Não (Inverte os booleans)
const expressaoNot1 = !false;
const expressaoNot2 = !true;

console.log(expressaoNot1); //Retornará true
console.log(expressaoNot2); //Retornará false


// Exemplos Detalhados

// And -> && -> e (Todas as expressões precisam ser verdadeiras para retornar TRUE)
const valor1 = 5 + 5;
const valor2 = 7 + 3;

const valor3 = 4 + 6;
const valor4 = 9 + 1;

const resultadoAnd = valor1 === valor2 && valor3 === valor4;

console.log(resultadoAnd); //Retornará true, todos os tipos são iguais e todas as op.Mat. dão o resultado igual.

// Or -> || -> Ou

const num1 = 10;
const num2 = 10;
const num3 = '10';
const num4 = 1;

const resultadoOr1 = num1 === num3 || num2 === num3;
const resultadoOr2 = num4 === num3 || num2 === num4;

console.log(resultadoOr1); //Retornará true
console.log(resultadoOr2); //Retornará false

// Not -> ! -> Não

const dado1 = false;
const dado2 = false;

const resultadoNot1 = dado1 == !true;
const resultadoNot2 = dado2 == !false;

console.log(resultadoNot1); //Retornará true, na expressão dizemos que o dado1 não é verdadeiro (sendo que quando declaramos, já indicamos que ele é false)
console.log(resultadoNot2); //Retornará false, na expressão dizemos que o dado2 não é falso (sendo que quando declaramos, já indicamos que ele é false)

const usuario = 'Rayane'
const senha = 'Pitty123'

const logIn = usuario == 'Rayane' && senha == 'Pitty123'; // retornará true
const erro = usuario == 'Rayane ' && senha == 'Abóbora123'; // retornará false