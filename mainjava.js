let nome = "maria";
let idade = 15;
let valor = 2.3;
var casado = false
let pessoa = {nome: "Lucia", idade: 12}
let cores = ["Amarelo", "Vermelho", "Verde"]


document.writeln(nome + "<br>")
document.writeln( valor + "<br>")
document.writeln(idade + "<br>")
document.writeln(casado + "<br>")
document.writeln(JSON.stringify(pessoa) + "<br>")
document.writeln(cores + "<br>")

document.writeln("<br>" + "<hr>" )

document.writeln("<h2>" + "Operadores Aritiméticos" + "</h2>" + "<br>")
document.writeln(3+2 +"<br>")
document.writeln(8*2 +"<br>")
document.writeln(10/4 +"<br>")
document.writeln(9-5 +"<br>")
document.writeln("9" + "5" + "<br>" + "<hr>")

document.writeln("<h2>" + "Definir operadores" + "</h2>")

var count = 0;
document.writeln(count+ "<br>")

count++;
document.writeln(count+ "<br>")

count--;
document.writeln(count+ "<br>")

count + 2;
document.writeln(count+ "<br>")

count *= 3;
document.writeln(count+ "<br>")

count
document.writeln(count+ "<br>")


var x = 2, y = 3; // Esses sinais = são atribuições e não testes de igualdade.
x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y // => verdadeiro: menor que
x <= y // => verdadeiro: menor ou igual a
x > y // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as duas strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // => verdadeiro: falso é igual a falso



