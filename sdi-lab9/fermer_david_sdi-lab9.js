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
var date1;
var date2;
var choiceHoursDays;
var answer3 = 0;


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
};

//Problem 3
var dateDifference = function(dateOne,dateTwo,choice)
{
	var convertedDateOne = new Date(dateOne);
	var convertedDateTwo = new Date(dateTwo);
	
	if(choice == "hours" || choice == "days")
	{
		if(choice == "hours")
		{
			if(dateOne > dateTwo)
			{
				return (convertedDateTwo - convertedDateOne)/1000/60/60
			}
		}
		else
		{
			return (convertedDateTwo - convertedDateOne)/1000/60/60/24
		}
	}
	else
	{
		return"you did not choose hours or days correctly";
	}
};


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
date1 = "11/15/2014";
date2 = "11/16/2014";
choiceHoursDays = "hours"
answer3 = dateDifference(date1, date2, choiceHoursDays);
console.log(answer3);
