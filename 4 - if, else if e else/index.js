// IF pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um IF
// eu posso ter vários else if na checagem
// só posso ter 1 else por último
// Podemos usar condições sem ELSE IF, usando apenas if e else

const hora = 10;

if (hora >= 0 && hora <= 11) { // se a hora for maior ou igual que 0 e menor ou igual que 11
    console.log ('Bom dia!'); // retorne bom dia
} else if (hora >= 12 && hora <= 17) { // se for maior ou igual que 12 e menor ou igual que 17
    console.log('Boa tarde!'); // retorne boa tarde
} else if (hora >= 18 && hora <= 23) { // se for maior ou igual que 18 e menor ou igual que 23
    console.log ('Boa noite!'); // retorne boa noite
} else {
    console.log('Olá'); //Caso de erro, ele irá retornar ola
}
