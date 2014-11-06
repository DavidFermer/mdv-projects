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

var subtract = function(num1, num2)
{
	var answer = (num1 - num2);
	return answer
};

var multiply = function(num1, num2)
{
	var answer = (num1 * num2)
	return answer
};
var divide = function(num1,num2)
{
	var answer = (num1 / num2)
	return answer
};

//Main Code
number1 = parseInt(prompt("Enter your first whole number:"));
number2 = parseInt(prompt("Enter your second number:"));
operation = prompt("What operation would you like to apply to the numbers?","add, subtract, multiply or divide");

if ((number2 == 0) && (operation == "divide"))
	{
		number2 = parseInt(prompt("You cannot divide a number by 0.  Please input a number besides 0."));
	}

if (operation == "add")
{
	console.log(number1 + " + " + number2 + " = " + add(number1,number2));
}
else if (operation == "subtract")
{
	console.log(number1 + " - " + number2 + " = " + subtract(number1,number2));
}
else if (operation == "multiply")
{
	console.log(number1 + " * " + number2 + " = " + multiply(number1,number2));
}
else if (operation == "divide")
{
	console.log(number1 + " / " + number2 + " = " + divide(number1,number2));
}
