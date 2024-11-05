// o correto seria fazer uma function

//primeira coisa a fazer é parar o envio do formulário
//no caso então, capturar o envio do submit do formulário

let botao = document.getElementById("botao");

botao.addEventListener("click", function (e) {
    e.preventDefault();
}); // Aqui o formulário não enviará mais

//puxando os valores declarados em PESO e em NUMERO
botao.addEventListener("click", function () {
    // Agora faremos com que ambos input façam a soma dos valores acrescidos

    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let resultado = document.getElementById("resultado");
    botao = document.getElementById("botao");
    let abaixo = document.getElementById("abaixo");
    let normal = document.getElementById("normal");
    let sobre = document.getElementById("sobre");
    let ob1 = document.getElementById("ob1");
    let ob2 = document.getElementById("ob2");
    let ob3 = document.getElementById("ob3");
    peso = Number(peso.value);
    altura = Number(altura.value);

    // vamos realizar conta para somar o IMC
    if (peso && altura) {
        const soma = peso / (altura * altura);
        // Manipulando a mensagem pós conta
        if (soma < 18.5) {
            resultado.textContent = "Seu IMC é " + soma.toFixed(2) + ' ' + abaixo.textContent;
            resultado.style.backgroundColor ="#FF4500"
        } else if (soma >= 18.5 && soma <= 24.9) {
            resultado.textContent = "Seu IMC é " + soma.toFixed(2) + ' ' + normal.textContent;
            resultado.style.backgroundColor ="#ADFF2F"
        } else if (soma >= 25 && soma <= 24.9) {
            resultado.textContent = "Seu IMC é " + soma.toFixed(2) + ' ' + sobre.textContent;
            resultado.style.backgroundColor ="	#FFFF00"
        } else if (soma > 30 && soma <= 34.9) {
            resultado.textContent = "Seu IMC é " + soma.toFixed(2) + ' ' + ob1.textContent;
            resultado.style.backgroundColor ="#FFA500"
        } else if (soma > 35 && soma <= 39.9) {
            resultado.textContent = "Seu IMC é " + soma.toFixed(2) + ' ' + ob2.textContent;
            resultado.style.backgroundColor ="#FF8C00"
        } else if (soma >= 40) {
            resultado.textContent = "Seu IMC é " + soma.toFixed(2) + ' ' + ob3.textContent;
            resultado.style.backgroundColor ="#FF0000"
        }
    }
});