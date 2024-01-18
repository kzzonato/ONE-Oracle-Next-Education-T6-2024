alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 300;                                                                             // adicionou a variavel 'numeroMaximo" para desaclopamento
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);                                                    
console.log(numeroSecreto);
let chute;
let tentativas = 1;                                                              

while(chute != numeroSecreto){                                                   
   chute = prompt(`Digite um número de 1 a ${numeroMaximo}`);

   if (chute == numeroSecreto) {
      break;                                                                                             
   } else {
      if( chute > numeroSecreto){
         alert(`O numero secreto é menor do que ${chute}`);                        
      } else {
         alert(`O numero secreto é maior do que ${chute}`);
      }
   }
   tentativas++;                                                                 
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';                                       
alert(`Você acertou ! Número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);         
