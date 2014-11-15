//alert("JavaScript works!");

//SDI 1411
// David G. Fermer
// Lab 9: Number and Date Objects

//global variables
//Problem 1
var answer1 = 0;
var fisrtNumber = 0;
var decimalNumber = 0;

//Problem 2
var answer2 = 0;
var myString = "";
//Problem 3



//functions
//Problem 1

var decimalPlace = function(number,decimal)
{
	if (isNaN(number) == true || isNaN(decimal) == true)
	{
		return "You did not input valid numbers for either your number or your decimal place."
	}
	else
	{ 
	return number.toFixed(decimal);
	}
};

//Problem 2

var stringToNumber = function(string)
{
	if (isNaN(string) == true) 
	//does this if string is not number
	{
		return "you entered " + string + " it is not a number";
	}
	else 
	//does this if string is a number
	{
		return parseFloat(string);
	}
}

//Problem 3



//main code
//Problem 1
firstNumber = 3.123134234523;
decimalNumber = 2;
answer1 = decimalPlace(firstNumber,decimalNumber);
if(answer1 == "You did not input valid numbers for either your number or your decimal place.")
{
	console.log(answer1)
}
else
{
	console.log("If you reduce " + firstNumber + " to " + decimalNumber + " decimal places, you get " + answer1);
}

//Problem 2
var myString = "12.234234";
answer2 = stringToNumber(myString);
console.log("\"" + myString + "\"" + " entered as a string comes back as the number " + answer2 + " when it is passed through my function");

//Problem 3