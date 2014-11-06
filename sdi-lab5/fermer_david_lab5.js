// David G. Fermer
// SDI 1411
// Lab 5

//Variables
var number1;
var number2;
var operation;
var answer;

//Functions
var add = function(num1, num2)
{
	var answer = (num1 + num2);
	return answer
};


//Main Code
number1 = parseInt(prompt("Enter your first whole number:"));
number2 = parseInt(prompt("Enter your second number:"));
operation = prompt("What operation would you like to apply to the numbers?","add, subtract, multiply or divide");

if (operation = "add")
{
	console.log("Your answer is " + add(number1,number2) + ".");
}
else if (operation = "subtract")
{
	console.log("Your answer is " + subtract(number1,number2) + ".");
}
else if (operation = "multiply")
{
	console.log("Your answer is " + multiply(number1,number2) + ".");
}
else
{
	console.log("Your answer is " + divide(number1,number2) + ".");
}
