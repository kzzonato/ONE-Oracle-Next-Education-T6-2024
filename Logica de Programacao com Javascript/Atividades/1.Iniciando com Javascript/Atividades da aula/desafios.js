alert('Welcome to our website!');

let name = 'Lua';
let age = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let errorMenssage = 'Error ! Fill in all fields';

alert(errorMenssage);

let name2 = prompt("Type your name: ");
let age2 = prompt('Type your age: ');

if(age2 >= 18){
    alert('You can get your driving license!');
}