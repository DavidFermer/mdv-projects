//David G. Fermer
// SDI 1411
// Lab 8

//Globral Variables
var firstProblemAnswer;
var secondProblemAnswer;

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
	//console.log(list,firstSeparator,secondSeparator);
	var listArray = list.split(firstSeparator);
	//console.log(listArray);
	var newList = "";
	
	for (i = 0; i < listArray.length; i++)
	{
		if (i == 0)
		{
			newList = listArray[i];
		}
		else
		{
			newList = newList + secondSeparator + " " + listArray[i];
		}
	};
	return newList;
};	


//Main Code

//problem 1
firstProblemAnswer = emailBooleanCheck("david.fermer@icloud.com")
console.log("It is " + firstProblemAnswer + " that you provided a correct email address.") 

//problem 2
secondProblemAnswer = listSeparatorChanger("James/ Bradley/ Benjamin","/",",");
console.log("My sons names are " + secondProblemAnswer + ".")
