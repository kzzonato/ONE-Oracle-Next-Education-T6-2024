let listaDeNumerosSorteados = [];                                                       
let numeroLimite = 10;                                                                      
let numeroSecreto = gerarNumeroAleatorio();          
let tentativas = 1;                      

function exibirTextoNaTela(tag, texto){                                         
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});                                                              // Adicionou Speech
}

function exibirMensagemInicial(){                                                                                
    exibirTextoNaTela('h1', 'Jogo do numero secreto');                              
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite}`);  
}

exibirMensagemInicial();

function verificaChute(){
    let chute = document.querySelector('input').value;                                                           
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';                                     
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou');                                                                      
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');                                       
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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;                                              

    if(quantidadeElementosNaLista == numeroLimite){    
        listaDeNumerosSorteados = [];                                                                               
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){                                                          
        return gerarNumeroAleatorio();                                                                             
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);                                                             
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){                                                                                           
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){                                                                                          
    numeroSecreto = gerarNumeroAleatorio();     
    limparCampo();     
    tentativas = 1;  
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);                                          
}
