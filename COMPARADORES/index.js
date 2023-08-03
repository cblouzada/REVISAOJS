

let numeroSorteado = parseInt(Math.random() * 10 + 1 );

let numeroDigitado = Number(prompt("Digite um número de 1 a 10 "))

console.log(`Seu número sorteado é: ${numeroSorteado}`);
console.log(`Seu número digitado é: ${numeroDigitado}`);


if(numeroSorteado > numeroDigitado){
    console.log("O número sorteado é maior que o seu número digitado")
}else if(numeroSorteado < numeroDigitado){
    console.log("O número sorteado é menor que o seu número digitado")
}else if(numeroSorteado === numeroDigitado){
    console.log("Numeros iguais")
}else{
    console.log("Numero não existente")
}




