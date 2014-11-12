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
