let option = Infinity
while(option != 0){option = (prompt("(0)close (1)sum (2)subtration (3)multiplication (4)division (5)average (6)OddOrEven (7)percent (8)find percent (9)table(mult/div) (10)expoent"))
let result = 0

if(option == 1){
    result = sum()
    alert("result: " + result)
}
if(option == 2){
    result = subtraction()
    alert("result: " + result)
}
if(option == 3){
    result = multiplication()
    alert("result: " + result)
}
if(option == 4){
    result = division()
    alert("result: " + result)
}
if (option == 5) {
        
    result = average()
    alert("average: "+ result)
    
}
if(option == 6){
   result = OddOrEven();
   console.log("odd = false / even = true")
   console.log("result: " + result)
   break
}
if(option == 7){
     result = percent1();
     alert("result: " + result)
}
if(option == 8){
    result = percent2();
    alert("percent: " + result + "%")
    
}
if(option == 9){
    table();
    break
}
if(option == 10){
resultexpoent = expoent()
alert("result: " + resultexpoent)
}

}
function sum(){
    let num1 = Number(prompt("1° value: "))
    let num2 = Number(prompt("2° value: "))
    const resultsum = num1 + num2
    return resultsum
}
function subtraction(){
     let num1 = Number(prompt("1° value: "))
    let num2 = Number(prompt("2° value: "))
    const resultsub = num1 - num2
    return resultsub
}
function multiplication(){
    let num1 = Number(prompt("1° value: "))
    let num2 = Number(prompt("2° value: "))
    const resultadomult = num1 * num2
    return resultadomult
    
}
function division(){
    let num1 = Number(prompt("1° value: "))
    let num2 = Number(prompt("2° value: ")) 
    const resultdiv = num1 / num2
    return resultdiv
}
function average(){
      let sum = 0; 
    let cont = Number(prompt("number of numbers (example: 3 = 10,20,30) (de 1 a 100): "));
    let Array = []; 

    if (cont >= 1 && cont <= 100) {
        for (let i = 0; i < cont; i++) {
            let num = Number(prompt("insert the " + (i + 1) + "º value:"));
            Array.push(num);    
            sum = sum + num; 
        }
        let finalaverage = sum / cont;
        return finalaverage
        
  }
}
function percent1 (){
     let num = Number(prompt("Enter the desired value: "))
    let percent = Number(prompt("Enter the percentage you wish to withdraw: "))
     let finalpercent = (num * percent) / 100
     return finalpercent
}
function percent2 (){
  let fix = Number(prompt("enter a fix value: "))
    let num = Number(prompt("Enter the desired value: "))
    const resultpercente = (num / fix) * 100
    return resultpercente
 }
function table(){
     let num = Number(prompt("Enter the desired value: "))
    console.log("multiplication table: ")
    for(let i = 1;i<=10;i++){
        resultmult = num * i 
        console.log(num + " * " + i + " = " + resultmult)
    }
    console.log("division table: ")
    for(let i = 1;i<=10;i++){
        resultdiv = num / i
        console.log(num + " / " + i + " = " + resultdiv)
}
    
    }
function OddOrEven(){
     let result = false
    let num = Number(prompt("Enter the desired value: "))
    if(num % 2 == 0){
        result = true
    }
    else{
        result = false
    }
    return result
  }
function expoent(){
    let num = Number(prompt("Enter the desired value: "))
 let expoent = Number(prompt("Enter the exponent for the number: "))
 let resultexpoent = num ** expoent
 return resultexpoent
 }

