alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;                                                              

while(chute != numeroSecreto){                                                   // loop adicionado
   chute = prompt('Digite um número de 1 a 10');

   if (chute == numeroSecreto) {
      alert(`Você acertou ! Número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
   } else {
      if( chute > numeroSecreto){
         alert(`O numero secreto é menor do que ${chute}`);                        // Dicas adicionadas
      } else {
         alert(`O numero secreto é maior do que ${chute}`);
      }
   }
   tentativas++;                                                                  // contador adicionadas
}
