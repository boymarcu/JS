// Objeto:

const pessoa = {
    nome: 'Marcus',
    sobrenome: 'Lima',
    idade: 22,
    endereco: {
        rua: 'Juana samary',
        numero: 356
    }
};

/* Criando uma var para puxar o conteúdo no nosso obj
const nome = pessoa.nome;
console.log(nome); */

//Atribuição via desestruturação
const { nome } = pessoa;
console.log(nome);
// Passando um objeto desestrurando a chave

// Podemos pegar quantas chave quisermos:
const { sobrenome, endereco} = pessoa
console.log(nome, sobrenome, endereco);

// Também podemos atribuir um valor, mesmo que não exista nenhuma var nesse objeto:
const { idade, anoNascimento = 'Não existe'} = pessoa;
console.log(idade, anoNascimento);

// Podemos redeclarar uma variável:
const { nome: teste, rua} = pessoa && endereco;
console.log(teste, rua);

// Fiz um teste em cima de como pegar o conteúdo de um objeto dentro de outro objeto (aninhado)
// Segue a outra forma viável:
const { sobrenome: sN, endereco: { numero } } = pessoa;
console.log(sN, numero);