//David Fermer
// SDI 1411
// Lab 7

//Global Variables
var stormtrooper;
var sentry;
var officer;

//Functions
var badGuyConstructor = function(npcType,npcHealth,npcWeapon,npcWeaponBaseDamage)
{
	this.type 				= npcType;
	//console.log("npc type " + this.type);
	this.health 			= npcHealth;
	//console.log("npc health " + this.health);
	this.weapon				= npcWeapon;
	//console.log("npc weapon " + this.weapon);
	this.baseDamage			= npcWeaponBaseDamage;
	//console.log("weapon Base Damage " + this.baseDamage);
	this.alive				= false;
	//console.log("the npc is alive " + this.alive);
	this.returnFromDeath 	= function()
	{
		this.alive = true;
	};
	
	this.returnFromDeath();
	
	//console.log("the npc is now alive " + this.alive);
};

var badGuyCreation = function()
{		
	for (i = 0; i < 3; i++)
	{
		if (i == 0)
		{
			stormtrooper = new badGuyConstructor(characters.NPC[0].type, characters.NPC[0].health, characters.NPC[0].weapon, characters.NPC[0].baseWeaponDamage);
			//console.log("This should be the stormtrooper");
		}
		else if (i == 1)
		{
			sentry = new  badGuyConstructor(characters.NPC[1].type, characters.NPC[1].health, characters.NPC[1].weapon, characters.NPC[1].baseWeaponDamage)	
			//console.log("This should be the sentry");
		}	
		else
		{
			officer = new badGuyConstructor(characters.NPC[2].type, characters.NPC[2].health, characters.NPC[2].weapon, characters.NPC[2].baseWeaponDamage)	
			//console.log("This should be the Imperial Officer")
		}	
	};
};

//Main Code

badGuyCreation();
//console.log(stormtrooper);
//console.log(sentry);
//console.log(officer);
console.log("Your team walks into the garage sees a " + stormtrooper.type + ", " + sentry.type + ", and an " + officer.type);
console.log("The " + stormtrooper.type + " has a " + stormtrooper.weapon + ".  The " + officer.type + " has a " + officer.weapon + ".  While the " + sentry.type + " only has a " + sentry.weapon + ".");

