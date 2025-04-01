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

