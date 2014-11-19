//David G. Fermer
//SDI 1411
//Lab 10

//Global Variables

//  Problem 1 global variable
var answer1 = 0;

//  Problem 2 global variables
var answer2;
var powerBall

//Functions

//  Problem 1 Function
var multiples3and5 = function()
{
	var multiplesAdded = 0;
	for (i = 0; i < 1000; i++)
	{
		if (i % 3 == 0 || i % 5 == 0)
		{
			multiplesAdded = multiplesAdded + i;
		}
	};
	return multiplesAdded
};


//  Problem 2 Function
var powerballGenerator = function()
{
	var lotteryNumbers = [];
	var lotteryNumberStorage = 0;
	var totalLotteryNumbers = 0;
	
	while (totalLotteryNumbers < 5)
	{
		lotteryNumberStorage = Math.round(Math.random() * 59) + 1;
		if (lotteryNumberStorage != lotteryNumbers[0] && lotteryNumberStorage != lotteryNumbers[1] && lotteryNumberStorage != lotteryNumbers[2] && lotteryNumberStorage != lotteryNumbers[3] && lotteryNumberStorage != lotteryNumbers[4])
		{
			lotteryNumbers.push(lotteryNumberStorage);
			totalLotteryNumbers = totalLotteryNumbers + 1;
		}
	}
		lotteryNumbers.push(Math.round(Math.random() * 35) + 1);
	
	return lotteryNumbers
	
};

//Main Code

//  Problem 1 Main Code
answer1 = multiples3and5();
console.log("The sum of all multiples of 3 and 5 below 1000 is " + answer1);

//  Problem 2 Main Code
answer2 = powerballGenerator()

powerBall = answer2.pop();


console.log("Tonights Lottery numbers are " + answer2 + " and tonights powerball number is " + powerBall".");
