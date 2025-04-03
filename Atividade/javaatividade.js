//Terreno imobiliaria.
function terreno() {
    let largura = prompt("Qual a largura :");
    let comprimento = prompt("Qual o comprimento :");
    let dimensão = comprimento * largura;
    alert("O tamanho do terreno é" + dimensão + "mt²");
}


//Ferraduras Cavalos.
function cavalos() {
    let quantidadeCavalos = prompt("Qual a quantidade de Cavalos? : ");
    let ferraduras = quantidadeCavalos * 4;
    alert("A quantidade de ferraduras é : " + ferraduras)
}

//Padaria
function padaria() {
    let pao = prompt("Quantos Pães foram vendidos no dia?");
    let broa = prompt("Quantas Broas foram vendidas no dia?");
    let valorPao = pao * 0.12; // Preço de cada pão
    let valorBroa = broa * 1.50;
    let totalVendas = valorPao + valorBroa;
    let porcentagemPoupanca = 0.10;
    let poupanca = totalVendas * porcentagemPoupanca;
    alert("Total de vendas: R$ " + totalVendas);
    alert("Valor a ser colocado na poupança: R$ " + poupanca);
}

//Idade
function idade() {

    let ano = prompt("Voce tem quantos anos")
    let nome = prompt("Qual seu nome ? ")
    let dias = ano * 365
    alert(nome + " você já viveu " + dias + " dias")

}

//gasolina
function gasolina() {
    let gasolina = prompt("Qual o valor atual da Gasolina : ")
    let valor = prompt("Quanto o senhor quer colocar de gasolina : ")
    let litros = valor / gasolina

    alert("A quantidade de litros possivel é " + litros)

}

//prato
function prato() {
    let peso = prompt("Qual o peso do seu prato : ")
    let valorPeso = peso * 12.00
    let valorFinal = valorPeso

    alert("O preço do seu prato é : " + valorFinal + "Reais")

}

//Dias do ano
function dias() {
    let dia = prompt("Que dia é hoje: ");
    if (dia > 30) { dia = 30 }
    let mes = prompt("Que mês é hoje: ");
    if (mes > 12) { mes = 12  }
    let diasPorMes = 30;
    let diasAnteriores = (mes - 1) * diasPorMes;
    let totalDias = diasAnteriores + dia;
    alert("ja se passaram " + totalDias + " Dias")
}

//nota
function nota() {
    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt("Digite a segunda nota: "));
    let nota3 = parseFloat(prompt("Digite a terceira nota: "));
    
   
    let peso1 = 1;
    let peso2 = 2;
    let peso3 = 3;
    
    
    let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
    
    alert("A média ponderada das notas é: " + mediaPonderada.toFixed(2)); 
}

function teste() {
let quantidadePequena = prompt("Quantas camisetas pequenas :")
let quantidadeMedia = prompt("Quantas camisetas medias :")
let quantidadeGrande =  prompt("Quantas camisetas grandes :")
let valorFinal = (quantidadePequena * 10) + (quantidadeMedia * 12) + (quantidadeGrande * 15)
alert("O valor final é : " + valorFinal)
}

function plano(){
    
}

