alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1);                                                    // Adicionou Math.randon()
console.log(numeroSecreto);
let chute;
let tentativas = 1;                                                              

while(chute != numeroSecreto){                                                   
   chute = prompt('Digite um número de 1 a 100');

   if (chute == numeroSecreto) {
      break;                                                                                              // adicionou break
   } else {
      if( chute > numeroSecreto){
         alert(`O numero secreto é menor do que ${chute}`);                        
      } else {
         alert(`O numero secreto é maior do que ${chute}`);
      }
   }
   tentativas++;                                                                 
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';                                       // adicionou operador ternario
alert(`Você acertou ! Número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);          // arrumou a frase com plural e tirou if-else
