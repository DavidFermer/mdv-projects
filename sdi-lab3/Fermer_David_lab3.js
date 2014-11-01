// David G. Fermer
// SDI 1411
// Lab 3

//alert("JavaScript works!");

// variables
var myName = "David G. Fermer";
var myNickName = "\"Dave\"";
var myAge = 29;
var old = true;
var howOldIsOld = 50;
var userName = "";

// Output Each Variable
console.log("My name is " + myName + ", but I go by " + myNickName + ".  I am " + myAge + " years old.  Therefore it is " + old + " that I am young.");

// Confirm for input
old = confirm("I consider 30 and younger to be young. Do you agree?  Click OK for Yes and Cancel for no.");

// Conditionals - 3 in total a Boolean, Number Conditional & String Conditional
if (old === true) {
	//This is the code that will run if it is true and will prompt for Input
	howOldIsOld = parseInt(prompt("Since you think 30 and younger is young, at what age is a person old?"));
	//console.log(howOldIsOld)
	 if (howOldIsOld >= 50) {
		//This is the code that will run if the number conditional returns true
		console.log("Really I think " + howOldIsOld + " is considered old too.");
	} else {
		//This is the code that will run if the number conditional returns false
		console.log("Really I think 50 and older is old");
	}
} else {
	//This is the code that will run if the Boolean conditional returns false
	userName = prompt("Really, what is your name?");
	 if (userName == "David") {
	//THis is the code that will run if the String conditional returns true 
	console.log("Okay " + myNickName + ", you think I am old.");
	} else {
	//This is the code that will run if the string conditional returns false
	console.log("Okay, " + userName + ", just wait, you'll be old eventually"); 
	}
}