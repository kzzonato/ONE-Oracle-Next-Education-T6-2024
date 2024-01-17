// 1
let diaDaSemana = prompt("Qual é o dia da semana? ");

if(diaDaSemana == "Sábado"){
    alert('Bom fim de semana!');
} else {
    if(diaDaSemana == "Domingo"){
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }
}

//2
let positivoOuNegativo= prompt("Digite um número (positivo ou negativo): ");

if(positivoOuNegativo < 0){
    alert("Esse número é negativo!");
} else {
   if(positivoOuNegativo == 0){
      alert("Esse número é neutro")
   } else {
    alert("Esse número é positivo");
   }
}

//3
let pontuacao = 120;

if(pontuacao >= 100){
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

//4
let saldo = 10000;

alert(`Seu saldo é R$${saldo}`)

//5
let seuNome = prompt("Digite o seu nome: ");

alert(`Seja bem vindo ${seuNome}!`);
