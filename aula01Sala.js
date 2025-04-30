const prompt = require("prompt-sync")();

/*let numeros = [1,2,9,7,6,4,10];

console.log(numeros[3]);

const arrayNumeros = [1, 7, 8, 2, 4, 6, 9]
let concatenacao= "";

for (let i=0; i < 7; i=i+1){
 console.log(i + " => " + arrayNumeros[i])
}

const arrayNumeros = [2,4,10,9,22,4]
let media=0;
for(let x = 0; x < 6; x++ ){
   media = media + arrayNumeros[x]
}

media = media / 6;
console.log(media);

let numeros =[];
let media = 0,qtd;

qtd = prompt("Quantos valores serão informados: ");

for(let x=0; x<qtd; x++){
    numeros[x] = Number(prompt("Informe o valor da posição " + x + ": "));
    media = media + numeros[x];
}

for (let  x=0; x<qtd; x++){
    console.log("Posição " +x+ " - Valor " + numeros[x]);
}

media = media/qtd;
console.log("A média final é " + media);*/

let numeros = [1, 2, 3, -4, 5, 6, 7, -8, 9, -10]
let contador = 0;
let soma = 0;

for (x = 0; x < 10; x++) {
    if (numeros[x] < 0) {
        contador = contador + 1;
    } else
        soma = soma + numeros[x];
}

console.log("Qtd de numeros negativos são: " + contador);
console.log(soma);
