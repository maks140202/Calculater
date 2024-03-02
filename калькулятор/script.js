const calculatorMathLine=document.getElementById("calculator-panel-math-line");
const calculatorResult=document.getElementById("calculator-panel-result");
const calculatorButtons=document.getElementById("calculator-buttons");


let firstNumber="";
let secondNumber="";
let operator="";






calculatorButtons.addEventListener("click", function(e) {

    const button= e.target;
    const buttonValue= button.textContent;

    if (buttonValue === "C") {
    
    calculatorMathLine.textContent="";
calculatorResult.textContent="";
resetVars();

} else if (button.classList.contains("number")) {
if (operator.length>0) {
secondNumber=secondNumber+buttonValue;
} else { firstNumber= firstNumber+buttonValue;} 
} else if (button.classList.contains("operator")) 
{ if (firstNumber.length === 0|| secondNumber.length !==0){
return;
} operator=buttonValue;

} else if (buttonValue==="=") {
    if (secondNumber.length===0) {
        return;
    }
    


firstNumber= +firstNumber;
secondNumber= +secondNumber;



if (operator==="/")
{
    calculatorResult.textContent = firstNumber / secondNumber;

} else if (operator==="*") {
    calculatorResult.textContent = firstNumber * secondNumber;
} else if (operator==="-") {
    calculatorResult.textContent = firstNumber - secondNumber;
} else if (operator==="+") {
    calculatorResult.textContent = firstNumber + secondNumber;
} 


resetVars();


} else if (buttonValue === ".") {
   let number=(operator.length>0) ? secondNumber: firstNumber;
   

if (number.length=== 0||number.includes(".")) {
return;
}

   if (operator.length > 0) {
        secondNumber=secondNumber+buttonValue;
    } else {
        firstNumber= firstNumber + buttonValue;
    }
}
calculatorMathLine.textContent = firstNumber + operator + secondNumber;
});

function resetVars() {
    firstNumber="";
    secondNumber="";
    operator="";
}






