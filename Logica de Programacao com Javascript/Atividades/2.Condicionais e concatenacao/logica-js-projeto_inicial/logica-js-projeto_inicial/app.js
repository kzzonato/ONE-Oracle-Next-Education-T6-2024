alert('Boas vindas ao jogo do número secreto');

let chute = prompt('Escolha um número entre 1 e 10');
let numeroSecreto = 9;
console.log(numeroSecreto);

// Se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
   alert(`Você acertou ! Número secreto é ${numeroSecreto}`);
} else {
   alert('Você errou!');
}

// Foi adicionado a extensão "Live Server" no projeto, está dentro do arquivo "index.html"


