let opçao = (prompt("oq deseja fazer? (1)soma (2)menos (3)vezes (4)divisao (5)media (6)impar/par (7)porcentagem (8)achar porcentagem (9)tabuada (10)potencia"))

if(opçao == 1){
    let numero1 = Number(prompt("insira o 1° valor da soma: "))
    let numero2 = Number(prompt("insira o 2° valor da soma: "))
    const resultadosoma = numero1 + numero2
    alert("resultado: " + resultadosoma)
}
if(opçao == 2){
    let numero1 = Number(prompt("insira o 1° valor da subtraçao: "))
    let numero2 = Number(prompt("insira o 2° valor da subtraçao: "))
    const resultadosub = numero1 - numero2
    alert("resultado: " + resultadosub)
}
if(opçao == 3){
    let numero1 = Number(prompt("insira o 1° valor da multiplicaçao: "))
    let numero2 = Number(prompt("insira o 2° valor da multiplicaçao: "))
    const resultadomult = numero1 * numero2
    alert("resultado: " + resultadomult)
}
if(opçao == 4){
    let numero1 = Number(prompt("insira o 1° valor da divisao: ")) // Corrigido o texto
    let numero2 = Number(prompt("insira o 2° valor da divisao: ")) // Corrigido o texto
    const resultadodiv = numero1 / numero2
    alert("resultado: " + resultadodiv)
}
if (opçao == 5) {
    let soma = 0; 
    let contador = Number(prompt("Insira a quantidade de números para a média (de 1 a 10): "));
    let vetorNumeros = []; 

    if (contador >= 1 && contador <= 10) {
        for (let i = 0; i < contador; i++) {
            let numero = Number(prompt("Insira o " + (i + 1) + "º valor:"));
            vetorNumeros.push(numero);    
            soma = soma + numero; 
        }
        
        let mediaFinal = soma / contador;
        alert("A média dos valores digitados é: " + mediaFinal);
    } else {
        alert("Número inválido! Você precisa escolher uma quantidade entre 1 e 10.");
    }
}
if(opçao == 6){
    let numero = Number(prompt("insira o numero desejado: "))
    if(numero % 2 == 0){
        alert("seu numero é par")
    }
    else{
        alert("seu numero é impar")
    }
}
if(opçao == 7){
    let numero = Number(prompt("insira o valor desejado:"))
    let porcentagem = Number(prompt("insira a porcentage que deseja retirar: "))
     porcentagem = (numero * porcentagem) / 100
     alert("resultado: " + porcentagem)
}
if(opçao == 8){
    let numerofixo = Number(prompt("insira o valor fixo: "))
    let numero = Number(prompt("insira o valor desejado: "))
    const resultadoporcent = (numero / numerofixo) * 100
    alert("porcentagem: " + resultadoporcent + "%")
    
}
if(opçao == 9){
    let numero = Number(prompt("inisra o valor desejado: "))
    console.log("tabuada de multiplicaçao")
    for(let i = 1;i<=10;i++){
        resultadosmult = numero * i 
        console.log(numero + " * " + i + " = " + resultadosmult)
    }
    console.log("tabuada de divisao")
    for(let i = 1;i<=10;i++){
        resultadodiv = numero / i
        console.log(numero + " / " + i + " = " + resultadodiv)
    }
}
if(opçao == 10){
let numero = Number(prompt("inisra o valor desejado: "))
 let potencia = Number(prompt("inisra a potencia para o numero: "))
 let resultadopotent = numero ** potencia
alert("resultado: " + resultadopotent)
    
}

    
  
