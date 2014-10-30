alert("JavaScript works!");

//my variables - Task the First
var myNickName = "David \"Dave\" Fermer";
var myAddress = "107 E Vanderbilt St";
var accident = false;
var milesToSchool = 22; /*Number is in miles*/


//my console.log - Task the Second
console.log("My name is " + myNickName + ".");
console.log("My address is " + myAddress + ".");
console.log("It is " + milesToSchool + " to my school.");
console.log("It is " + accident + " that there is a accident along my route to school");

//my confirm() and prompt() dialog boxs - Task the Thrid
accident = confirm("Is there an accident on the way to school?  Press OK for Yes and Cancel for No");
milesToSchool = prompt("How many miles is your drive to school now?");
milesToSchool = parseInt(milesToSchool);

//Task the Third Console Logs
console.log("It is now " + accident + " that there is an accident on my way to school");
console.log("It is now " + milesToSchool + " miles to my school");