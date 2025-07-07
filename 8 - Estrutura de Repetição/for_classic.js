// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

for (let i = 0; i <= 5 ; i++) {
    console.log(`Linha ${i}`);
}

// Caso precise que essa estrutura de repetição pule por um valor X específico:

for (let i = 0; i <=20; i += 2) {
    console.log(`Linha ${i}`);
}

// Também pode começar do negativo, ou inverter

// Usando uma estrutura de repetição para conferir se o valor é PAR ou ÍMPAR:

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}


// Percorrendo um Array
const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}