function fut() {
    let vitoriasLider = prompt("Qual o numero de pontos do lider")
    let vitoriaLanterna = prompt("Qual o numero de pontos do lanterna")
    let vitoriasNecessarias = (vitoriasLider - vitoriaLanterna) / 3

    alert("Vitorias necessarias para o lanterna alcançar o lider: " + vitoriasNecessarias)
}

function valor() {
    let A = prompt("Qual o valor de A")
    let B = prompt("Qual o valor de B")
    let C = A
    A = B
    B = A

    alert("O valor é A" + B + "Valor B" + C);
}

function sexo() {
    let sexo = prompt("Qual o seu sexo? M/F (Masculino/Feminino)");

    if (sexo == "M" || sexo == "Masculino") {
        alert("Sexo masculino selecionado.");
    } else if (sexo == "F" || sexo == "Feminino") {
        alert("Sexo feminino selecionado.");
    } else {
        alert("Sexo inválido.");
    }
}

function a() {
    let pergunta1 = prompt("Telefonou para a vítima? (sim/não)");
    let pergunta2 = prompt("Esteve no local do crime? (sim/não)");
    let pergunta3 = prompt("Mora perto da vítima? (sim/não)");
    let pergunta4 = prompt("Devia para a vítima? (sim/não)");
    let pergunta5 = prompt("Já trabalhou com a vítima? (sim/não)");

    let contagem = 0; // Inicializa contagem
    if (pergunta1 == "sim") {
        contagem += 1; //aumenta contagem se responder sim
    }

    if (pergunta2 == "sim") {
        contagem += 1;
    }

    if (pergunta3 == "sim") {
        contagem += 1;
    }

    if (pergunta4 == "sim") {
        contagem += 1;
    }

    if (pergunta5 == "sim") {
        contagem += 1;
    }
    if (contagem == 2) {
        alert("Você é um(a) Suspeita"); // define o que cada contagem significa//cumplice//inocente//suspeito...
    } else if (contagem == 3 || contagem == 4) {
        alert("Você é um(a) Cúmplice");
    } else if (contagem == 5) {
        alert("Você é um(a) Assassino");
    } else if (contagem == 0 || contagem == 1) {
        alert("Você é um(a) Inocente");
    }
}



