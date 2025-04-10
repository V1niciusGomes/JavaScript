function numeros(){
//Criando vetor com 5 elementos
let numeros = [10, 20, 30, 40, 50];

// Mostrando os valores do vetor
for (let i = 0;i < numeros.length; i++){
    console.log(`Elemento na posição [${i}] é: ${numeros[i]}')
`);
}
}

function notas(){
    let notas =  [];
    
    for (let i = 0; i < 4; i++){
        let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
        
        notas.push(nota);
}
}