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
//  This is my prompts that gather the numbers and the type of math the user would like to do.
number1 = parseInt(prompt("Enter your first whole number:"));
number2 = parseInt(prompt("Enter your second number:"));
operation = prompt("What operation would you like to apply to the numbers?","add, subtract, multiply or divide");

//  This code makes the user input something other than 0 for the second number if dividing
if ((number2 == 0) && (operation == "divide"))
	{
		number2 = parseInt(prompt("You cannot divide a number by 0.  Please input a number besides 0."));
	}
	
//  This set of conditionals calls my functions and stores the equation to the variable answer
if (operation == "add")
{
	answer = add(number1,number2);
}
else if (operation == "subtract")
{
	answer = subtract(number1,number2);
}
else if (operation == "multiply")
{
	answer = multiply(number1,number2);
}
else if (operation == "divide")
{
	answer = divide(number1,number2);
}

//This code logs the operation, both numbers and the answer
console.log("If you " + operation + " " + number1 + " and " + number2 + " you get " + answer + ".");
