let number1 = Number( prompt("entre the first number :"));
let operation = prompt("entre the operation symbole ( + ; - ; *; / ");
let number2 = Number(prompt("entre the second number :"));

switch (operation)
{
    case "+":
        alert("resultat:" +(number1 + +number2));
   break;
   case "-":
   alert("resultat:" +(number1 - number2));
   break;
   case "*":
   alert("resultat:" +(number1 * number2));
   break;
   case "/":
    if (number2 === 0) {
    alert("division par zero interdite !");
} else {
    alert("resultat: " + (nombre1 / nombre2));
    break;
}
default :
 alert("erreur operateur!");
}