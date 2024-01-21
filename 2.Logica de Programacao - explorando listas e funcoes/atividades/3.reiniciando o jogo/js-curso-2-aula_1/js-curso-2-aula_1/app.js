let numeroSecreto = gerarNumeroAleatorio();          
let tentativas = 1;                      

function exibirTextoNaTela(tag, texto){                                         
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){                                                                                 // função para as mensagens iniciais
    exibirTextoNaTela('h1', 'Jogo do numero secreto');                              
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');  
}

exibirMensagemInicial();

function verificaChute(){
    let chute = document.querySelector('input').value;                                                           // o valor digitado na caixa de texto
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';                                     // Adicionou verificação de tentativas
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou');                                                                      // Utilizando uma função dentro de outra
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');                                        // Ativando o botão novo jogo qnd ganhamos, removendo o atributo disabled do HTML
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errou'); 
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Errou'); 
            exibirTextoNaTela('p', 'O número secreto é maior')
        }  
        tentativas++;
        limparCampo();
    }            
}

function gerarNumeroAleatorio(){                                                  
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){                                                                                             // função para limpar o campo a cada chute
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){                                                                                          // função para reiniciar o jogo resetado
    numeroSecreto = gerarNumeroAleatorio();     
    limparCampo();     
    tentativas = 1;  
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);                                           // Para não ficar com o botão novo jogo abilitado (so abilita qnd ganhamos) 
}
