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
    if (mes > 12) { mes = 12 }
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
    let quantidadeGrande = prompt("Quantas camisetas grandes :")
    let valorFinal = (quantidadePequena * 10) + (quantidadeMedia * 12) + (quantidadeGrande * 15)
    alert("O valor final é : " + valorFinal)
}

function plano() {

    let x1 = parseFloat(prompt("Digite a coordenada x do primeiro ponto:"));
    let y1 = parseFloat(prompt("Digite a coordenada y do primeiro ponto:"));

    let x2 = parseFloat(prompt("Digite a coordenada x do segundo ponto:"));
    let y2 = parseFloat(prompt("Digite a coordenada y do segundo ponto:"));

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    alert("A distância entre os dois pontos é: " + distancia.toFixed(2));
}

function converterTempo() {
    let dias = parseInt(prompt("Quantos dias de trabalho sem acidentes?"));
    let anos = Math.floor(dias / 365);
    dias %= 365;
    let meses = Math.floor(dias / 30);
    dias %= 30;
    alert("Tempo trabalhado: " + anos + " anos, " + meses + " meses e " + dias + " dias.");
}


// 12. Aumento de salário e desconto de impostos
function calcularSalario() {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let aumento = salario * 0.15;
    let salarioAumentado = salario + aumento;
    let desconto = salarioAumentado * 0.08;
    let salarioFinal = salarioAumentado - desconto;
    alert("Salário inicial: R$ " + salario.toFixed(2));
    alert("Salário com aumento: R$ " + salarioAumentado.toFixed(2));
    alert("Salário final: R$ " + salarioFinal.toFixed(2));
}
// 13. Separar um número inteiro em centena, dezena e unidade
function separarNumero() {
    let numero = parseInt(prompt("Digite um número inteiro (até 3 dígitos):"));
    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = numero % 10;
    alert("CENTENA = " + centena);
    alert("DEZENA = " + dezena);
    alert("UNIDADE = " + unidade);
}
// 14. Calcular a área de uma pizza
function areaPizza() {
    let raio = parseFloat(prompt("Digite o raio da pizza:"));
    let area = 3.14 * Math.pow(raio, 2);
    alert("A área da pizza é: " + area.toFixed(2) + " m²");
}
// 15. Dividir a conta de um bar entre amigos
function dividirConta() {
    let valorTotal = parseFloat(prompt("Qual o valor total da conta?"));
    let parteFelipe = valorTotal - Math.floor(valorTotal / 3) * 2; // Felipe paga o resto
    let parteCarlos = Math.floor(valorTotal / 3);
    let parteAndré = Math.floor(valorTotal / 3);
    alert("Carlos deve pagar: R$ " + parteCarlos.toFixed(2));
    alert("André deve pagar: R$ " + parteAndré.toFixed(2));
    alert("Felipe deve pagar: R$ " + parteFelipe.toFixed(2));
}
// 16. Calcular ingredientes para sanduíches
function calcularIngredientes() {
    let quantidadeSanduiches = parseInt(prompt("Quantos sanduíches você vai fazer?"));
    let queijo = (quantidadeSanduiches * 2 * 50) / 1000; // em quilos
    let presunto = (quantidadeSanduiches * 1 * 50) / 1000; // em quilos
    let carne = (quantidadeSanduiches * 1 * 100) / 1000; // em quilos
    alert("Quantidade de queijo: " + queijo.toFixed(2) + " kg");
    alert("Quantidade de presunto: " + presunto.toFixed(2) + " kg");
    alert("Quantidade de carne: " + carne.toFixed(2) + " kg");
}
// 17. Converter temperatura de Celsius para Fahrenheit
function celsiusParaFahrenheit() {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2) + " °F");
}
// 18. Calcular salário bruto e líquido
function calcularSalarioFuncionario() {
    let salarioFixo = parseFloat(prompt("Digite o salário fixo do funcionário:"));
    let horasNormais = parseInt(prompt("Digite o número de horas normais trabalhadas:"));
    let horasExtras = parseInt(prompt("Digite o número de horas extras trabalhadas:"));
    
    let salarioBruto = (horasNormais * 10) + (horasExtras * 15) + salarioFixo;
    let salarioLiquido = salarioBruto * 0.90; // 10% de impostos
    alert("Salário bruto: R$ " + salarioBruto.toFixed(2));
    alert("Salário líquido: R$ " + salarioLiquido.toFixed(2));
}
// 19. Calcular gasto total da granja
function calcularGastoFrangos() {
    let quantidadeFrangos = parseInt(prompt("Quantos frangos há na granja?"));
    let custoChip = 4.00;
    let custoAnelAlimento = 3.50;
    let gastoTotal = (custoChip + (2 * custoAnelAlimento)) * quantidadeFrangos;
    alert("O gasto total da granja é: R$ " + gastoTotal.toFixed(2));
}
// 20. Calcular novelos de lã por blusa
function calcularNovelosPorBlusa() {
    let quantidadeBlusas = parseInt(prompt("Quantas blusas de lã foram produzidas?"));
    let quantidadeNovelos = parseInt(prompt("Quantos novelos foram usados?"));
    let novelosPorBlusa = quantidadeNovelos / quantidadeBlusas;
    alert("Novelos de lã gastos por blusa: " + novelosPorBlusa.toFixed(2));
}
// 21. Calcular litros de refrigerante
function calcularLitrosRefrigerante() {
    let latas = parseInt(prompt("Quantas latas de 350 ml foram compradas?"));
    let garrafas600ml = parseInt(prompt("Quantas garrafas de 600 ml foram compradas?"));
    let garrafas2L = parseInt(prompt("Quantas garrafas de 2 litros foram compradas?"));
    let totalLitros = (latas * 0.35) + (garrafas600ml * 0.6) + (garrafas2L * 2);
    alert("Total de litros de refrigerante comprados: " + totalLitros.toFixed(2) + " L");
}
// 22. Calcular valor total economizado em moedas
function calcularEconomia() {
    let umReal = parseInt(prompt("Quantas moedas de 1 real?"));
    let cincoCentavos = parseInt(prompt("Quantas moedas de 5 centavos?"));
    let dezCentavos = parseInt(prompt("Quantas moedas de 10 centavos?"));
    let vinteCincoCentavos = parseInt(prompt("Quantas moedas de 25 centavos?"));
    let cinquentaCentavos = parseInt(prompt("Quantas moedas de 50 centavos?"));
    let total = umReal + (cincoCentavos * 0.05) + (dezCentavos * 0.10) + (vinteCincoCentavos * 0.25) + (cinquentaCentavos * 0.50);
    alert("Total economizado: R$ " + total.toFixed(2));
}
// 23. Calcular altura do prédio
function calcularAlturaPredio() {
    let alturaPessoa = parseFloat(prompt("Digite a altura da sua sombra:"));
    let sombraPredio = parseFloat(prompt("Digite o comprimento da sombra do prédio:"));
    let alturaPredio = (alturaPessoa * sombraPredio) / alturaPessoa;
    alert("A altura do prédio é: " + alturaPredio.toFixed(2) + " metros.");
}
// 24. Calcular litros de água e suco para refresco
function calcularRefresco() {
    let litrosRefresco = parseFloat(prompt("Quantos litros de refresco você deseja fazer?"));
    let agua = (litrosRefresco * 8) / 10;
    let suco = (litrosRefresco * 2) / 10;
    alert("Litros de água necessários: " + agua.toFixed(2) + " L");
    alert("Litros de suco necessários: " + suco.toFixed(2) + " L");
}
// 25. Calcular volume de uma caixa d'água cilíndrica
function calcularVolumeCaixa() {
    let raio = parseFloat(prompt("Digite o raio da caixa d'água (em metros):"));
    let altura = parseFloat(prompt("Digite a altura da caixa d'água (em metros):"));
    let volume = 3.14 * Math.pow(raio, 2) * altura;
    alert("O volume da caixa d'água é: " + volume.toFixed(2) + " m³");
}
// 26. Multiplicação de três números
function multiplicarTresNumeros() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));
    let resultado = num1 * num2 * num3;
    alert("A multiplicação dos números é: " + resultado);
}
// 27. Divisão de dois números
function dividirDoisNumeros() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let resultado = num1 / num2;
    alert("A divisão do primeiro número pelo segundo é: " + resultado);
}
// 28. Média ponderada de duas notas
function mediaPonderada() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let media = (nota1 * 2 + nota2 * 3) / (2 + 3);
    alert("A média ponderada é: " + media.toFixed(2));
}
// 29. Calcular novo preço com desconto
function calcularNovoPreco() {
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let desconto = preco * 0.10;
    let novoPreco = preco - desconto;
    alert("O novo preço com desconto é: R$ " + novoPreco.toFixed(2));
}
// 30. Calcular comissão e salário final
function calcularSalarioComComissao() {
    let salarioFixo = parseFloat(prompt("Digite o salário fixo do funcionário:"));
    let vendas = parseFloat(prompt("Digite o valor total das vendas:"));
    let comissao = vendas * 0.04;
    let salarioFinal = salarioFixo + comissao;
    alert("A comissão é: R$ " + comissao.toFixed(2));
    alert("O salário final é: R$ " + salarioFinal.toFixed(2));
}
// 31. Calcular novo peso após engordar ou emagrecer
function calcularPeso() {
    let peso = parseFloat(prompt("Digite o peso da pessoa (em kg):"));
    let pesoEngordar = peso * 1.15; // Engordar 15%
    let pesoEmagrecer = peso * 0.80; // Emagrecer 20%
    alert("Novo peso após engordar 15%: " + pesoEngordar.toFixed(2) + " kg");
    alert("Novo peso após emagrecer 20%: " + pesoEmagrecer.toFixed(2) + " kg");
}
// 32. Converter peso de quilos para gramas
function converterPeso() {
    let peso = parseFloat(prompt("Digite o peso em quilos:"));
    let pesoEmGramas = peso * 1000;
    alert("O peso em gramas é: " + pesoEmGramas + " g");
}
// 33. Calcular a área de um trapézio
function calcularAreaTrapezio() {
    let baseMaior = parseFloat(prompt("Digite a medida da base maior:"));
    let baseMenor = parseFloat(prompt("Digite a medida da base menor:"));
    let altura = parseFloat(prompt("Digite a altura do trapézio:"));
    let area = ((baseMaior + baseMenor) * altura) / 2;
    alert("A área do trapézio é: " + area.toFixed(2) + " m²");
}
// 34. Calcular a área de um quadrado
function calcularAreaQuadrado() {
    let lado = parseFloat(prompt("Digite o valor do lado do quadrado:"));
    let area = lado * lado;
    alert("A área do quadrado é: " + area.toFixed(2) + " m²");
}
// 35. Calcular a área de um losango
function calcularAreaLosango() {
    let diagonalMaior = parseFloat(prompt("Digite a medida da diagonal maior:"));
    let diagonalMenor = parseFloat(prompt("Digite a medida da diagonal menor:"));
    let area = (diagonalMaior * diagonalMenor) / 2;
    alert("A área do losango é: " + area.toFixed(2) + " m²");
}
// 36. Calcular quantos salários mínimos um funcionário ganha
function calcularSalariosMinimos() {
    let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));
    let salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário:"));
    let quantidadeSalarios = salarioFuncionario / salarioMinimo;
    alert("O funcionário ganha: " + quantidadeSalarios.toFixed(2) + " salários mínimos.");
}
// 37. Calcular a tabuada de um número
function tabuada() {
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert("Tabuada do " + numero + ":\n" + resultado);
}
// 38. Calcular a idade de uma pessoa
function calcularIdade() {
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    let idadeMeses = idade * 12;
    let idadeDias = idade * 365;
    let idadeSemanas = Math.floor(idadeDias / 7);
    alert("Idade em anos: " + idade);
    alert("Idade em meses: " + idadeMeses);
    alert("Idade em dias: " + idadeDias);
    alert("Idade em semanas: " + idadeSemanas);
}
// 39. Calcular quanto restará do salário após pagar contas
function calcularRestanteSalario() {
    let salario = 1200.00;
    let conta1 = 200.00;
    let conta2 = 120.00;
    let multa = 0.02; // 2%
    let totalContas = (conta1 * (1 + multa)) + (conta2 * (1 + multa));
    let restante = salario - totalContas;
    alert("Restante do salário após pagar as contas: R$ " + restante.toFixed(2));
}
// 40. Calcular a hipotenusa de um triângulo
function calcularHipotenusa() {
    let cateto1 = parseFloat(prompt("Digite o comprimento do primeiro cateto:"));
    let cateto2 = parseFloat(prompt("Digite o comprimento do segundo cateto:"));
    let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    alert("A hipotenusa do triângulo é: " + hipotenusa.toFixed(2));
}

