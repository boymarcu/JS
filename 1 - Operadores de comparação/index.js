// Operadores de Comparação
/*
> (Maior que)
>= (Maior ou igual que)
< (Menor que)
<= (Menor ou igual que)
== (Igualdade) (Valor)
=== (Igualdade estrita) (Valor e Tipo)
!= (Diferente) (Valor)
!== (Diferente estrito) (Valor e Tipo)
*/

// Vamos aos exemplos:

// Maior que ">"
const maiorV = 10 > 5;
const maiorF = 7 > 11;
console.log(maiorV); //Retornará true.
console.log(maiorF); //Retornará false

// Maior ou Igual que ">="
const maiorIgualV = 17 >= 13;
const maiorIgualF = 8 >= 30;
console.log(maiorIgualV); //Retornará true
console.log(maiorIgualF); //Retornará false

// Menor que "<"
const menorV = 5 < 7;
const menorF = 1 < 2;
console.log(menorV); //Retornará true
console.log(menorF); //Retornará false

// Menor ou Igual que "<="
const menorIgualV = 5 <= 5; //Retornará true
const menorIgualF = 7 <= 4; //Retornará false

// Igualdade "=="
const num1 = 10;
const num2 = 10;
const num3 = '10';
const compIgV = num1 == num2;
const compIgF = num1 == num3;
console.log(compIgV); //Retornará true, ambos são o mesmo valor
console.log(compIgF); //Retornará true, ambos são o mesmo valor, apesar de não serem do mesmo tipo (um é number e o outro string)

// Igualdade estrita "==="
const num1E = '10';
const num2E = '10';
const num3E = 10;
const compIgReV = num1E === num2E;
const compIgReF = num1E === num3E;
console.log(compIgReV); //Retornará true, ambos são o mesmo valor e mesmo tipo (string)
console.log(compIgReF); // Retornará false, apesar de ambos terem o mesmo valor, não são do mesmo tipo (number e string)

// Diferente "!=""
const valor1 = '20';
const valor2 = 20;
const valor3 = '32';
const compDiffV = valor1 != valor2;
const compDiffF = valor1 != valor3;
console.log(compDiffV); //Retornará false, ambos valores são iguais, apesar dos tipos serem diferentes
console.log(compDiffF); //Retornará true, ambos valores e tipos são diferentes

//Diferente estrito "!=="
const valor1D = 2;
const valor2D = 2;
const valor3D = '4';
const compDiffEsV = valor1D !== valor2D;
const CompDiffEsF = valor1D !== valor3D;
console.log(compDiffEsV); //Retornará falso, ambos valores e tipos são iguais
console.log(CompDiffEsF); //Retornará true, ambos valores e tipos são diferentes