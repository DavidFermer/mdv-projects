//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

//var p is the first confirm
//var p;
//var q is the second confirm
//var q;
//var r is the thrid confirm
//var r;
//var loopCounter;

//Table 3 loop
/*for (loopCounter = 1; loopCounter < 9; loopCounter++)
{
	p = confirm("First value:  Click OK for true or Cancel for false.");
	q = confirm("Second value:  Click OK for true or Cancel for false.");
	r = confirm("Third value:  Click OK for true or Cancel for false.");
	
	if (p == true && (q == true || r == true))
	{
		console.log("Number " + loopCounter + " returns true");
	}
	else
	{
		console.log("Number " + loopCounter + " returns false");
	}
};
*/

//Table 4 loop
/*for (loopCounter = 1; loopCounter < 9; loopCounter++)
{
	p = confirm("First value:  Click OK for true or Cancel for false.");
	q = confirm("Second value:  Click OK for true or Cancel for false.");
	r = confirm("Third value:  Click OK for true or Cancel for false.");
	
	if ((p == true && !q == true) || r == true)
	{
		console.log("Number " + loopCounter + " returns true");
	}
	else
	{
		console.log("Number " + loopCounter + " returns false");
	}
};
*/

//Table 5 loop
/*for (loopCounter = 1; loopCounter < 9; loopCounter++)
{
	p = confirm("First value:  Click OK for true or Cancel for false.");
	q = confirm("Second value:  Click OK for true or Cancel for false.");
	r = confirm("Third value:  Click OK for true or Cancel for false.");
	
	if (p == true || (q == true || r == true))
	{
		console.log("Number " + loopCounter + " returns true");
	}
	else
	{
		console.log("Number " + loopCounter + " returns false");
	}
};
*/


//Problem 1
//Variables
/*var customerAge;
	
//prompt asking customer for age
customerAge = parseInt(prompt("What is your age?  Please enter digits for your age."));

if (customerAge >= 55 || customerAge < 10)
{
	console.log("The price of your movie ticket is $7.00");
}
else
{
	console.log("The price of your movie ticket is $12.00");
}
*/
//End of Problem 1

//Problem 2
//Variables are the tires of the car
var frontLeft = 1,
	frontRight = 1,
	rearLeft = 2,
	rearRight = 2;

if (frontLeft == frontRight && rearLeft == rearRight)
{
	console.log("The tires are up to specification");
}
else
{
	console.log("The tires are not up to specification");
}
