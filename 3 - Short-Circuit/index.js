// && -> false && true -> false "o valor"
// || -> true || false -> vai retornar "o valor verdadeiro"

// FALSY (Valores avaliado em falso) = 0 - '' - "" - `` - null/undefined - NAN
// false -> Literal

// Exemplo com &&

function falaOi () {
    return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

// Para que retorne a função, o valor da constt vaiExecutar tem que ser verdadeiro

// Exemplo ||

console.log( 0 || false || null || 'Luiz Otávio' || true);
// o || precisa de apenas 1 true para retornar