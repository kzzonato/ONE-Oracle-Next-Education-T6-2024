//1
function calcularImc(altura, peso){
    let imc = parseInt(peso/(altura*altura));
    return imc;
}

//2
function calcularFatorial(num){   
    if(num < 0){
        return -1;
    } else {
        if(num == 0){
            return 1;
        } else {
            return(num * calcularFatorial(num-1));
        }
    }
}

//3
function converteDolar(dolar){
    let cotacao = 4.80;
    let convercao = parseInt(dolar*cotacao);
    return convercao;
}

//4
function calculaAreaEoPerimetroRetangulo(altura, largura){
    let area = altura*largura;
    let perimetro = 2*(altura+largura);
    let resultado = `A area é ${area} e o perimetro é ${perimetro}`;
    return resultado;
}


//5   
function calculaAreaEoPerimetroCirculo(raio){
    let perimetro = parseFloat(2*3.14*raio);
    let area = parseFloat(3.14*raio^2);
    let resultado = `A area é ${area} e o perimetro é ${perimetro}`;
    return resultado;
}

//6
function tabuada(num){
    let tabela = `
        ${num} x 1 = ${num*1}\n
        ${num} x 2 = ${num*2}\n
        ${num} x 3 = ${num*3}\n
        ${num} x 4 = ${num*4}\n
        ${num} x 5 = ${num*5}\n
        ${num} x 6 = ${num*6}\n
        ${num} x 7 = ${num*7}\n
        ${num} x 8 = ${num*8}\n
        ${num} x 9 = ${num*9}\n
        ${num} x 10 = ${num*10}\n
        `;
    return tabela;
}



