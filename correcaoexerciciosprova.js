const prompt = require("prompt-sync")();
/*
let idade,sexo,salario,media=0,qtdPessoasResponderam=0;
let maiorIdade,menorIdade,qtdMulheresSal400MenorIdade;

do{
    idade=prompt("Informe a idade: ");
    sexo=prompt("Informe o sexo: ");
    salario=prompt("Informe o salário: ");
    media = media + salario;
    if(qtdPessoasResponderam == 0){
        maiorIdade = idade;
        maiorIdade = idade;
    }else{
        if(idade > maiorIdade){
            maiorIdade = idade;
        }else if(idade < menorIdade){
            menorIdade = idade;
        }
    }
    qtdPessoasResponderam++;
    if(salario < 400 && sexo == "f" && idade <18){
        qtdMulheresSal400MenorIdade++;
    }
}while(idade <= 80);

media = media/qtdPessoasResponderam;
console.log("A media dos salarios foi " + media);
console.log("A menor idade foi: " + menorIdade);
console.log("A maior idade foi " + maiorIdade);
console.log("Teve " + qtdMulheresSal400MenorIdade + "mulheres com salario de ate 400, menores de 18.");
*/

let qtdCDS= prompt("Informe a quantidade de Cds: ");
let precoTabua = prompt("Informe o preço da tabua: ");
let precoSuporte = prompt("Informe o preço do suporte: ");

let qtdTabuasCompletas=0,qtdTabuasImcompletas=0;

qtdTabuasCompletas= parseInt(qtdCDS/25);
qtdTabuasImcompletas= qtd%25;
if(qtdTabuasImcompletas>0){
    qtdTabuasImcompletas=1;
}

qtdTabuasCompletas= qtdTabuasCompletas + qtdTabuasImcompletas;
console.log("precisou de " + qtdTabuasCompletas + " de tabuas.");
console.log("Com o custo de " + precoTabua + "$ por tabua e " + precoSuporte + "$ por suporte" );
precoTabua= qtdTabuasCompletas*precoTabua;
precoSuporte= (qtdTabuasCompletas*precoSuporte)*2;
console.log("Com custo total de " + (precoTabua + precoSuporte));
