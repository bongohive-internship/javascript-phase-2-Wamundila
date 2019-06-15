// tellFortune function should be here
function tellFortune(numberOfChildren,partnerName,jobTitle,geoLocation)
{
	//assigning shorter names to the variables
	var nOC = numberOfChildren;
	var pN = partnerName;
	var jT = jobTitle;
	var gL = geoLocation;
	//Print a fortune on the console
	console.log("You will be "+jT+" in "+gL+", and married to "+pN+" with "+nOC+" kids.");

}

var fortune1 = tellFortune("2","Rachael Zulu","Soldier","Kitwe");
console.log(fortune1);
var fortune1 = tellFortune("3","Martha Mulenga","Teacher","Lundazi");
console.log(fortune1);
var fortune1 = tellFortune("7","Christina Muyunda","Programmer","Lusaka");
console.log(fortune1);
