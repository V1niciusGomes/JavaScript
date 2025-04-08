function estoque() {
    var minimo = Number(document.getElementById('minimo').value);
    var maximo = Number(document.getElementById('maximo').value);
    var atual = Number(document.getElementById('atual').value);
    var medio = (maximo + minimo) / 2;
    
    alert("A média de itens esperada no estoque é " + medio);
    
    if (atual > maximo) {
        alert("O seu estoque ultrapassou o limite");
    } else if (atual < minimo) {
        alert("O estoque está abaixo do mínimo necessário");
    } else {
        alert("O estoque está dentro dos limites");
    }
}
