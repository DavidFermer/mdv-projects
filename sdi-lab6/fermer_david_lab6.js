//alert("JavaScript works!");

// David G. Fermer
// SDI 1411
// Lab 6 Working with Arrays

//variables

//functions
var procedure = function()
{
	var myFamilyNames 		= ["David", "Regina", "James", "Bradley"];
	var myFamilyHairColors 	= ["Brown", "Blonde", "Blonde", "Blonde"];
	
	for (i = 0; i < myFamilyNames.length; i++)
	{
		if (myFamilyNames[i] == "David")
		{
			console.log("My name is " + myFamilyNames[i] + " and my hair color is " + myFamilyHairColors[i] + ".");
		}
		
		else if (myFamilyNames[i] == "Regina")
		{
			console.log("My wife's name is " + myFamilyNames[i] + " and her hair color is " + myFamilyHairColors[i] + ".");
		}
		
		else 
		{
			console.log(myFamilyNames[i] + " is one of my sons and his hair color is " + myFamilyHairColors[i] + ".");
		}
		
	};
	
	myFamilyNames.push("Benjamin");
	
	myFamilyHairColors.push("not yet know");
	
	console.log("I have another son on the way.  His name is " + myFamilyNames[4] + " and since he has not yet been born we do " + myFamilyHairColors[4] + " what his hair color is.");
};

//main code
procedure();
