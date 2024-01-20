hello = () => 'Hello world';                                                     // Arrow Function
alert(hello);

let numeroSecreto = gerarNumeroAleatorio();                                      // guardando resultado de uma função em uma variavel

function exibirTextoNaTela(tag, texto){                                          // criou função com parametros
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');                              
exibirTextoNaTela9('p', 'Escolha um numero entre 1 e 10');

function verificaChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto ? 'acertou' : 'errou');                     // usando ternario 
}

function gerarNumeroAleatorio(){                                                   // Criou uma função com retorno
    return parseInt(Math.random() * 10 + 1);
}
