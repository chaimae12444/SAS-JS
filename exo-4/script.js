let number1 = prompt("entre the first number :");
let operation = prompt("entre the operation symbole ( + ; - ; *; / ");
let number2 = prompt("entre the second number :");

switch (operation)
{
    case "+":
        alert(+number1 + +number2);
   break;
   case "-";
   alert(number1 - number2);
   break;
   alert(number1 * number2);
   break;
   case "/":
    if (number2 !=0) {
alert(number1 : number2);
    break;
} else {
    alert("error");
    break;
}
default : alert("error :( try again")
}