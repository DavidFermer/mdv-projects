//David G. Fermer
// SDI 1411
// Lab 8

//Globral Variables
var firstProblemAnswer;

//Functions
var emailBooleanCheck = function(emailAddress)
{
	var firstAt			= emailAddress.indexOf("@");
	//console.log(firstAt);
	var anyOtherAt		= emailAddress.indexOf("@", firstAt + 1)
	//console.log(anyOtherAt);
	var spaceCheck		= emailAddress.indexOf(" ");
	//console.log(spaceCheck);
	var dotCheck		= emailAddress.indexOf(".",firstAt);
	//console.log(dotCheck);

	if(spaceCheck > 0)
	{
		return false;
	}
	else if (firstAt < 0)
	{
		return false;
	}
	else if(dotCheck < firstAt)
	{
		return false;
	}
	else if(anyOtherAt != -1)
	{
		return false;
	}
	else
	{
		return true;	
	}


};
	

//Main Code


var firstProblemAnswer = emailBooleanCheck("david.fermer@icloud.com")
console.log(firstProblemAnswer) 
