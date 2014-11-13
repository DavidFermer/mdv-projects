//David G. Fermer
// SDI 1411
// Lab 8

//Globral Variables
var firstProblemAnswer;

//Functions

//problem 1
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
	
//problem 2
var listSeparatorChanger = function(list,firstSeparator,secondSeparator)
{
	console.log(list,firstSeparator,secondSeparator);
	var listArray = list.split(",");
	console.log(listArray);
	var newList = "";
	
	for (i = 0; i < listArray.length; i++)
	{
		newList = newList + "/ " + listArray[i]
	};
	return newList
};	


//Main Code

//problem 1
var firstProblemAnswer = emailBooleanCheck("david.fermer@icloud.com")
console.log(firstProblemAnswer) 

//problem 2
listSeparatorChanger("James, Bradley, Benjamin",",","/");
