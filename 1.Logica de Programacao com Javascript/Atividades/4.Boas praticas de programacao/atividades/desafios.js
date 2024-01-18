//1
console.log('Seja bem vindo ao nosso site!');

//2
let nome = 'João Pedro'
console.log(`Olá, ${nome}`);

//3
let nome2 = 'João Pedro'
alert(`Olá, ${nome2}`);

//4
let linguagemFavorita = prompt('Qual linguagem de programação você mais gosta ?');
console.log(linguagemFavorita);


//5
let valor1 = prompt('Digite um valor: ');
let valor2 = prompt('Digite outro valor: ');
let resultado = valor1 + valor2;
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//6
let valor3 =  prompt('Digite um valor: ');
let valor4 =  prompt('Digite outro valor: ');
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

//7
let idade = prompt('Digite a sua idade: ');
let maiorOuMenor = idade >= 18 ? 'maior de idade' : 'menor de idade';
console.log(`Você é ${maiorOuMenor}`);

//8
let numeroPositivoOuNegativo = prompt('Digite um número: ');
if(numeroPositivoOuNegativo == 0){
    console.log('O numero é zero (neutro).')
} else {
    if(numeroPositivoOuNegativo < 0){
        console.log('Numero é negativo');
    } else {
        console.log('Numero é positivo');
    }
}

//9
let contador = 1;
while(contador <= 10){
    console.log(contador++);
}

//10
let nota = 8;
if(nota >= 7){
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//11
let numeroAleatorio = parseInt(Math.random() * 3);
console.log(numeroAleatorio);

//12
let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

//13
let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio3);
