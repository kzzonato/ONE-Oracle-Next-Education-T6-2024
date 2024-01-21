let listaDeNumerosSorteados = [];                                                       // Criamos uma lista para guardar os numeros já sorteados
let numeroLimite = 10;                                                                  // desacoplamento, aparece em 2 lugares      
let numeroSecreto = gerarNumeroAleatorio();          
let tentativas = 1;                      

function exibirTextoNaTela(tag, texto){                                         
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
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
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;                                                // limitador de numeros

    if(quantidadeElementosNaLista == numeroLimite){    
        listaDeNumerosSorteados = [];                                                                               // vai limpar a lista
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){                                                          // verifica se o numero sorteado está dentro da lista
        return gerarNumeroAleatorio();                                                                              // utilizando recursividade
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);                                                              // introduzindo elementos para o array
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
