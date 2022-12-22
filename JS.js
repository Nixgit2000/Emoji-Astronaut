var player1 = document.getElementById("player");
var door1 = document.getElementById("door1closed");
var door2 = document.getElementById("door2closed");
var door3 = document.getElementById("door3closed");
var door4 = document.getElementById("door4closed");
var door5 = document.getElementById("door5closed");
var noinfobox = document.getElementById("noinfobox");
var noinfobox2 = document.getElementById("noinfobox2");
var noinfobox3 = document.getElementById("noinfobox3");
var noinfobox4 = document.getElementById("noinfobox4");

var travelButton = document.getElementById("travelbutton");
var travel1Button = document.getElementById("travel1");
var travel2Button = document.getElementById("travel2");
var travel3Button = document.getElementById("travel3");
var travel4Button = document.getElementById("travel4");
var storeButton = document.getElementById("storebutton");
var store1Button = document.getElementById("store1");
var store2Button = document.getElementById("store2");
var store3Button = document.getElementById("store3");
var attackButton = document.getElementById("attackbutton");
var attack1Button = document.getElementById("attack1");
var attack2Button = document.getElementById("attack2");
var attack3Button = document.getElementById("attack3");

var tomatoesbutton = document.getElementById("tomatoesbutton");
var blueberriesbutton = document.getElementById("blueberriesbutton");
var eggplantbutton = document.getElementById("eggplantbutton");

var nodialogbox = document.getElementById("nodialogbox");
var nodialogbox2 = document.getElementById("nodialogbox2");
var nodialogbox3 = document.getElementById("nodialogbox3");
var nodialogbox4 = document.getElementById("nodialogbox4");
var dialogbox = document.getElementById("dialogbox");

var consolelog = document.getElementById("consolelog");

var dayNumber = document.getElementById("daynumber");
var dayCount = 1;

var creditsAmount = document.getElementById("creditsAmount");

var seedAmount = document.getElementById("seedAmount");
var seedInterval = 10;
var seedCostAndromeda = 50;
var seedCostPillars = 60;
var seedCostPhantom = 70;
var seedTotal = 0;

var shipHealth = document.getElementById("shipHealth");
var shipHealthLeft = 100;
var repairInterval = 5;
var repairCostAndromeda = 50;
var repairCostPillars = 60;
var repairCostPhantom = 70;
var maxShipHealthLeft1 = 120;
var maxShipHealthLeft2 = 140;
var maxShipHealthLeft3 = 160;
var maxShipHealthLeft4 = 180;
var maxShipHealthLeft5 = 200;

var shipFuel = document.getElementById("shipFuel");
var fuelInterval = 5;
var fuelCost = 25;
var fuelCostPillars = 30;
var fuelCostPhantom = 35;
var fuelUsePerTripAndromeda = 10;
var fuelUsePerTripPillars = 100;
var fuelUsePerTripPhantom = 500;
var fuelUsePerTripEarth = 1000;
var shipFuelLeft = 5;

var PosX = 2;
var PosY = 2;
var IntX = 104;
var IntY = 104;
var creditsStart = 1000;

var DeepFieldTrue = true;
var AndromedaTrue = false;
var PillarsTrue = false;
var PhantomTrue = false;



document.addEventListener("keypress", function function1(event) {
if (event.key === "d") {
PosX += IntX;
player1.style.left = PosX + "px";
} else if (event.key === "a") {
PosX -= IntX;
player1.style.left = PosX + "px";
} else if (event.key === "w") {
PosY -= IntY;
player1.style.top = PosY + "px";
} else if (event.key === "s") {
PosY += IntY;
player1.style.top = PosY + "px";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "d") && ((((PosX == 210)&&((PosY == 2) || (PosY == 210) || (PosY == 314))) || ((PosX == 418)&&((PosY == 2) || (PosY == 210) || (PosY == 314))) || ((PosX == 626)&&((PosY == 2) || (PosY == 106) || (PosY == 418) || (PosY == 522))))) || (PosX == 834) && ((PosY == 210) || (PosY == 314))) {
PosX -= IntX;
player1.style.left = PosX + "px";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && (((PosX == 106)&&((PosY == 2) || (PosY == 210) || (PosY == 314))) || ((PosX == 314)&&((PosY == 2) || (PosY == 210) || (PosY == 314))) || ((PosX == -102)&&((PosY >= 2) && (PosY <= 834))))) {
PosX += IntX;
player1.style.left = PosX + "px";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "w") && (((PosY <= 0) || ((PosY == 314) && ((PosX <4)|| (PosX == 4) || (PosX == 106) || (PosX == 210)|| (PosX == 314)|| (PosX == 522)))) || (((PosX == 626) || (PosX == 730)) && (PosY == 106) ))) {
PosY += IntY;
player1.style.top = PosY + "px";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "s") && ((((PosY <= 0) || ((PosY == 418) && ((PosX <4)|| (PosX == 4) || (PosX == 106) || (PosX == 210)|| (PosX == 314)|| (PosX == 522)))) || ((PosX >0) && (PosY >522))) || (((PosX == 626) || (PosX == 730)) && (PosY == 418) ))) {
PosY -= IntY;
player1.style.top = PosY + "px";
}});
document.addEventListener("keypress", function function1() {
if (((PosX == 106) || (PosX == 210)) && (PosY == 106)) {
door1.id = "door1open";
} else {
door1.id = "door1closed";
}});
document.addEventListener("keypress", function function1() {
if (((PosX == 314) || (PosX == 418)) && (PosY == 106)) {
door2.id = "door2open";
} else {
door2.id = "door2closed";
}});
document.addEventListener("keypress", function function1() {
if ((PosX == 418) && ((PosY == 314) || (PosY == 418))) {
door3.id = "door3open";
} else {
door3.id = "door3closed";
}});
document.addEventListener("keypress", function function1() {
if (((PosX == 522) || (PosX == 626)) && ((PosY == 314) || (PosY == 210))) {
door4.id = "door4open";
door5.id = "door5open";
} else {
door4.id = "door4closed";
door5.id = "door5closed";
}});



document.addEventListener("keypress", function function1(event) {
if (((PosX == 314) || (PosX == 210)) && ((PosY == 2) || (PosY == 106) || (PosY == 210) || (PosY == 314))) {
consolelog.innerHTML = "This is the Machine Room.<br><br>It is for upgrading your ship's max health, improving crop growing times, upgrading armor or upgrading weapons. Visit each machine for the specifics.";
} if ((PosX == 210) && (PosY == 2)) {
consolelog.innerHTML = "The Crop Science machine is to cut the times required to grow your crops. The cost of each upgrade is 100 credits.<br>Press the [e] key to upgrade.<br>LV 0 = 60sec<br>LV 1 = 45sec<br>LV 2 = 40sec<br>LV 3 = 35sec<br>LV 4 = 30sec<br>LV 5 = 25sec";


if (((PosX == 210) && (PosY == 2)) && (event.key === "e")) {
if ((creditsStart >= 100) && (document.getElementById("spaceCrop5"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var spaceCrop5 = document.getElementById("spaceCrop5");
spaceCrop5.id = "spaceCrop6";

}
if ((creditsStart < 100) && (document.getElementById("spaceCrop5"))) {
consolelog.innerHTML = "Insufficient credits for the level 5 Crop Science upgrade.<br><br>Cost of upgrade is ۞100."

}

if ((creditsStart >= 100) && (document.getElementById("spaceCrop4"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var spaceCrop4 = document.getElementById("spaceCrop4");
spaceCrop4.id = "spaceCrop5";

}
if ((creditsStart < 100) && (document.getElementById("spaceCrop4"))) {
consolelog.innerHTML = "Insufficient credits for the level 4 Crop Science upgrade.<br><br>Cost of upgrade is ۞100."

}



if ((creditsStart >= 100) && (document.getElementById("spaceCrop3"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var spaceCrop3 = document.getElementById("spaceCrop3");
spaceCrop3.id = "spaceCrop4";

}
if ((creditsStart < 100) && (document.getElementById("spaceCrop3"))) {
consolelog.innerHTML = "Insufficient credits for the level 3 Crop Science upgrade.<br><br>Cost of upgrade is ۞100."

}


if ((creditsStart >= 100) && (document.getElementById("spaceCrop2"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var spaceCrop2 = document.getElementById("spaceCrop2");
spaceCrop2.id = "spaceCrop3";

}
if ((creditsStart < 100) && (document.getElementById("spaceCrop2"))) {
consolelog.innerHTML = "Insufficient credits for the level 2 Crop Science upgrade.<br><br>Cost of upgrade is ۞100."

}


if ((creditsStart >= 100) && (document.getElementById("spaceCrop"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var spaceCrop = document.getElementById("spaceCrop");
spaceCrop.id = "spaceCrop2";

}
if ((creditsStart < 100) && (document.getElementById("spaceCrop"))) {
consolelog.innerHTML = "Insufficient credits for the level 1 Crop Science upgrade.<br><br>Cost of upgrade is ۞100."

}  }     }


if ((PosX == 314) && (PosY == 314)) {
consolelog.innerHTML = "The Weapons Upgrade machine is to be able to steal larger quantities of supplies from ships/cruisers/space stations. The cost of each upgrade is 100 credits.<br><br>Press the [e] key to upgrade.";


if (((PosX == 314) && (PosY == 314)) && (event.key === "e")) {
if ((creditsStart >= 100) && (document.getElementById("Weapons5"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Weapons5 = document.getElementById("Weapons5");
Weapons5.id = "Weapons6";

}
if ((creditsStart < 100) && (document.getElementById("Weapons5"))) {
consolelog.innerHTML = "Insufficient credits for the level 5 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 

if ((creditsStart >= 100) && (document.getElementById("Weapons4"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Weapons4 = document.getElementById("Weapons4");
Weapons4.id = "Weapons5";

}
if ((creditsStart < 100) && (document.getElementById("Weapons4"))) {
consolelog.innerHTML = "Insufficient credits for the level 4 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 
if ((creditsStart >= 100) && (document.getElementById("Weapons3"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Weapons3 = document.getElementById("Weapons3");
Weapons3.id = "Weapons4";

}if ((creditsStart < 100) && (document.getElementById("Weapons3"))) {
consolelog.innerHTML = "Insufficient credits for the level 3 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 


if ((creditsStart >= 100) && (document.getElementById("Weapons2"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Weapons2 = document.getElementById("Weapons2");
Weapons2.id = "Weapons3";

}if ((creditsStart < 100) && (document.getElementById("Weapons2"))) {
consolelog.innerHTML = "Insufficient credits for the level 2 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 


if ((creditsStart >= 100) && (document.getElementById("Weapons1"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Weapons1 = document.getElementById("Weapons1");
Weapons1.id = "Weapons2";

} 
if ((creditsStart < 100) && (document.getElementById("Weapons1"))) {
consolelog.innerHTML = "Insufficient credits for the level 1 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 
}     }


if ((PosX == 210) && (PosY == 210)) {
consolelog.innerHTML = "The Auto Harvest machine is to be able to harvest your crops automatically when they've ripened. The cost of each upgrade is 100 credits.<br><br>Press the [e] key to upgrade.";
}



if ((PosX == 314) && (PosY == 210)) {
consolelog.innerHTML = "The Double Fuel machine is to be able to increase your max fuel capacity from 500 to over 1,000. The cost of this upgrade is 1000 credits.<br><br>Press the [e] key to upgrade.";}
if (((PosX == 314) && (PosY == 210)) && (event.key === "e")) {
if (document.getElementById("DoubleFuelOn")) {
consolelog.innerHTML = "You've already purchased the Double Fuel upgrade."
}}

if (((PosX == 314) && (PosY == 210)) && (event.key === "e")) {
if (document.getElementById("DoubleFuelOff")) {
if (creditsStart < 1000) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Double Fuel upgrade is 1000 credits.";
}
if (creditsStart >= 1000) {
creditsStart -= 1000;
document.getElementById("denominator1").innerHTML = " / 1000";
creditsAmount.innerHTML = creditsStart;
document.getElementById("shipFuel").style.color = "white";
document.getElementById("denominator1").style.color = "white";
document.getElementById("DoubleFuelOff").id = "DoubleFuelOn";
consolelog.innerHTML = "Double Fuel upgrade complete.<br><br>Your max Ship Fuel is now 1000.";
}}};    






if ((PosX == 210) && (PosY == 314)) {
consolelog.innerHTML = "The Armor Upgrade machine is to be able to take less damage from ships/cruisers/space stations when attacking. The cost of each upgrade is 100 credits.<br><br>Press the [e] key to upgrade.";


if (((PosX == 210) && (PosY == 314)) && (event.key === "e")) {
if ((creditsStart >= 100) && (document.getElementById("Armor5"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Armor5 = document.getElementById("Armor5");
Armor5.id = "Armor6";

}if ((creditsStart < 100) && (document.getElementById("Armor5"))) {
consolelog.innerHTML = "Insufficient credits for the level 5 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 

if ((creditsStart >= 100) && (document.getElementById("Armor4"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Armor4 = document.getElementById("Armor4");
Armor4.id = "Armor5";

}if ((creditsStart < 100) && (document.getElementById("Armor4"))) {
consolelog.innerHTML = "Insufficient credits for the level 4 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 
if ((creditsStart >= 100) && (document.getElementById("Armor3"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Armor3 = document.getElementById("Armor3");
Armor3.id = "Armor4";

}if ((creditsStart < 100) && (document.getElementById("Armor3"))) {
consolelog.innerHTML = "Insufficient credits for the level 3 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 


if ((creditsStart >= 100) && (document.getElementById("Armor2"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Armor2 = document.getElementById("Armor2");
Armor2.id = "Armor3";

}if ((creditsStart < 100) && (document.getElementById("Armor2"))) {
consolelog.innerHTML = "Insufficient credits for the level 2 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

} 


if ((creditsStart >= 100) && (document.getElementById("Armor1"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
var Armor1 = document.getElementById("Armor1");
Armor1.id = "Armor2";

}if ((creditsStart < 100) && (document.getElementById("Armor1"))) {
consolelog.innerHTML = "Insufficient credits for the level 1 Weapons upgrade.<br><br>Cost of upgrade is ۞100."

}  }     }




if ((PosX == 314) && (PosY == 2)) {
consolelog.innerHTML = "The Ship HP machine is to upgrade the maximum hit points of your ship's hull (NOTE: To repair your ship, visit the STORE menu). The cost of each upgrade is 100 credits.<br>Press the [e] key to upgrade.<br>LV 0 = 100HP<br>LV 1 = 120HP<br>LV 2 = 140HP<br>LV 3 = 160HP<br>LV 4 = 180HP<br>LV 5 = 200HP";
}       if (((PosX == 314) && (PosY == 2)) && (event.key === "e")) {
if ((creditsStart >= 100) && (document.getElementById("spaceShipHealth5"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
document.getElementById("denominator2").innerHTML = " / 200 HP";
shipHealthLeft += 20;
document.getElementById("shipHealth").innerHTML = shipHealthLeft;

var spaceShipHealth5 = document.getElementById("spaceShipHealth5");
spaceShipHealth5.id = "spaceShipHealth6";

}if ((creditsStart < 100) && (document.getElementById("spaceShipHealth5"))) {
consolelog.innerHTML = "Insufficient credits for the level 5 Ship HP upgrade.<br><br>Cost of upgrade is ۞100."

} 

if ((creditsStart >= 100) && (document.getElementById("spaceShipHealth4"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
document.getElementById("denominator2").innerHTML = " / 180 HP";
shipHealthLeft += 20;
document.getElementById("shipHealth").innerHTML = shipHealthLeft;

var spaceShipHealth4 = document.getElementById("spaceShipHealth4");
spaceShipHealth4.id = "spaceShipHealth5";

}if ((creditsStart < 100) && (document.getElementById("spaceShipHealth4"))) {
consolelog.innerHTML = "Insufficient credits for the level 4 Ship HP upgrade.<br><br>Cost of upgrade is ۞100."

} 
    if ((creditsStart >= 100) && (document.getElementById("spaceShipHealth3"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
document.getElementById("denominator2").innerHTML = " / 160 HP";
shipHealthLeft += 20;
document.getElementById("shipHealth").innerHTML = shipHealthLeft;

var spaceShipHealth3 = document.getElementById("spaceShipHealth3");
spaceShipHealth3.id = "spaceShipHealth4";

}if ((creditsStart < 100) && (document.getElementById("spaceShipHealth3"))) {
consolelog.innerHTML = "Insufficient credits for the level 3 Ship HP upgrade.<br><br>Cost of upgrade is ۞100."

} 

if ((creditsStart >= 100) && (document.getElementById("spaceShipHealth2"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
document.getElementById("denominator2").innerHTML = " / 140 HP";
shipHealthLeft += 20;
document.getElementById("shipHealth").innerHTML = shipHealthLeft;

var spaceShipHealth2 = document.getElementById("spaceShipHealth2");
spaceShipHealth2.id = "spaceShipHealth3";

}if ((creditsStart < 100) && (document.getElementById("spaceShipHealth2"))) {
consolelog.innerHTML = "Insufficient credits for the level 2 Ship HP upgrade.<br><br>Cost of upgrade is ۞100."

}         if ((creditsStart >= 100) && (document.getElementById("spaceShipHealth"))) {

creditsStart -= 100;
creditsAmount.innerHTML = creditsStart;
document.getElementById("denominator2").innerHTML = " / 120 HP";
shipHealthLeft += 20;
document.getElementById("shipHealth").innerHTML = shipHealthLeft;
var spaceShipHealth = document.getElementById("spaceShipHealth");
spaceShipHealth.id = "spaceShipHealth2";

}if ((creditsStart < 100) && (document.getElementById("spaceShipHealth"))) {
consolelog.innerHTML = "Insufficient credits for the level 1 Ship HP upgrade.<br><br>Cost of upgrade is ۞100."

}     



}});

document.addEventListener("keypress", function function1() {
if (((PosX == 2) || (PosX == 106)) && ((PosY == 2) || (PosY == 106) || (PosY == 210) || (PosY == 314))) {
consolelog.innerHTML = "This is the Bedroom.<br><br>Use the [wasd] keys to walk around and the [e] key when prompted.";
}
});

document.addEventListener("keypress", function function1() {
if ((PosY == 418) || (PosY == 522)) {
consolelog.innerHTML = "This is the BioSphere Room, which is used for farming. Buy seeds from the STORE menu or use the ATTACK menu to steal seeds from enemy ships. Plant tomatoes with the [e] key.";
}
});

document.addEventListener("keypress", function function1() {
    if (((PosX == 418) || (PosX == 522)) && ((PosY == 2) || (PosY == 106) || (PosY == 210) || (PosY == 314))) {
    consolelog.innerHTML = "This is the Kitchen.";
    }
    });

document.addEventListener("keypress", function function1() {
if ((PosX == 626) || (PosX == 730)) {
consolelog.innerHTML = "The cockpit is for travelling, visiting the STORE menu, or attacking nearby vessels.<br><br>Sit in one of the chairs and press the [e] key to pull up the menu.";
}
});

document.addEventListener("keypress", function function1() {
if ((PosX == 2) && (PosY == 2)) {
consolelog.innerHTML = "Go to sleep? Press the [e] key to fast forward 1 day.";
}
});



document.addEventListener("keypress", function function1(event) {
if (((PosX == 2) && (PosY == 2)) && (event.key === "e")) {
dayCount += 1;
 
consolelog.innerHTML = "You wake up the following day feeling great.<br><br>Time to get back at it!";
}
});
document.addEventListener("keypress", function function1() {
if ((PosX == 106) && (PosY == 314)) {
consolelog.innerHTML = "Go to the toilet? Press the [e] key to use the washroom.";
}
});
document.addEventListener("keypress", function function1(event) {
if (((PosX == 106) && (PosY == 314)) && (event.key === "e")) {

consolelog.innerHTML = "You've already got a water filtration system within your space suit.<br><br>That's not a microphone in your helmet. It's a straw!";
}
});


document.addEventListener("keypress", function function1() {
    if ((PosX == 106) && (PosY == 2)) {
    consolelog.innerHTML = "Read your journal? Press the [e] key to read.";
    }
    });
    document.addEventListener("keypress", function function1(event) {
    if (((PosX == 106) && (PosY == 2)) && (event.key === "e")) {
    
    consolelog.innerHTML = "Your tomato harvest can be sold for different prices at different locations (increasing in value as you get closer to Earth).<br><br>Deep Field & Andromeda: ۞10 / planter.<br>Pillars of Creation: ۞20 / planter.<br>Phantom Galaxy: ۞30 / planter.<br><br>Buy more planters in the store in the cockpit to increase productivity.";
    }
    });

document.addEventListener("keypress", function function1() {
if ((PosX == 2) && (PosY == 106)) {
consolelog.innerHTML = "Use the dresser? Press the [e] key to use the dresser.";
}
});
document.addEventListener("keypress", function function1(event) {
if (((PosX == 2) && (PosY == 106)) && (event.key === "e")) {

consolelog.innerHTML = "You've already got a space suit on.<br><br>What else could you possibly want to change into? This game isn't a fashion show!";
}
});




document.addEventListener("keypress", function function1() {
if ((PosX == 418) && (PosY == 2)) {
consolelog.innerHTML = "Look into the fridge? Press the [e] key to check what's inside.";
}
});
document.addEventListener("keypress", function function1(event) {
if (((PosX == 418) && (PosY == 2)) && (event.key === "e")) {
dayCount += 1;
consolelog.innerHTML = "There's a bunch of genetically modified tomatoes in neat rows inside the fridge. It's all the food you need to stay focused on your mission.";
}
});

document.addEventListener("keypress", function function1() {
if ((PosX == 522) && (PosY == 2)) {
consolelog.innerHTML = "Cut up some tomatoes? Press the [e] key to start chopping.";
}
});
document.addEventListener("keypress", function function1(event) {
if (((PosX == 522) && (PosY == 2)) && (event.key === "e")) {
dayCount += 1;
consolelog.innerHTML = "Nice job! That should be enough sliced tomatoes for a few meals. Time to get back at it!";
}
});






var spaceplanter2aInvisible = true;

document.addEventListener("keypress", function function1(event) {
if (((PosX == 2) && (PosY == 418)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter1").id = "spaceplanter1";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2aInvisible == true)) {
spaceplanter2aInvisible = false;
seedTotal -= 1;

seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter1").id = "spaceplanter2a";

setTimeout(function() {
if ((DeepFieldTrue) || (AndromedaTrue)) {
creditsStart += 10; creditsAmount.innerHTML = creditsStart
} if (PillarsTrue) {
creditsStart += 20; creditsAmount.innerHTML = creditsStart
} if (PhantomTrue) {
creditsStart += 30; creditsAmount.innerHTML = creditsStart
}




;},60000);

setTimeout(function() {document.getElementById("spaceplanter2a").id = "spaceplanter1"},60010);
setTimeout(function() {spaceplanter2aInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2aInvisible == true)) {
spaceplanter2aInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter1").id = "spaceplanter2a1";
setTimeout(function() { if ((DeepFieldTrue) || (AndromedaTrue)) {
creditsStart += 10; creditsAmount.innerHTML = creditsStart
} if (PillarsTrue) {
creditsStart += 20; creditsAmount.innerHTML = creditsStart
} if (PhantomTrue) {
creditsStart += 30; creditsAmount.innerHTML = creditsStart
}
},45000);
setTimeout(function() {document.getElementById("spaceplanter2a1").id = "spaceplanter1"},45010);
setTimeout(function() {spaceplanter2aInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2aInvisible == true)) {
spaceplanter2aInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter1").id = "spaceplanter2a2";
setTimeout(function() { if ((DeepFieldTrue) || (AndromedaTrue)) {
creditsStart += 10; creditsAmount.innerHTML = creditsStart
} if (PillarsTrue) {
creditsStart += 20; creditsAmount.innerHTML = creditsStart
} if (PhantomTrue) {
creditsStart += 30; creditsAmount.innerHTML = creditsStart
}},
40000);
setTimeout(function() {document.getElementById("spaceplanter2a2").id = "spaceplanter1"},40010);
setTimeout(function() {spaceplanter2aInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2aInvisible == true)) {
spaceplanter2aInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter1").id = "spaceplanter2a3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2a3").id = "spaceplanter1"},35010);
setTimeout(function() {spaceplanter2aInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2aInvisible == true)) {
spaceplanter2aInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter1").id = "spaceplanter2a4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML  = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2a4").id = "spaceplanter1"},30010);
setTimeout(function() {spaceplanter2aInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2aInvisible == true)) {

spaceplanter2aInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter1").id = "spaceplanter2a5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2a5").id = "spaceplanter1"},25010);
setTimeout(function() {spaceplanter2aInvisible = true},25010);
} 
}});

var spaceplanter2bInvisible = true;
document.addEventListener("keypress", function function1(event) {
if (((PosX == 2) && (PosY == 522)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter2").id = "spaceplanter2";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2bInvisible == true)) {
spaceplanter2bInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter2").id = "spaceplanter2b";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2b").id = "spaceplanter2"},60010);
setTimeout(function() {spaceplanter2bInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2bInvisible == true)) {
spaceplanter2bInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter2").id = "spaceplanter2b1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2b1").id = "spaceplanter2"},45010);
setTimeout(function() {spaceplanter2bInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2bInvisible == true)) {
spaceplanter2bInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter2").id = "spaceplanter2b2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2b2").id = "spaceplanter2"},40010);
setTimeout(function() {spaceplanter2bInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2bInvisible == true)) {
spaceplanter2bInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter2").id = "spaceplanter2b3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2b3").id = "spaceplanter2"},35010);
setTimeout(function() {spaceplanter2bInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2bInvisible == true)) {
spaceplanter2bInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter2").id = "spaceplanter2b4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2b4").id = "spaceplanter2"},30010);
setTimeout(function() {spaceplanter2bInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2bInvisible == true)) {
spaceplanter2bInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter2").id = "spaceplanter2b5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2b5").id = "spaceplanter2"},25010);
setTimeout(function() {spaceplanter2bInvisible = true},25010);
} 
}
});
var spaceplanter2cInvisible = true;
document.addEventListener("keypress", function function1(event) {
if (((PosX == 106) && (PosY == 522)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter3").id = "spaceplanter3";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2cInvisible == true)) {
spaceplanter2cInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter3").id = "spaceplanter2c";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2c").id = "spaceplanter3"},60010);
setTimeout(function() {spaceplanter2cInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2cInvisible == true)) {
spaceplanter2cInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter3").id = "spaceplanter2c1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2c1").id = "spaceplanter3"},45010);
setTimeout(function() {spaceplanter2cInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2cInvisible == true)) {
spaceplanter2cInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter3").id = "spaceplanter2c2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2c2").id = "spaceplanter3"},40010);
setTimeout(function() {spaceplanter2cInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2cInvisible == true)) {
spaceplanter2cInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter3").id = "spaceplanter2c3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2c3").id = "spaceplanter3"},35010);
setTimeout(function() {spaceplanter2cInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2cInvisible == true)) {
spaceplanter2cInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter3").id = "spaceplanter2c4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2c4").id = "spaceplanter3"},30010);
setTimeout(function() {spaceplanter2cInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2cInvisible == true)) {
spaceplanter2cInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter3").id = "spaceplanter2c5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2c5").id = "spaceplanter3"},25010);
setTimeout(function() {spaceplanter2cInvisible = true},25010);
} 
}
});
var spaceplanter2dInvisible = true;
document.addEventListener("keypress", function function1(event) {
if (((PosX == 210) && (PosY == 522)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter4").id = "spaceplanter4";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2dInvisible == true)) {
spaceplanter2dInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter4").id = "spaceplanter2d";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2d").id = "spaceplanter4"},60010);
setTimeout(function() {spaceplanter2dInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2dInvisible == true)) {
spaceplanter2dInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter4").id = "spaceplanter2d1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2d1").id = "spaceplanter4"},45010);
setTimeout(function() {spaceplanter2dInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2dInvisible == true)) {
spaceplanter2dInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter4").id = "spaceplanter2d2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2d2").id = "spaceplanter4"},40010);
setTimeout(function() {spaceplanter2dInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2dInvisible == true)) {
spaceplanter2dInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter4").id = "spaceplanter2d3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2d3").id = "spaceplanter4"},35010);
setTimeout(function() {spaceplanter2dInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2dInvisible == true)) {
spaceplanter2dInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter4").id = "spaceplanter2d4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2d4").id = "spaceplanter4"},30010);
setTimeout(function() {spaceplanter2dInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2dInvisible == true)) {
spaceplanter2dInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter4").id = "spaceplanter2d5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2d5").id = "spaceplanter4"},25010);
setTimeout(function() {spaceplanter2dInvisible = true},25010);
} 

}
});
var spaceplanter2eInvisible = true;
document.addEventListener("keypress", function function1(event) {
if (((PosX == 314) && (PosY == 522)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter5").id = "spaceplanter5";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2eInvisible == true)) {
spaceplanter2eInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter5").id = "spaceplanter2e";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2e").id = "spaceplanter5"},60010);
setTimeout(function() {spaceplanter2eInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2eInvisible == true)) {
spaceplanter2eInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter5").id = "spaceplanter2e1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2e1").id = "spaceplanter5"},45010);
setTimeout(function() {spaceplanter2eInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2eInvisible == true)) {
spaceplanter2eInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter5").id = "spaceplanter2e2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2e2").id = "spaceplanter5"},40010);
setTimeout(function() {spaceplanter2eInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2eInvisible == true)) {
spaceplanter2eInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter5").id = "spaceplanter2e3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2e3").id = "spaceplanter5"},35010);
setTimeout(function() {spaceplanter2eInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2eInvisible == true)) {
spaceplanter2eInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter5").id = "spaceplanter2e4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2e4").id = "spaceplanter5"},30010);
setTimeout(function() {spaceplanter2eInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2eInvisible == true)) {
spaceplanter2eInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter5").id = "spaceplanter2e5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2e5").id = "spaceplanter5"},25010);
setTimeout(function() {spaceplanter2eInvisible = true},25010);
} 
}
});
var spaceplanter2fInvisible = true;
document.addEventListener("keypress", function function1(event) {
if (((PosX == 418) && (PosY == 522)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter6").id = "spaceplanter6";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2fInvisible == true)) {
spaceplanter2fInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter6").id = "spaceplanter2f";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2f").id = "spaceplanter6"},60010);
setTimeout(function() {spaceplanter2fInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2fInvisible == true)) {
spaceplanter2fInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter6").id = "spaceplanter2f1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2f1").id = "spaceplanter6"},45010);
setTimeout(function() {spaceplanter2fInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2fInvisible == true)) {
spaceplanter2fInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter6").id = "spaceplanter2f2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2f2").id = "spaceplanter6"},40010);
setTimeout(function() {spaceplanter2fInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2fInvisible == true)) {
spaceplanter2fInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter6").id = "spaceplanter2f3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2f3").id = "spaceplanter6"},35010);
setTimeout(function() {spaceplanter2fInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2fInvisible == true)) {
spaceplanter2fInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter6").id = "spaceplanter2f4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2f4").id = "spaceplanter6"},30010);
setTimeout(function() {spaceplanter2fInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2fInvisible == true)) {
spaceplanter2fInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter6").id = "spaceplanter2f5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2f5").id = "spaceplanter6"},25010);
setTimeout(function() {spaceplanter2fInvisible = true},25010);
} 
}
});
var spaceplanter2gInvisible = true;
document.addEventListener("keypress", function function1(event) {
if (((PosX == 522) && (PosY == 522)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter7").id = "spaceplanter7";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2gInvisible == true)) {
spaceplanter2gInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter7").id = "spaceplanter2g";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2g").id = "spaceplanter7"},60010);
setTimeout(function() {spaceplanter2gInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2gInvisible == true)) {
spaceplanter2gInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter7").id = "spaceplanter2g1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2g1").id = "spaceplanter7"},45010);
setTimeout(function() {spaceplanter2gInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2gInvisible == true)) {
spaceplanter2gInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter7").id = "spaceplanter2g2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2g2").id = "spaceplanter7"},40010);
setTimeout(function() {spaceplanter2gInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2gInvisible == true)) {
spaceplanter2gInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter7").id = "spaceplanter2g3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2g3").id = "spaceplanter7"},35010);
setTimeout(function() {spaceplanter2gInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2gInvisible == true)) {
spaceplanter2gInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter7").id = "spaceplanter2g4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2g4").id = "spaceplanter7"},30010);
setTimeout(function() {spaceplanter2gInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2gInvisible == true)) {
spaceplanter2gInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter7").id = "spaceplanter2g5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2g5").id = "spaceplanter7"},25010);
setTimeout(function() {spaceplanter2gInvisible = true},25010);
} 

}
});
var spaceplanter2hInvisible = true;
document.addEventListener("keypress", function function1(event) {
if (((PosX == 522) && (PosY == 418)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter8").id = "spaceplanter8";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2hInvisible == true)) {
spaceplanter2hInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter8").id = "spaceplanter2h";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2h").id = "spaceplanter8"},60010);
setTimeout(function() {spaceplanter2hInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2hInvisible == true)) {
spaceplanter2hInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter8").id = "spaceplanter2h1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2h1").id = "spaceplanter8"},45010);
setTimeout(function() {spaceplanter2hInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2hInvisible == true)) {
spaceplanter2hInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter8").id = "spaceplanter2h2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2h2").id = "spaceplanter8"},40010);
setTimeout(function() {spaceplanter2hInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2hInvisible == true)) {
spaceplanter2hInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter8").id = "spaceplanter2h3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2h3").id = "spaceplanter8"},35010);
setTimeout(function() {spaceplanter2hInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2hInvisible == true)) {
spaceplanter2hInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter8").id = "spaceplanter2h4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2h4").id = "spaceplanter8"},30010);
setTimeout(function() {spaceplanter2hInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2hInvisible == true)) {
spaceplanter2hInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter8").id = "spaceplanter2h5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2h5").id = "spaceplanter8"},25010);
setTimeout(function() {spaceplanter2hInvisible = true},25010);
} 

}
});

var booleanPlanterNo1 = false;
var booleanPlanterNo2 = false;
var booleanPlanterNo3 = false;

var spaceplanter2iInvisible = true;
document.addEventListener("keypress", function function1(event) {
if ((booleanPlanterNo1 == true) && ((PosX == 106) && (PosY == 418)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter9").id = "spaceplanter9";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2iInvisible == true)) {
spaceplanter2iInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter9").id = "spaceplanter2i";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2i").id = "spaceplanter9"},60010);
setTimeout(function() {spaceplanter2iInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2iInvisible == true)) {
spaceplanter2iInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter9").id = "spaceplanter2i1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2i1").id = "spaceplanter9"},45010);
setTimeout(function() {spaceplanter2iInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2iInvisible == true)) {
spaceplanter2iInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter9").id = "spaceplanter2i2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2i2").id = "spaceplanter9"},40010);
setTimeout(function() {spaceplanter2iInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2iInvisible == true)) {
spaceplanter2iInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter9").id = "spaceplanter2i3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2i3").id = "spaceplanter9"},35010);
setTimeout(function() {spaceplanter2iInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2iInvisible == true)) {
spaceplanter2iInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter9").id = "spaceplanter2i4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2i4").id = "spaceplanter9"},30010);
setTimeout(function() {spaceplanter2iInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2iInvisible == true)) {
spaceplanter2iInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter9").id = "spaceplanter2i5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2i5").id = "spaceplanter9"},25010);
setTimeout(function() {spaceplanter2iInvisible = true},25010);
} 

}
});
var spaceplanter2jInvisible = true;
document.addEventListener("keypress", function function1(event) {
if ((booleanPlanterNo1 == true) && ((PosX == 210) && (PosY == 418)) && (event.key === "e")) {
if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter10").id = "spaceplanter10";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2jInvisible == true)) {
spaceplanter2jInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter10").id = "spaceplanter2j";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2j").id = "spaceplanter10"},60010);
setTimeout(function() {spaceplanter2jInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2jInvisible == true)) {
spaceplanter2jInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter10").id = "spaceplanter2j1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2j1").id = "spaceplanter10"},45010);
setTimeout(function() {spaceplanter2jInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2jInvisible == true)) {
spaceplanter2jInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter10").id = "spaceplanter2j2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2j2").id = "spaceplanter10"},40010);
setTimeout(function() {spaceplanter2jInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2jInvisible == true)) {
spaceplanter2jInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter10").id = "spaceplanter2j3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2j3").id = "spaceplanter10"},35010);
setTimeout(function() {spaceplanter2jInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2jInvisible == true)) {
spaceplanter2jInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter10").id = "spaceplanter2j4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2j4").id = "spaceplanter10"},30010);
setTimeout(function() {spaceplanter2jInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2jInvisible == true)) {
spaceplanter2jInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter10").id = "spaceplanter2j5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2j5").id = "spaceplanter10"},25010);
setTimeout(function() {spaceplanter2jInvisible = true},25010);
} 

}
});
var spaceplanter2kInvisible = true;
document.addEventListener("keypress", function function1(event) {
if ((booleanPlanterNo1 == true) && ((PosX == 314) && (PosY == 418)) && (event.key === "e")) {


if (seedTotal == 0) {
consolelog.innerHTML = "Insufficient supply of seeds."
document.getElementById("spaceplanter11").id = "spaceplanter11";

} if ((seedTotal > 0) && (document.getElementById("spaceCrop")) && (spaceplanter2kInvisible == true)) {
spaceplanter2kInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter11").id = "spaceplanter2k";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},60000);
setTimeout(function() {document.getElementById("spaceplanter2k").id = "spaceplanter11"},60010);
setTimeout(function() {spaceplanter2kInvisible = true},60010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop2")) && (spaceplanter2kInvisible == true)) {
spaceplanter2kInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter11").id = "spaceplanter2k1";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},45000);
setTimeout(function() {document.getElementById("spaceplanter2k1").id = "spaceplanter11"},45010);
setTimeout(function() {spaceplanter2kInvisible = true},45010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop3")) && (spaceplanter2kInvisible == true)) {
spaceplanter2kInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter11").id = "spaceplanter2k2";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},40000);
setTimeout(function() {document.getElementById("spaceplanter2k2").id = "spaceplanter11"},40010);
setTimeout(function() {spaceplanter2kInvisible = true},40010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop4")) && (spaceplanter2kInvisible == true)) {
spaceplanter2kInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter11").id = "spaceplanter2k3";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},35000);
setTimeout(function() {document.getElementById("spaceplanter2k3").id = "spaceplanter11"},35010);
setTimeout(function() {spaceplanter2kInvisible = true},35010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop5")) && (spaceplanter2kInvisible == true)) {
spaceplanter2kInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter11").id = "spaceplanter2k4";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},30000);
setTimeout(function() {document.getElementById("spaceplanter2k4").id = "spaceplanter11"},30010);
setTimeout(function() {spaceplanter2kInvisible = true},30010);
} if ((seedTotal > 0) && (document.getElementById("spaceCrop6")) && (spaceplanter2kInvisible == true)) {
spaceplanter2kInvisible = false;
seedTotal -= 1;
seedAmount.innerHTML = seedTotal;
document.getElementById("spaceplanter11").id = "spaceplanter2k5";
setTimeout(function() {if ((DeepFieldTrue) || (AndromedaTrue)) {creditsStart += 10; creditsAmount.innerHTML = creditsStart} if (PillarsTrue) {creditsStart += 20; creditsAmount.innerHTML = creditsStart} if (PhantomTrue) {creditsStart += 30; creditsAmount.innerHTML = creditsStart}},25000);
setTimeout(function() {document.getElementById("spaceplanter2k5").id = "spaceplanter11"},25010);
setTimeout(function() {spaceplanter2kInvisible = true},25010);
} 

}
});




















































document.addEventListener("keypress", function function1(event) {
if ((event.key === "e") && ((PosX == 730) && ((PosY == 210) || (PosY == 314)))) {
noinfobox.id = "infobox";
travelButton.style.color = "white";
storeButton.style.color = "white";
attackButton.style.color = "white";
}});

document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) {
infobox.id = "noinfobox";    }
});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) {
infobox2.id = "noinfobox2";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) { 
infobox3.id = "noinfobox3";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) {
infobox4.id = "noinfobox4";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) {
consolelog.innerHTML = "The cockpit is for travelling, visiting the STORE menu, or attacking nearby vessels.<br><br>Sit in one of the chairs and press the [e] key to pull up the menu.";
}});

document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) {
travelButton.style.color = "white";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) {
storeButton.style.color = "white";
}});
document.addEventListener("keypress", function function1(event) {
if ((event.key === "a") && ((PosX == 626) && ((PosY == 210) || (PosY == 314)))) {
attackButton.style.color = "white";
}});

//TRAVEL BUTTON

travelButton.addEventListener("mouseover", function function1() {
travelButton.style.color = "lightgreen";
});
travelButton.addEventListener("mouseout", function function1() {
travelButton.style.color = "white";
});
travelButton.addEventListener("mousedown", function function1() {
travelButton.style.color = "purple";
});
travelButton.addEventListener("mousedown", function function1() {
noinfobox2.id = "infobox2";
});
travelButton.addEventListener("mousedown", function function1() {
infobox3.id = "noinfobox3";
});
travelButton.addEventListener("mousedown", function function1() {
infobox4.id = "noinfobox4";
});
travelButton.addEventListener("mousedown", function function1() {
consolelog.innerHTML = "Where do you want to travel?<br><br>Andromeda = 10 Ship Fuel<br>The Pillars of Creation = 100 Ship Fuel<br>Phantom Galaxy = 500 Ship Fuel<br>Earth = 1,000 Ship Fuel";
});
travelButton.addEventListener("mouseup", function function1() {
travelButton.style.color = "lightgreen";
});


//THREE OPTIONS



travel3Button.addEventListener("mouseover", function function1() {
if (DeepFieldTrue) {
consolelog.innerHTML = "Cost of travel to Earth: 1000 fuel.<br><br>To get back home to Earth from where you are in the Deep Field, you must first travel to Andromeda, then to the Pillars of Creation, then to the Phantom Galaxy. From there you will be able to get back home, to Earth."        
travel3Button.style.color = "grey";
}
if (AndromedaTrue) { 
consolelog.innerHTML = "Cost of travel to Earth: 1000 fuel.<br><br>To get back home to Earth from where you are in Andromeda, you must first travel to the Pillars of Creation, then you can get to the Phantom Galaxy. From there you will be able to get back home, to Earth."
travel3Button.style.color = "grey";
}
if (PillarsTrue) { 
consolelog.innerHTML = "Cost of travel to Earth: 1000 fuel.<br><br>To get back home to Earth from where you are in the Pillars of Creation, you must first travel to the Phantom Galaxy. From there you will be able to get back home, to Earth."
travel3Button.style.color = "grey";
}
if (PhantomTrue) {    
if (shipFuelLeft < 1000) { 
travel3Button.style.color = "grey";
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to Earth: 1000 fuel.<br><br>Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu. Double Fuel upgrade located in the Machine Room required to double the max fuel reserves from 500 to 1,000+.<br><br>NOTE: This is the only necessary upgrade to get back to Earth.";
} else if (shipFuelLeft >= 1000) {
travel3Button.style.color = "lightgreen";
consolelog.innerHTML = "Cost of travel to Earth: 1000 fuel.<br><br>You're almost home!"
}}
});


travel3Button.addEventListener("mouseout", function function1() {
if (DeepFieldTrue) {
travel3Button.style.color = "grey";
}
if (AndromedaTrue) { 
travel3Button.style.color = "grey";
}
if (PillarsTrue) { 
travel3Button.style.color = "grey";}
if (PhantomTrue) {    
travel3Button.style.color = "white";
consolelog.innerHTML = "";
}

});
travel3Button.addEventListener("mouseup", function function1() {
    if (DeepFieldTrue) {
        travel3Button.style.color = "grey";
        }
        if (AndromedaTrue) { 
        travel3Button.style.color = "grey";
        }
        if (PillarsTrue) { 
        travel3Button.style.color = "grey";}
        if (PhantomTrue) {   
if (shipFuelLeft < 1000) { 
travel3Button.style.color = "grey";
} else if (shipFuelLeft >= 1000) {
travel3Button.style.color = "lightgreen";
}}

});


travel3Button.addEventListener("mousedown", function function1() {
    if (DeepFieldTrue) {
        travel3Button.style.color = "grey";
        }
        if (AndromedaTrue) { 
            travel3Button.style.color = "grey";
            }
            if (PillarsTrue) { 
            travel3Button.style.color = "grey";}

    if (PhantomTrue) {   
if (shipFuelLeft < 1000) {
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to Earth: 1000 fuel. Purchase more fuel from the STORE menu in the cockpit, or steal fuel from other ships by using the ATTACK menu. Double Fuel upgrade located in the Machine Room required to double the max fuel reserves from 500 to 1,000+.<br><br>NOTE: This is the only necessary upgrade to get back to Earth.";
} else if (shipFuelLeft >= 1000) {
travel3Button.style.color = "purple";
shipFuelLeft -= fuelUsePerTripEarth;
document.body.style.backgroundImage = "url('file:///C:/Users/oberm/OneDrive/Desktop/CORN/1Earth.png')";
document.getElementById("tomatoes").innerHTML = "PLANET EARTH"
document.getElementById("tomatoes").id = "tomatoes2";
document.getElementById("change1").id = "change";
consolelog.innerHTML = "Congratulations, you've arrived back home, on Planet Earth!<br><br>YOU WIN!!!<br><br>Thank you for playing EMOJI ASTRONAUT.";
shipFuel.innerHTML = shipFuelLeft;
document.getElementById("consolelog3a").id = "consolelog3";
} }


});


travel1Button.addEventListener("mouseover", function function1() {

    if (DeepFieldTrue) {
if (shipFuelLeft < 10) { 
travel1Button.style.color = "grey";
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Andromeda Galaxy: 10 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
} else if (shipFuelLeft >= 10) {
travel1Button.style.color = "lightgreen";
consolelog.innerHTML = "Cost of travel to Andromeda: 10 fuel.<br><br>To get back home to Earth from where you are in the Deep Field, you must first travel to Andromeda, then to the Pillars of Creation, then to the Phantom Galaxy. From there you will be able to get back home, to Earth."
}}
if (AndromedaTrue) { 
    travel1Button.style.color = "grey";
    }
    if (PillarsTrue) { 
    travel1Button.style.color = "grey";}

if (PhantomTrue) {   
    travel1Button.style.color = "grey";}

});
travel1Button.addEventListener("mouseout", function function1() {


    if (DeepFieldTrue) {
travel1Button.style.color = "white";
consolelog.innerHTML = "";
    }
    if (AndromedaTrue) { 
        travel1Button.style.color = "grey";
        }
        if (PillarsTrue) { 
        travel1Button.style.color = "grey";}
    
    if (PhantomTrue) {   
        travel1Button.style.color = "grey";}

});

travel1Button.addEventListener("mousedown", function function1() {

    if (DeepFieldTrue) {

if (shipFuelLeft >= 10) {
if (AndromedaTrue) {

consolelog.innerHTML = "You are already in Andromeda.";
} else {
DeepFieldTrue = false;
AndromedaTrue = true;
PillarsTrue = false;
PhantomTrue = false;
travel1Button.style.color = "purple";
shipFuelLeft -= fuelUsePerTripAndromeda;
dayCount += 1;
 
document.body.style.backgroundImage = "url('file:///C:/Users/oberm/OneDrive/Desktop/CORN/1Andromeda.png')";
shipFuel.innerHTML = shipFuelLeft;
document.getElementById("tomatoes").innerHTML = "ANDROMEDA"
} 
if (shipFuelLeft < 10) {
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Andromeda Galaxy: 10 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
}}}
if (AndromedaTrue) { 
    travel1Button.style.color = "grey";
    }
    if (PillarsTrue) { 
    travel1Button.style.color = "grey";}

if (PhantomTrue) {   
    travel1Button.style.color = "grey";}

});    


travel2Button.addEventListener("mouseup", function function1() {
    if (DeepFieldTrue) {
   travel2Button.style.color = "grey";
}
if (AndromedaTrue) { 
 if (shipFuelLeft < 100) { 
travel2Button.style.color = "grey";
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Pillars of Creation: 100 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
} else if (shipFuelLeft >= 100) {
travel2Button.style.color = "lightgreen";

}
    }
    if (PillarsTrue) { 
    travel2Button.style.color = "grey";}

if (PhantomTrue) {   
    travel2Button.style.color = "grey";}


});


travel2Button.addEventListener("mouseover", function function1() {
    if (DeepFieldTrue) {
        travel2Button.style.color = "grey";
        consolelog.innerHTML = "Cost of travel to the Pillars of Creation: 100 fuel.<br><br>To get back home to Earth from where you are in the Deep Field, you must first travel to Andromeda, then to the Pillars of Creation, then to the Phantom Galaxy. From there you will be able to get back home, to Earth.";
     }
     if (AndromedaTrue) { 
if (shipFuelLeft < 100) { 
travel2Button.style.color = "grey";
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Pillars of Creation: 100 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
} else if (shipFuelLeft >= 100) {
travel2Button.style.color = "lightgreen";
consolelog.innerHTML = "Cost of travel to the Pillars of Creation: 100 fuel.<br><br>To get back home to Earth from where you are in Andromeda, you must first travel to the Pillars of Creation, then to the Phantom Galaxy. From there you will be able to get back home, to Earth.";
}}
if (PillarsTrue) { 
    travel2Button.style.color = "grey";
   
}

if (PhantomTrue) {   
    travel2Button.style.color = "grey";}

});


travel2Button.addEventListener("mouseout", function function1() {

    if (DeepFieldTrue) {
        travel2Button.style.color = "grey";
     }
     if (AndromedaTrue) { 
travel2Button.style.color = "white";
consolelog.innerHTML = "";}
if (PillarsTrue) { 
    travel2Button.style.color = "grey";}

if (PhantomTrue) {   
    travel2Button.style.color = "grey";}

});

travel2Button.addEventListener("mousedown", function function1() {
    if (DeepFieldTrue) {
        travel2Button.style.color = "grey";
     }
     if (AndromedaTrue) { 

if (shipFuelLeft >= 100) {
if (PillarsTrue) {

consolelog.innerHTML = "You are already in the Pillars of Creation.";
} else {
DeepFieldTrue = false;
PillarsTrue = true;
AndromedaTrue = false;
PhantomTrue = false;
travel2Button.style.color = "purple";    
shipFuelLeft -= fuelUsePerTripPillars;
dayCount += 1;

document.body.style.backgroundImage = "url('file:///C:/Users/oberm/OneDrive/Desktop/CORN/1Pillars%20of%20Creation.png')";
document.getElementById("tomatoes").innerHTML = "PILLARS OF CREATION"
shipFuel.innerHTML = shipFuelLeft;}
if (shipFuelLeft < 100) {
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Pillars of Creation: 100 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
}
}}
if (PillarsTrue) { 
    travel2Button.style.color = "grey";}

if (PhantomTrue) {   
    travel2Button.style.color = "grey";}

});

travel2Button.addEventListener("mouseup", function function1() {
    if (DeepFieldTrue) {
        travel2Button.style.color = "grey";
     }
     if (AndromedaTrue) { 
if (shipFuelLeft < 100) { 
travel2Button.style.color = "grey";
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Pillars of Creation: 100 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
} else if (shipFuelLeft >= 100) {
travel2Button.style.color = "lightgreen";
}}
if (PillarsTrue) { 
    travel2Button.style.color = "grey";}

if (PhantomTrue) {   
    travel2Button.style.color = "grey";}
});







travel4Button.addEventListener("mouseover", function function1() {
    if (DeepFieldTrue) {
        travel4Button.style.color = "grey";
        consolelog.innerHTML = "Cost of travel to the Phantom Galaxy: 500 fuel.<br><br>To get back home to Earth from where you are in the Deep Field, you must first travel to Andromeda, then to the Pillars of Creation, then to the Phantom Galaxy. From there you will be able to get back home, to Earth.";
     }
     if (AndromedaTrue) { 
        travel4Button.style.color = "grey";
        consolelog.innerHTML = "Cost of travel to the Phantom Galaxy: 500 fuel.<br><br>To get back home to Earth from where you are in the Deep Field, you must first travel to Andromeda, then to the Pillars of Creation, then to the Phantom Galaxy. From there you will be able to get back home, to Earth.";
    }
    if (PillarsTrue) { 
if (shipFuelLeft < 500) { 
travel4Button.style.color = "grey";
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Phantom Galaxy: 500 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
} else if (shipFuelLeft >= 500) {
travel4Button.style.color = "lightgreen";
consolelog.innerHTML = "Cost of travel to the Phantom Galaxy: 500 fuel.<br><br>To get back home to Earth from where you are in the Deep Field, you must first travel to Andromeda, then to the Pillars of Creation, then to the Phantom Galaxy. From there you will be able to get back home, to Earth.";
}}
if (PhantomTrue) {   
    travel2Button.style.color = "grey";}

});
travel4Button.addEventListener("mouseout", function function1() {
    if (DeepFieldTrue) {
        travel4Button.style.color = "grey";
     }
     if (AndromedaTrue) { 
        travel4Button.style.color = "grey";
    }
    if (PillarsTrue) { 

travel4Button.style.color = "white";
consolelog.innerHTML = "";

}
if (PhantomTrue) {   
    travel4Button.style.color = "grey";}
});

travel4Button.addEventListener("mousedown", function function1() {
    if (DeepFieldTrue) {
        travel4Button.style.color = "grey";
     }
     if (AndromedaTrue) { 
        travel4Button.style.color = "grey";
    }
    if (PillarsTrue) { 


    if (shipFuelLeft >= 500) {
if (shipFuelLeft < 500) {
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Phantom Galaxy: 500 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
}
if (PhantomTrue) {
consolelog.innerHTML = "You are already in the Phantom Galaxy";
} else {
PillarsTrue = false;
AndromedaTrue = false;
PhantomTrue = true;
travel4Button.style.color = "purple";    
shipFuelLeft -= fuelUsePerTripPhantom;
dayCount += 1;

document.body.style.backgroundImage = "url('file:///C:/Users/oberm/OneDrive/Desktop/CORN/1Phantom%20Galaxy.png')";
document.getElementById("tomatoes").innerHTML = "PHANTOM GALAXY"
shipFuel.innerHTML = shipFuelLeft;
} 


}}


if (PhantomTrue) {   
    travel4Button.style.color = "grey";}


});

travel4Button.addEventListener("mouseup", function function1() {
    if (DeepFieldTrue) {
        travel4Button.style.color = "grey";
     }
     if (AndromedaTrue) { 
        travel4Button.style.color = "grey";
    }
    if (PillarsTrue) { 


if (shipFuelLeft < 500) { 
travel4Button.style.color = "grey";
consolelog.innerHTML = "Insufficient fuel.<br><br>Cost of travel to the Phantom Galaxy: 500 fuel. Purchase more fuel from the STORE menu in the cockpit or steal fuel from other ships by using the ATTACK menu."
} else if (shipFuelLeft >= 500) {
travel4Button.style.color = "lightgreen";
}}
if (PhantomTrue) {   
    travel4Button.style.color = "grey";}


});




//==============================================================================================

//STORE BUTTON 

storeButton.addEventListener("mouseover", function function1() {
if (DeepFieldTrue) {
storeButton.style.color = "grey";
} 
if (AndromedaTrue) {
storeButton.style.color = "lightgreen";
} 
if (PillarsTrue) {
storeButton.style.color = "lightgreen";
}
if (PhantomTrue) {
storeButton.style.color = "lightgreen";
}

});
storeButton.addEventListener("mouseout", function function1() {
if (DeepFieldTrue) {
storeButton.style.color = "grey";
} 
if (AndromedaTrue) {
storeButton.style.color = "white";
} 
if (PillarsTrue) {
storeButton.style.color = "white";
}
if (PhantomTrue) {
storeButton.style.color = "white";
}

});


storeButton.addEventListener("mousedown", function function1() {
if (DeepFieldTrue) {
storeButton.style.color = "grey";
} 
if (AndromedaTrue) {
storeButton.style.color = "purple";
} 
if (PillarsTrue) {
storeButton.style.color = "purple";
}
if (PhantomTrue) {
storeButton.style.color = "purple";
}
});


storeButton.addEventListener("mousedown", function function1() {
if (DeepFieldTrue) {
noinfobox3.id = "noinfobox3";
} 
if (AndromedaTrue) {
noinfobox3.id = "infobox3";
} 
if (PillarsTrue) {
noinfobox3.id = "infobox3";
}
if (PhantomTrue) {
noinfobox3.id = "infobox3";
}
});

storeButton.addEventListener("mousedown", function function1() {

if (DeepFieldTrue) {
infobox2.id = "infobox2";
} 
if (AndromedaTrue) {
infobox2.id = "noinfobox2";
} 
if (PillarsTrue) {
infobox2.id = "noinfobox2";
}
if (PhantomTrue) {
infobox2.id = "noinfobox2";
}


});


storeButton.addEventListener("mousedown", function function1() {
if (DeepFieldTrue) {
infobox4.id = "infobox4";
} 
if (AndromedaTrue) {
infobox4.id = "noinfobox4";
} 
if (PillarsTrue) {
infobox4.id = "noinfobox4";
}
if (PhantomTrue) {
infobox4.id = "noinfobox4";
}


});


storeButton.addEventListener("mousedown", function function1() {
if (DeepFieldTrue) {
consolelog.innerHTML = "You are too far out into space.<br><br>The nearest galactic STORE menu is located within the Andromeda Galaxy. Use the TRAVEL menu button to get to Andromeda. Steal fuel from other ships by using the ATTACK menu option in order to get to Andromeda.";
} 
if (AndromedaTrue) {
consolelog.innerHTML = "What would you like to purchase?<br><br> SEEDS: ۞50 for 10<br>SHIP REPAIR: ۞50 for 5HP<br>SHIP FUEL: ۞25 for 5<br>EXTRA PLANTERS: ۞1,000 for 3*<br><br>*NOTE: can only be purchased once.";
} 
if (PillarsTrue) {
consolelog.innerHTML = "What would you like to purchase?<br><br> SEEDS: ۞60 for 10<br>SHIP REPAIR: ۞60 for 5HP<br>SHIP FUEL: ۞35 for 5<br>EXTRA PLANTERS: ۞1,200 for 3*<br><br>*NOTE: can only be purchased once.";
}
if (PhantomTrue) {
consolelog.innerHTML = "What would you like to purchase?<br><br> SEEDS: ۞70 for 10<br>SHIP REPAIR: ۞70 for 5HP<br>SHIP FUEL: ۞45 for 5<br>EXTRA PLANTERS: ۞1,400 for 3*<br><br>*NOTE: can only be purchased once.";
}
});

storeButton.addEventListener("mouseup", function function1() {
if (DeepFieldTrue) {
storeButton.style.color = "grey";
} 
if (AndromedaTrue) {
storeButton.style.color = "lightgreen";
} 
if (PillarsTrue) {
storeButton.style.color = "lightgreen";
}
if (PhantomTrue) {
storeButton.style.color = "lightgreen";
}
});



//FOUR OPTIONS

store1Button.addEventListener("mouseover", function function1() {
if (AndromedaTrue) {
if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞50 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 50) {  
consolelog.innerHTML = "Cost of seeds: ۞50 for 10.";
store1Button.style.color = "lightgreen";
}
}
if (PillarsTrue) {
if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞60 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 60) {  
consolelog.innerHTML = "Cost of seeds: ۞60 for 10.";
store1Button.style.color = "lightgreen";
}
}
if (PhantomTrue) {
if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞70 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 70) {  
    consolelog.innerHTML = "Cost of seeds: ۞70 for 10.";
store1Button.style.color = "lightgreen";
}
}

});

store1Button.addEventListener("mouseout", function function1() {
if (AndromedaTrue) {
if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞50 for 10."
store1Button.style.color = "white";}
if (creditsStart >= 50) {      
store1Button.style.color = "white";
}
}
if (PillarsTrue) {
if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞60 for 10."
store1Button.style.color = "white";}
if (creditsStart >= 60) {      
store1Button.style.color = "white";
}}
if (PhantomTrue) {
if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞70 for 10."
store1Button.style.color = "white";}
if (creditsStart >= 70) {      
store1Button.style.color = "white";
}
}});


store1Button.addEventListener("mousedown", function function1() {

if (AndromedaTrue) {

if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞50 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 50) {  
store1Button.style.color = "purple";

}}

if (PillarsTrue) {

if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞60 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 60) {  
store1Button.style.color = "purple";

}}

if (PhantomTrue) {

if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞70 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 70) {  
store1Button.style.color = "purple";

}

}
});


store1Button.addEventListener("mousedown", function function1() {
if (AndromedaTrue) {
if((creditsStart - seedCostAndromeda) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞50 for 10."
seedTotal -= seedInterval;
} else {
creditsStart -= seedCostAndromeda;
}
}

if (PillarsTrue) {
if((creditsStart - seedCostPillars) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞60 for 10."
seedTotal -= seedInterval;
} else {
creditsStart -= seedCostPillars;
}
}

if (PhantomTrue) {
if((creditsStart - seedCostPhantom) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞70 for 10."
seedTotal -= seedInterval;
} else {
creditsStart -= seedCostPhantom;
}
}
});


store1Button.addEventListener("mousedown", function function1() {

seedTotal += seedInterval;


});


store1Button.addEventListener("mousedown", function function1() {
creditsAmount.innerHTML = creditsStart;
});


store1Button.addEventListener("mousedown", function function1() {
seedAmount.innerHTML = seedTotal;
});


store1Button.addEventListener("mouseup", function function1() {
if (AndromedaTrue) {

if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞50 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 50) {
store1Button.style.color = "lightgreen";
}}
if (PillarsTrue) {

if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞60 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 60) {
store1Button.style.color = "lightgreen";
}}

if (PhantomTrue) {

if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of seeds: ۞70 for 10."
store1Button.style.color = "grey";}
if (creditsStart >= 70) {
store1Button.style.color = "lightgreen";
}


}});


store2Button.addEventListener("mouseover", function function1() {

if (AndromedaTrue) {

if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 50) {
consolelog.innerHTML = "Cost of Ship Repair: ۞50 for 5HP.";
store2Button.style.color = "lightgreen";
}}

if (PillarsTrue) {

if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 60) {
consolelog.innerHTML = "Cost of Ship Repair: ۞60 for 5HP.";
store2Button.style.color = "lightgreen";
}}

if (PhantomTrue) {

if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 70) {
consolelog.innerHTML = "Cost of Ship Repair: ۞70 for 5HP.";
store2Button.style.color = "lightgreen";
}}

});
store2Button.addEventListener("mouseout", function function1() {

if (AndromedaTrue) {
if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";
store2Button.style.color = "white";}
if (creditsStart >= 50) {
store2Button.style.color = "white";
}
}

if (PillarsTrue) {
if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";
store2Button.style.color = "white";}
if (creditsStart >= 60) {
store2Button.style.color = "white";
}
}

if (PhantomTrue) {
if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";
store2Button.style.color = "white";}
if (creditsStart >= 70) {
store2Button.style.color = "white";
}
}
});



store2Button.addEventListener("mousedown", function function1() {

if (AndromedaTrue) {
if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 50) {
store2Button.style.color = "purple";
}}

if (PillarsTrue) {
if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 60) {
store2Button.style.color = "purple";
}}

if (PhantomTrue) {
if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 70) {
store2Button.style.color = "purple";
}}

});

//REPAIR FUNCTION
store2Button.addEventListener("mousedown", function function1() {


if (AndromedaTrue) {

if((creditsStart - repairCostAndromeda) >= 0) {

if (document.getElementById("spaceShipHealth")) {
if((creditsStart - repairCostAndromeda) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";

} if (shipHealthLeft == 100) {
} if ((shipHealthLeft >= 95) && (shipHealthLeft < 100)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 100;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 95)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth2")) {
if((creditsStart - repairCostAndromeda) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";

} if (shipHealthLeft == 120) {
} if ((shipHealthLeft >= 115) && (shipHealthLeft < 120)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 120;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 115)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth3")) {
if((creditsStart - repairCostAndromeda) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";

} if (shipHealthLeft == 140) {
} if ((shipHealthLeft >= 135) && (shipHealthLeft < 140)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 140;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 135)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth4")) {
if((creditsStart - repairCostAndromeda) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";

} if (shipHealthLeft == 160) {
} if ((shipHealthLeft >= 155) && (shipHealthLeft < 160)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 160;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 155)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth5")) {
if((creditsStart - repairCostAndromeda) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";

} if (shipHealthLeft == 180) {
} if ((shipHealthLeft >= 175) && (shipHealthLeft < 180)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 180;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 175)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth6")) {
if((creditsStart - repairCostAndromeda) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";

} if (shipHealthLeft == 200) {
} if ((shipHealthLeft >= 195) && (shipHealthLeft < 200)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 200;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 195)) {
creditsStart -= repairCostAndromeda;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}}} else {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";
store2Button.style.color = "grey";
}}

if (PillarsTrue) {

if((creditsStart - repairCostPillars) >= 0) {

if (document.getElementById("spaceShipHealth")) {
if((creditsStart - repairCostPillars) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";

} if (shipHealthLeft == 100) {
} if ((shipHealthLeft >= 95) && (shipHealthLeft < 100)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 100;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 95)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth2")) {
if((creditsStart - repairCostPillars) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";

} if (shipHealthLeft == 120) {
} if ((shipHealthLeft >= 115) && (shipHealthLeft < 120)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 120;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 115)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth3")) {
if((creditsStart - repairCostPillars) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";

} if (shipHealthLeft == 140) {
} if ((shipHealthLeft >= 135) && (shipHealthLeft < 140)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 140;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 135)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth4")) {
if((creditsStart - repairCostPillars) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";

} if (shipHealthLeft == 160) {
} if ((shipHealthLeft >= 155) && (shipHealthLeft < 160)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 160;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 155)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth5")) {
if((creditsStart - repairCostPillars) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";

} if (shipHealthLeft == 180) {
} if ((shipHealthLeft >= 175) && (shipHealthLeft < 180)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 180;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 175)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth6")) {
if((creditsStart - repairCostPillars) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";

} if (shipHealthLeft == 200) {
} if ((shipHealthLeft >= 195) && (shipHealthLeft < 200)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 200;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 195)) {
creditsStart -= repairCostPillars;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}}} else {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";
store2Button.style.color = "grey";
}}





if (PhantomTrue) {

if((creditsStart - repairCostPhantom) >= 0) {

if (document.getElementById("spaceShipHealth")) {
if((creditsStart - repairCostPhantom) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";

} if (shipHealthLeft == 100) {
} if ((shipHealthLeft >= 95) && (shipHealthLeft < 100)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 100;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 95)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth2")) {
if((creditsStart - repairCostPhantom) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";

} if (shipHealthLeft == 120) {
} if ((shipHealthLeft >= 115) && (shipHealthLeft < 120)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 120;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 115)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth3")) {
if((creditsStart - repairCostPhantom) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";

} if (shipHealthLeft == 140) {
} if ((shipHealthLeft >= 135) && (shipHealthLeft < 140)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 140;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 135)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth4")) {
if((creditsStart - repairCostPhantom) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";

} if (shipHealthLeft == 160) {
} if ((shipHealthLeft >= 155) && (shipHealthLeft < 160)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 160;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 155)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth5")) {
if((creditsStart - repairCostPhantom) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";

} if (shipHealthLeft == 180) {
} if ((shipHealthLeft >= 175) && (shipHealthLeft < 180)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 180;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 175)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}
}

if (document.getElementById("spaceShipHealth6")) {
if((creditsStart - repairCostPhantom) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";

} if (shipHealthLeft == 200) {
} if ((shipHealthLeft >= 195) && (shipHealthLeft < 200)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft = 200;
shipHealth.innerHTML = shipHealthLeft;
}
if ((shipHealthLeft > 0) && (shipHealthLeft < 195)) {
creditsStart -= repairCostPhantom;
creditsAmount.innerHTML = creditsStart;
shipHealthLeft += 5;
shipHealth.innerHTML = shipHealthLeft;
}}} else {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";
store2Button.style.color = "grey";
}}




}



);








store2Button.addEventListener("mouseup", function function1() {


if (AndromedaTrue) {
if (creditsStart < 50) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞50 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 50) { 
store2Button.style.color = "lightgreen";
}
}


if (PillarsTrue) {
if (creditsStart < 60) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞60 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 60) { 
store2Button.style.color = "lightgreen";
}
}


if (PhantomTrue) {
if (creditsStart < 70) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Repair: ۞70 for 5HP.";
store2Button.style.color = "grey";}
if (creditsStart >= 70) { 
store2Button.style.color = "lightgreen";
}
}


});




store3Button.addEventListener("mouseover", function function1() {

if (AndromedaTrue) {
if (creditsStart < 25) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞25 for 5."
store3Button.style.color = "grey";} 
if (creditsStart >= 25) {
consolelog.innerHTML = "Cost of Ship Fuel: ۞25 for 5.";
store3Button.style.color = "lightgreen";
}}
if (PillarsTrue) {
if (creditsStart < 30) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞30 for 5."
store3Button.style.color = "grey";} 
if (creditsStart >= 30) {
consolelog.innerHTML = "Cost of Ship Fuel: ۞30 for 5.";
store3Button.style.color = "lightgreen";
}}
if (PhantomTrue) {
if (creditsStart < 35) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞35 for 5."
store3Button.style.color = "grey";} 
if (creditsStart >= 35) {
consolelog.innerHTML = "Cost of Ship Fuel: ۞35 for 5.";
store3Button.style.color = "lightgreen";
}}
});


store3Button.addEventListener("mouseout", function function1() {

if (AndromedaTrue) {
if (creditsStart < 25) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞25 for 5.";
store3Button.style.color = "white";} 
if (creditsStart >= 25) {
store3Button.style.color = "white";
}}
if (PillarsTrue) {
if (creditsStart < 30) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞30 for 5.";
store3Button.style.color = "white";} 
if (creditsStart >= 30) {
store3Button.style.color = "white";
}}
if (PhantomTrue) {
if (creditsStart < 35) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞35 for 5.";
store3Button.style.color = "white";} 
if (creditsStart >= 35) {
store3Button.style.color = "white";
}}


});
store3Button.addEventListener("mousedown", function function1() {


if (AndromedaTrue) {
if (creditsStart < 25) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞25 for 5.";
store3Button.style.color = "grey";} 
if (creditsStart >= 25) {
store3Button.style.color = "purple";
}}
if (PillarsTrue) {
if (creditsStart < 30) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞30 for 5.";
store3Button.style.color = "grey";} 
if (creditsStart >= 30) {
store3Button.style.color = "purple";
}}
if (PhantomTrue) {
if (creditsStart < 35) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞35 for 5.";
store3Button.style.color = "grey";} 
if (creditsStart >= 35) {
store3Button.style.color = "purple";
}}


});

store3Button.addEventListener("mousedown", function function1() {


if (AndromedaTrue) {
if ((creditsStart - fuelCost) < 0) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞25 for 5.";
shipFuelLeft -= fuelInterval;}
if ((creditsStart - fuelCost) >= 0) {
if (document.getElementById("DoubleFuelOff")) {
if (shipFuelLeft <= 500) {
creditsStart -= fuelCost;
shipFuelLeft += fuelInterval;
creditsAmount.innerHTML = creditsStart;
shipFuel.innerHTML = shipFuelLeft;
} if (shipFuelLeft > 500) {
shipFuelLeft = 500;
shipFuel.innerHTML = shipFuelLeft;
creditsStart += fuelCost;
creditsAmount.innerHTML = creditsStart;
}

}
if (document.getElementById("DoubleFuelOn")) {
if (shipFuelLeft <= 1000) {
creditsStart -= fuelCost;
shipFuelLeft += fuelInterval;
creditsAmount.innerHTML = creditsStart;
shipFuel.innerHTML = shipFuelLeft;
}
if (shipFuelLeft > 1000) {
shipFuelLeft = 1000;
shipFuel.innerHTML = shipFuelLeft;
creditsStart += fuelCost;
creditsAmount.innerHTML = creditsStart;
}}}
}



if (PillarsTrue) {
    if ((creditsStart - fuelCostPillars) < 0) {
    consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞30 for 5.";
    shipFuelLeft -= fuelInterval;}
    if ((creditsStart - fuelCostPillars) >= 0) {
    if (document.getElementById("DoubleFuelOff")) {
    if (shipFuelLeft <= 500) {
    creditsStart -= fuelCostPillars;
    shipFuelLeft += fuelInterval;
    creditsAmount.innerHTML = creditsStart;
    shipFuel.innerHTML = shipFuelLeft;
    } if (shipFuelLeft > 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    creditsStart += fuelCostPillars;
    creditsAmount.innerHTML = creditsStart;
    }
    
    }
    if (document.getElementById("DoubleFuelOn")) {
    if (shipFuelLeft <= 1000) {
    creditsStart -= fuelCostPillars;
    shipFuelLeft += fuelInterval;
    creditsAmount.innerHTML = creditsStart;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if (shipFuelLeft > 1200) {
    shipFuelLeft = 1200;
    shipFuel.innerHTML = shipFuelLeft;
    creditsStart += fuelCostPillars;
    creditsAmount.innerHTML = creditsStart;
    }}}
    }


    if (PhantomTrue) {
        if ((creditsStart - fuelCostPhantom) < 0) {
        consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞35 for 5.";
        shipFuelLeft -= fuelInterval;}
        if ((creditsStart - fuelCostPhantom) >= 0) {
        if (document.getElementById("DoubleFuelOff")) {
        if (shipFuelLeft <= 500) {
        creditsStart -= fuelCostPhantom;
        shipFuelLeft += fuelInterval;
        creditsAmount.innerHTML = creditsStart;
        shipFuel.innerHTML = shipFuelLeft;
        } if (shipFuelLeft > 500) {
        shipFuelLeft = 500;
        shipFuel.innerHTML = shipFuelLeft;
        creditsStart += fuelCostPhantom;
        creditsAmount.innerHTML = creditsStart;
        }
        
        }
        if (document.getElementById("DoubleFuelOn")) {
        if (shipFuelLeft <= 1400) {
        creditsStart -= fuelCostPhantom;
        shipFuelLeft += fuelInterval;
        creditsAmount.innerHTML = creditsStart;
        shipFuel.innerHTML = shipFuelLeft;
        }
        if (shipFuelLeft > 1400) {
        shipFuelLeft = 1000;
        shipFuel.innerHTML = shipFuelLeft;
        creditsStart += fuelCostPhantom;
        creditsAmount.innerHTML = creditsStart;
        }}}
        }


});


store3Button.addEventListener("mouseup", function function1() {
if (AndromedaTrue) {
if (creditsStart < 25) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞25 for 5."
store3Button.style.color = "grey";} 
if (creditsStart >= 25) {
store3Button.style.color = "lightgreen";
}}
if (PillarsTrue) {
    if (creditsStart < 30) {
    consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞30 for 5."
    store3Button.style.color = "grey";} 
    if (creditsStart >= 30) {
    store3Button.style.color = "lightgreen";
    }}
    if (PhantomTrue) {
        if (creditsStart < 35) {
        consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Ship Fuel: ۞35 for 5."
        store3Button.style.color = "grey";} 
        if (creditsStart >= 35) {
        store3Button.style.color = "lightgreen";
        }}
}

);


//STORE4 PLANTERS BUTTON
var planterCost = 1000;
var planterCostPillars = 1200;
var planterCostPhantom = 1400;
var store4Button = document.getElementById("store4");

store4Button.addEventListener("mouseover", function function1() {

if (AndromedaTrue) {

if (document.getElementById("spaceplanter9")) {
    store4Button.style.color = "grey";
    consolelog.innerHTML = "Extra Planters upgrade already purchased.";
}

if (document.getElementById("spacePlanterNo2") && (creditsStart >= 1000)) {
store4Button.style.color = "lightgreen";
consolelog.innerHTML = "Cost of Extra Planters: ۞1000*.<br><br>*NOTE: Can only be purchased once.";}
if (document.getElementById("spacePlanterNo2") && (creditsStart < 1000)) {
store4Button.style.color = "grey";
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Extra Planters: ۞1000*.<br><br>*NOTE: Can only be purchased once.";

}
}


if (PillarsTrue) {

if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";
consolelog.innerHTML = "Extra Planters upgrade already purchased.";
}

if (document.getElementById("spacePlanterNo2") && (creditsStart >= 1200)) {
store4Button.style.color = "lightgreen";
consolelog.innerHTML = "Cost of Extra Planters: ۞1200*.<br><br>*NOTE: Can only be purchased once.";}
if (document.getElementById("spacePlanterNo2") && (creditsStart < 1200)) {
store4Button.style.color = "grey";
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Extra Planters: ۞1200*.<br><br>*NOTE: Can only be purchased once.";

}
}

if (PhantomTrue) {

if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";
consolelog.innerHTML = "Extra Planters upgrade already purchased.";
}

if (document.getElementById("spacePlanterNo2") && (creditsStart >= 1400)) {
store4Button.style.color = "lightgreen";
consolelog.innerHTML = "Cost of Extra Planters: ۞1400*.<br><br>*NOTE: Can only be purchased once.";}
if (document.getElementById("spacePlanterNo2") && (creditsStart < 1400)) {
store4Button.style.color = "grey";
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Extra Planters: ۞1400*.<br><br>*NOTE: Can only be purchased once.";

}
}

});





store4Button.addEventListener("mousedown", function function1() {



if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";
consolelog.innerHTML = "Extra Planters upgrade already purchased.";
} if (document.getElementById("spacePlanterNo2") && (creditsAmount >= 1000)) {
store4Button.style.color = "purple";}
if ((document.getElementById("spacePlanterNo2")) && (creditsAmount < 1000)) {
    store4Button.style.color = "grey";}



});
   
    
store4Button.addEventListener("mousedown", function function1() {

if (AndromedaTrue) {
if ((creditsStart - planterCost) < 0) {
if (document.getElementById("spaceplanter9")) {
consolelog.innerHTML = "Extra Planters upgrade already purchased."} 
if (document.getElementById("spacePlanterNo2")) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Extra Planters: ۞1000*.<br><br>*NOTE: Can only be purchased once.";
store4Button.style.color = "grey";
}
}
else {
creditsStart -= planterCost;
creditsAmount.innerHTML = creditsStart;
var spacePlanterNo1 = document.getElementById("spacePlanterNo1");
booleanPlanterNo1 = true;
var spacePlanterNo2 = document.getElementById("spacePlanterNo2");
booleanPlanterNo2 = true;
var spacePlanterNo3 = document.getElementById("spacePlanterNo3");
booleanPlanterNo3 = true;
spacePlanterNo1.id = "spaceplanter9";
spacePlanterNo2.id = "spaceplanter10";
spacePlanterNo3.id = "spaceplanter11";
consolelog.innerHTML = "Extra Planters upgrade purchased. Have a nice day."
}
}

if (PillarsTrue) {
if ((creditsStart - planterCostPillars) < 0) {
if (document.getElementById("spaceplanter9")) {
consolelog.innerHTML = "Extra Planters upgrade already purchased."} 
if (document.getElementById("spacePlanterNo2")) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Extra Planters: ۞1200*.<br><br>*NOTE: Can only be purchased once.";
store4Button.style.color = "grey";
}
}
else {
creditsStart -= planterCostPillars;
creditsAmount.innerHTML = creditsStart;
var spacePlanterNo1 = document.getElementById("spacePlanterNo1");
booleanPlanterNo1 = true;
var spacePlanterNo2 = document.getElementById("spacePlanterNo2");
booleanPlanterNo2 = true;
var spacePlanterNo3 = document.getElementById("spacePlanterNo3");
booleanPlanterNo3 = true;
spacePlanterNo1.id = "spaceplanter9";
spacePlanterNo2.id = "spaceplanter10";
spacePlanterNo3.id = "spaceplanter11";
consolelog.innerHTML = "Extra Planters upgrade purchased. Have a nice day."
}
}

if (PhantomTrue) {
if ((creditsStart - planterCostPhantom) < 0) {
if (document.getElementById("spaceplanter9")) {
consolelog.innerHTML = "Extra Planters upgrade already purchased."} 
if (document.getElementById("spacePlanterNo2")) {
consolelog.innerHTML = "Insufficient credits.<br><br>Cost of Extra Planters: ۞1400*.<br><br>*NOTE: Can only be purchased once.";
store4Button.style.color = "grey";
}
}
else {
creditsStart -= planterCostPhantom;
creditsAmount.innerHTML = creditsStart;
var spacePlanterNo1 = document.getElementById("spacePlanterNo1");
booleanPlanterNo1 = true;
var spacePlanterNo2 = document.getElementById("spacePlanterNo2");
booleanPlanterNo2 = true;
var spacePlanterNo3 = document.getElementById("spacePlanterNo3");
booleanPlanterNo3 = true;
spacePlanterNo1.id = "spaceplanter9";
spacePlanterNo2.id = "spaceplanter10";
spacePlanterNo3.id = "spaceplanter11";
consolelog.innerHTML = "Extra Planters upgrade purchased. Have a nice day."
}
}


});




store4Button.addEventListener("mouseup", function function1() {

if (AndromedaTrue) {
if ((document.getElementById("spacePlanterNo2")) && (creditsAmount >= 1000)) {
store4Button.style.color = "lightgreen";}
if ((document.getElementById("spacePlanterNo2")) && (creditsAmount < 1000)) {
store4Button.style.color = "grey";}


if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";
} }

if (PillarsTrue) {
if ((document.getElementById("spacePlanterNo2")) && (creditsAmount >= 1200)) {
store4Button.style.color = "lightgreen";}
if ((document.getElementById("spacePlanterNo2")) && (creditsAmount < 1200)) {
store4Button.style.color = "grey";}


if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";
} }

if (PhantomTrue) {
if ((document.getElementById("spacePlanterNo2")) && (creditsAmount >= 1400)) {
store4Button.style.color = "lightgreen";}
if ((document.getElementById("spacePlanterNo2")) && (creditsAmount < 1400)) {
store4Button.style.color = "grey";}


if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";
} }


});


store4Button.addEventListener("mouseout", function function1() {

if (AndromedaTrue) {
if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";} 
if (document.getElementById("spacePlanterNo2")) {
store4Button.style.color = "white";}
}
if (PillarsTrue) {
if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";} 
if (document.getElementById("spacePlanterNo2")) {
store4Button.style.color = "white";}
}
if (PhantomTrue) {
if (document.getElementById("spaceplanter9")) {
store4Button.style.color = "grey";} 
if (document.getElementById("spacePlanterNo2")) {
store4Button.style.color = "white";}
}

});



//==============================================================================================


//ATTACK BUTTON 

attackButton.addEventListener("mouseover", function function1() {
attackButton.style.color = "lightgreen";
});
attackButton.addEventListener("mouseout", function function1() {
attackButton.style.color = "white";
});
attackButton.addEventListener("mousedown", function function1() {
attackButton.style.color = "purple";
});
attackButton.addEventListener("mousedown", function function1() {
noinfobox4.id = "infobox4";
});
attackButton.addEventListener("mousedown", function function1() {
infobox2.id = "noinfobox2";
});
attackButton.addEventListener("mousedown", function function1() {
infobox3.id = "noinfobox3";
});
attackButton.addEventListener("mouseup", function function1() {
attackButton.style.color = "lightgreen";
});
attackButton.addEventListener("mousedown", function function1() {
consolelog.innerHTML = "What type of ship would you like to attack?<br><br>Light ships have a lower payout, but you risk less damage to your ship. Attacking cruisers is riskier, and Space Stations is the riskiest, but the payout is higher.<br><br>Visit the Machine Room for ARMOR upgrades to sustain less damage, and WEAPONS upgrades for increased amounts of SHIP FUEL, SEEDS and CREDITS.<br>NOTE: Your SHIP HP cannot drop to zero or you'll die in space.";
});


attack1Button.addEventListener("mouseover", function function1() {
attack1Button.style.color = "lightgreen";
consolelog.innerHTML = "Low risk of damage (up to 20HP).<br><br>Lower the risk of damage with Armor upgrades, and heighten the payoff with Weapons upgrades in the Machine Room."
});
attack1Button.addEventListener("mouseout", function function1() {
attack1Button.style.color = "white";
});


attack1Button.addEventListener("mousedown", function function1() {

//WEAPONS6
if (document.getElementById("Weapons6")) {
if (document.getElementById("Armor1")) {
attack1Button.style.color = "purple";
let Damage20 = Math.floor(Math.random() * 20);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage20 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal60 + " credits.";
shipHealthLeft -= Damage20;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    

seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal60;
creditsAmount.innerHTML = creditsStart;
}};

if (document.getElementById("Armor2")) {
attack1Button.style.color = "purple";
let Damage19 = Math.floor(Math.random() * 19);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage19 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal60 + " credits.";
shipHealthLeft -= Damage19;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal60;
creditsAmount.innerHTML = creditsStart;
}};

if (document.getElementById("Armor3")) {
attack1Button.style.color = "purple";
let Damage18 = Math.floor(Math.random() * 18);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage18 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal60 + " credits.";
shipHealthLeft -= Damage18;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal60;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor4")) {
attack1Button.style.color = "purple";
let Damage17 = Math.floor(Math.random() * 17);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage17 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal60 + " credits.";
shipHealthLeft -= Damage17;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal60;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor5")) {
attack1Button.style.color = "purple";
let Damage16 = Math.floor(Math.random() * 16);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage16 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal60 + " credits.";
shipHealthLeft -= Damage16;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal60;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor6")) {
attack1Button.style.color = "purple";
let Damage15 = Math.floor(Math.random() * 15);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage15 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal60 + " credits.";
shipHealthLeft -= Damage15;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal60;
creditsAmount.innerHTML = creditsStart;
}}


}

//WEAPONS5

if (document.getElementById("Weapons5")) {
if (document.getElementById("Armor1")) {
attack1Button.style.color = "purple";
let Damage20 = Math.floor(Math.random() * 20);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage20 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal55 + " credits.";
shipHealthLeft -= Damage20;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal55;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor2")) {
attack1Button.style.color = "purple";
let Damage19 = Math.floor(Math.random() * 19);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage19 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal55 + " credits.";
shipHealthLeft -= Damage19;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal55;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor3")) {
attack1Button.style.color = "purple";
let Damage18 = Math.floor(Math.random() * 18);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage18 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal55 + " credits.";
shipHealthLeft -= Damage18;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal55;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor4")) {
attack1Button.style.color = "purple";
let Damage17 = Math.floor(Math.random() * 17);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage17 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal55 + " credits.";
shipHealthLeft -= Damage17;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal55;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor5")) {
attack1Button.style.color = "purple";
let Damage16 = Math.floor(Math.random() * 16);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage16 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal55 + " credits.";
shipHealthLeft -= Damage16;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal55;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor6")) {
attack1Button.style.color = "purple";
let Damage15 = Math.floor(Math.random() * 15);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage15 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal55 + " credits.";
shipHealthLeft -= Damage15;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal55;
creditsAmount.innerHTML = creditsStart;

}
}


}



if (document.getElementById("Weapons4")) {
if (document.getElementById("Armor1")) {
attack1Button.style.color = "purple";
let Damage20 = Math.floor(Math.random() * 20);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage20 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal50 + " credits.";
shipHealthLeft -= Damage20;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal50;
creditsAmount.innerHTML = creditsStart;

}
}
if (document.getElementById("Armor2")) {
attack1Button.style.color = "purple";
let Damage19 = Math.floor(Math.random() * 19);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage19 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal50 + " credits.";
shipHealthLeft -= Damage19;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal50;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor3")) {
attack1Button.style.color = "purple";
let Damage18 = Math.floor(Math.random() * 18);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage18 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal50 + " credits.";
shipHealthLeft -= Damage18;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal50;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor4")) {
attack1Button.style.color = "purple";
let Damage17 = Math.floor(Math.random() * 17);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage17 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal50 + " credits.";
shipHealthLeft -= Damage17;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal50;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor5")) {
attack1Button.style.color = "purple";
let Damage16 = Math.floor(Math.random() * 16);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage16 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal50 + " credits.";
shipHealthLeft -= Damage16;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal50;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor6")) {
attack1Button.style.color = "purple";
let Damage15 = Math.floor(Math.random() * 15);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage15 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal50 + " credits.";
shipHealthLeft -= Damage15;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal50;
creditsAmount.innerHTML = creditsStart;

}
}
}


if (document.getElementById("Weapons3")) {
if (document.getElementById("Armor1")) {
attack1Button.style.color = "purple";
let Damage20 = Math.floor(Math.random() * 20);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage20 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal45 + " credits.";
shipHealthLeft -= Damage20;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal45;
creditsAmount.innerHTML = creditsStart;

}
}
if (document.getElementById("Armor2")) {
attack1Button.style.color = "purple";
let Damage19 = Math.floor(Math.random() * 19);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage19 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal45 + " credits.";
shipHealthLeft -= Damage19;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal45;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor3")) {
attack1Button.style.color = "purple";
let Damage18 = Math.floor(Math.random() * 18);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage18 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal45 + " credits.";
shipHealthLeft -= Damage18;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
if ((shipFuelLeft + Steal35) > 0) {  
shipFuelLeft += Steal35;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal35) >= 1000) {
shipFuelLeft = 1000;
shipFuel.innerHTML = shipFuelLeft;
}}
if (document.getElementById("DoubleFuelOff")) {
if ((shipFuelLeft + Steal35) >= 500) {
shipFuelLeft = 500;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal35) < 500) {  
shipFuelLeft += Steal35;
shipFuel.innerHTML = shipFuelLeft;
}
}

seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal45;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor4")) {
attack1Button.style.color = "purple";
let Damage17 = Math.floor(Math.random() * 17);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage17 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal45 + " credits.";
shipHealthLeft -= Damage17;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
if ((shipFuelLeft + Steal35) > 0) {  
shipFuelLeft += Steal35;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal35) >= 1000) {
shipFuelLeft = 1000;
shipFuel.innerHTML = shipFuelLeft;
}}
if (document.getElementById("DoubleFuelOff")) {
if ((shipFuelLeft + Steal35) >= 500) {
shipFuelLeft = 500;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal35) < 500) {  
shipFuelLeft += Steal35;
shipFuel.innerHTML = shipFuelLeft;
}
}

seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal45;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor5")) {
attack1Button.style.color = "purple";
let Damage16 = Math.floor(Math.random() * 16);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage16 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal45 + " credits.";
shipHealthLeft -= Damage16;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
if ((shipFuelLeft + Steal35) > 0) {  
shipFuelLeft += Steal35;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal35) >= 1000) {
shipFuelLeft = 1000;
shipFuel.innerHTML = shipFuelLeft;
}}
if (document.getElementById("DoubleFuelOff")) {
if ((shipFuelLeft + Steal35) >= 500) {
shipFuelLeft = 500;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal35) < 500) {  
shipFuelLeft += Steal35;
shipFuel.innerHTML = shipFuelLeft;
}
}

seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal45;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor6")) {
attack1Button.style.color = "purple";
let Damage15 = Math.floor(Math.random() * 15);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage15 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal45 + " credits.";
shipHealthLeft -= Damage15;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal45;
creditsAmount.innerHTML = creditsStart;

}
}

}



if (document.getElementById("Weapons2")) {
if (document.getElementById("Armor1")) {
attack1Button.style.color = "purple";
let Damage20 = Math.floor(Math.random() * 20);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage20 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal40 + " credits.";
shipHealthLeft -= Damage20;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal40;
creditsAmount.innerHTML = creditsStart;

}
}
if (document.getElementById("Armor2")) {
attack1Button.style.color = "purple";
let Damage19 = Math.floor(Math.random() * 19);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage19 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal40 + " credits.";
shipHealthLeft -= Damage19;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal40;
creditsAmount.innerHTML = creditsStart;

}
}
if (document.getElementById("Armor3")) {
attack1Button.style.color = "purple";
let Damage18 = Math.floor(Math.random() * 18);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage18 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal40 + " credits.";
shipHealthLeft -= Damage18;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal40;
creditsAmount.innerHTML = creditsStart;

}
}
if (document.getElementById("Armor4")) {
attack1Button.style.color = "purple";
let Damage17 = Math.floor(Math.random() * 17);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage17 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal40 + " credits.";
shipHealthLeft -= Damage17;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal40;
creditsAmount.innerHTML = creditsStart;

}
}
if (document.getElementById("Armor5")) {
attack1Button.style.color = "purple";
let Damage16 = Math.floor(Math.random() * 16);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage16 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal40 + " credits.";
shipHealthLeft -= Damage16;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal40;
creditsAmount.innerHTML = creditsStart;

}
}
if (document.getElementById("Armor6")) {
attack1Button.style.color = "purple";
let Damage15 = Math.floor(Math.random() * 15);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage15 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal40 + " credits.";
shipHealthLeft -= Damage15;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal40;
creditsAmount.innerHTML = creditsStart;

}
}

}


if (document.getElementById("Weapons1")) {
if (document.getElementById("Armor1")) {
attack1Button.style.color = "purple";
let Damage20 = Math.floor(Math.random() * 20);
let Steal25 = Math.floor(Math.random() * 25);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage20 + " damage, but you won the battle.<br><br>You stole " + Steal25 + " fuel, " + Steal30 + " seeds, and " + Steal35 + " credits.";
shipHealthLeft -= Damage20;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal25) > 0) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal25) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) < 500) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal30;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal35;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor2")) {
attack1Button.style.color = "purple";
let Damage19 = Math.floor(Math.random() * 19);
let Steal25 = Math.floor(Math.random() * 25);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage19 + " damage, but you won the battle.<br><br>You stole " + Steal25 + " fuel, " + Steal30 + " seeds, and " + Steal35 + " credits.";
shipHealthLeft -= Damage19;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal25) > 0) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal25) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) < 500) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal30;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal35;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor3")) {
attack1Button.style.color = "purple";
let Damage18 = Math.floor(Math.random() * 18);
let Steal25 = Math.floor(Math.random() * 25);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage18 + " damage, but you won the battle.<br><br>You stole " + Steal25 + " fuel, " + Steal30 + " seeds, and " + Steal35 + " credits.";
shipHealthLeft -= Damage18;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal25) > 0) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal25) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) < 500) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal30;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal35;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor4")) {
attack1Button.style.color = "purple";
let Damage17 = Math.floor(Math.random() * 17);
let Steal25 = Math.floor(Math.random() * 25);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage17 + " damage, but you won the battle.<br><br>You stole " + Steal25 + " fuel, " + Steal30 + " seeds, and " + Steal35 + " credits.";
shipHealthLeft -= Damage17;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal25) > 0) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal25) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) < 500) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal30;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal35;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor5")) {
attack1Button.style.color = "purple";
let Damage16 = Math.floor(Math.random() * 16);
let Steal25 = Math.floor(Math.random() * 25);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage16 + " damage, but you won the battle.<br><br>You stole " + Steal25 + " fuel, " + Steal30 + " seeds, and " + Steal35 + " credits.";
shipHealthLeft -= Damage16;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal25) > 0) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal25) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) < 500) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal30;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal35;
creditsAmount.innerHTML = creditsStart;

}
}

if (document.getElementById("Armor6")) {
attack1Button.style.color = "purple";
let Damage15 = Math.floor(Math.random() * 15);
let Steal25 = Math.floor(Math.random() * 25);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
consolelog.innerHTML = "You attacked a Light Ship.<br><br>It gave you " + Damage15 + " damage, but you won the battle.<br><br>You stole " + Steal25 + " fuel, " + Steal30 + " seeds, and " + Steal35 + " credits.";
shipHealthLeft -= Damage15;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} if (shipHealthLeft > 0) {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal25) > 0) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal25) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal25) < 500) {  
    shipFuelLeft += Steal25;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal30;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal35;
creditsAmount.innerHTML = creditsStart;

}
}

}

});



attack1Button.addEventListener("mouseup", function function1() {
attack1Button.style.color = "lightgreen";
});



attack2Button.addEventListener("mouseover", function function1() {
attack2Button.style.color = "orange";
consolelog.innerHTML = "Medium risk of damage (up to 50HP).<br><br>Lower the risk of damage with Armor upgrades, and heighten the payoff with Weapons upgrades in the Machine Room.";
});
attack2Button.addEventListener("mouseout", function function1() {
attack2Button.style.color = "white";
});

attack2Button.addEventListener("mousedown", function function1() {

if (document.getElementById("Weapons6")) {  
if (document.getElementById("Armor1")) {
attack2Button.style.color = "purple";
let Damage50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage50 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage50;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor2")) {
attack2Button.style.color = "purple";
let Damage48 = Math.floor(Math.random() * 48);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage48 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage48;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor3")) {
attack2Button.style.color = "purple";
let Damage46 = Math.floor(Math.random() * 46);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage46 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage46;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor4")) {
attack2Button.style.color = "purple";
let Damage44 = Math.floor(Math.random() * 44);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage44 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage44;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor5")) {
attack2Button.style.color = "purple";
let Damage42 = Math.floor(Math.random() * 42);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage42 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage42;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor6")) {
attack2Button.style.color = "purple";
let Damage40 = Math.floor(Math.random() * 40);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage40 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage40;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {  
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;}
}
}    


if (document.getElementById("Weapons5")) {   
if (document.getElementById("Armor1")) {
attack2Button.style.color = "purple";
let Damage50 = Math.floor(Math.random() * 50);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal450 = Math.floor(Math.random() * 450);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage50 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal450 + " credits.";
shipHealthLeft -= Damage50;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal450;
creditsAmount.innerHTML = creditsStart;}
}

if (document.getElementById("Armor2")) {
attack2Button.style.color = "purple";
let Damage48 = Math.floor(Math.random() * 48);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal450 = Math.floor(Math.random() * 450);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage48 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal450 + " credits.";
shipHealthLeft -= Damage48;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal450;
creditsAmount.innerHTML = creditsStart;}
}

if (document.getElementById("Armor3")) {
attack2Button.style.color = "purple";
let Damage46 = Math.floor(Math.random() * 46);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal450 = Math.floor(Math.random() * 450);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage46 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal450 + " credits.";
shipHealthLeft -= Damage46;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal450;
creditsAmount.innerHTML = creditsStart;}
}

if (document.getElementById("Armor4")) {
attack2Button.style.color = "purple";
let Damage44 = Math.floor(Math.random() * 44);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal450 = Math.floor(Math.random() * 450);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage44 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal450 + " credits.";
shipHealthLeft -= Damage44;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal450;
creditsAmount.innerHTML = creditsStart;}
}

if (document.getElementById("Armor5")) {
attack2Button.style.color = "purple";
let Damage42 = Math.floor(Math.random() * 42);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal450 = Math.floor(Math.random() * 450);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage42 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal450 + " credits.";
shipHealthLeft -= Damage42;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal450;
creditsAmount.innerHTML = creditsStart;}
}

if (document.getElementById("Armor6")) {
attack2Button.style.color = "purple";
let Damage40 = Math.floor(Math.random() * 40);
let Steal50 = Math.floor(Math.random() * 50);
let Steal55 = Math.floor(Math.random() * 55);
let Steal450 = Math.floor(Math.random() * 450);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage40 + " damage, but you won the battle.<br><br>You stole " + Steal50 + " fuel, " + Steal55 + " seeds, and " + Steal450 + " credits.";
shipHealthLeft -= Damage40;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal50) > 0) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal50) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal50) < 500) {  
    shipFuelLeft += Steal50;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal55;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal450;
creditsAmount.innerHTML = creditsStart;}
}



}


if (document.getElementById("Weapons4")) {  
if (document.getElementById("Armor1")) {
attack2Button.style.color = "purple";
let Damage50 = Math.floor(Math.random() * 50);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal400 = Math.floor(Math.random() * 400);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage50 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal400 + " credits.";
shipHealthLeft -= Damage50;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal400;
creditsAmount.innerHTML = creditsStart;}
}         if (document.getElementById("Armor2")) {
attack2Button.style.color = "purple";
let Damage48 = Math.floor(Math.random() * 48);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal400 = Math.floor(Math.random() * 400);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage48 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal400 + " credits.";
shipHealthLeft -= Damage48;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal400;
creditsAmount.innerHTML = creditsStart;}
}  
if (document.getElementById("Armor3")) {
attack2Button.style.color = "purple";
let Damage46 = Math.floor(Math.random() * 46);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal400 = Math.floor(Math.random() * 400);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage46 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal400 + " credits.";
shipHealthLeft -= Damage46;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal400;
creditsAmount.innerHTML = creditsStart;}
}  
if (document.getElementById("Armor4")) {
attack2Button.style.color = "purple";
let Damage44 = Math.floor(Math.random() * 44);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal400 = Math.floor(Math.random() * 400);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage44 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal400 + " credits.";
shipHealthLeft -= Damage44;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal400;
creditsAmount.innerHTML = creditsStart;}
}  
if (document.getElementById("Armor5")) {
attack2Button.style.color = "purple";
let Damage42 = Math.floor(Math.random() * 42);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal400 = Math.floor(Math.random() * 400);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage42 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal400 + " credits.";
shipHealthLeft -= Damage42;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal400;
creditsAmount.innerHTML = creditsStart;}
}  
if (document.getElementById("Armor6")) {
attack2Button.style.color = "purple";
let Damage40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal50 = Math.floor(Math.random() * 50);
let Steal400 = Math.floor(Math.random() * 400);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage40 + " damage, but you won the battle.<br><br>You stole " + Steal45 + " fuel, " + Steal50 + " seeds, and " + Steal400 + " credits.";
shipHealthLeft -= Damage40;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal45) > 0) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal45) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal45) < 500) {  
    shipFuelLeft += Steal45;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal50;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal400;
creditsAmount.innerHTML = creditsStart;}
}  


}


if (document.getElementById("Weapons3")) {   
if (document.getElementById("Armor1")) {
attack2Button.style.color = "purple";
let Damage50 = Math.floor(Math.random() * 50);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal350 = Math.floor(Math.random() * 350);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage50 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal350 + " credits.";    shipHealthLeft -= Damage50;
shipHealthLeft -= Damage50;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal350;
creditsAmount.innerHTML = creditsStart;}
}     
if (document.getElementById("Armor2")) {
attack2Button.style.color = "purple";
let Damage48 = Math.floor(Math.random() * 48);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal350 = Math.floor(Math.random() * 350);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage48 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal350 + " credits.";    shipHealthLeft -= Damage50;
shipHealthLeft -= Damage48;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal350;
creditsAmount.innerHTML = creditsStart;}
} 
if (document.getElementById("Armor3")) {
attack2Button.style.color = "purple";
let Damage46 = Math.floor(Math.random() * 46);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal350 = Math.floor(Math.random() * 350);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage46 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal350 + " credits.";    shipHealthLeft -= Damage50;
shipHealthLeft -= Damage46;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal350;
creditsAmount.innerHTML = creditsStart;}
} 
if (document.getElementById("Armor4")) {
attack2Button.style.color = "purple";
let Damage44 = Math.floor(Math.random() * 44);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal350 = Math.floor(Math.random() * 350);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage44 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal350 + " credits.";    shipHealthLeft -= Damage50;
shipHealthLeft -= Damage44;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal350;
creditsAmount.innerHTML = creditsStart;}
} 
if (document.getElementById("Armor5")) {
attack2Button.style.color = "purple";
let Damage42 = Math.floor(Math.random() * 42);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal350 = Math.floor(Math.random() * 350);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage42 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal350 + " credits.";    shipHealthLeft -= Damage50;
shipHealthLeft -= Damage42;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal350;
creditsAmount.innerHTML = creditsStart;}
} 
if (document.getElementById("Armor6")) {
attack2Button.style.color = "purple";
let Damage40 = Math.floor(Math.random() * 40);
let Steal40 = Math.floor(Math.random() * 40);
let Steal45 = Math.floor(Math.random() * 45);
let Steal350 = Math.floor(Math.random() * 350);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage40 + " damage, but you won the battle.<br><br>You stole " + Steal40 + " fuel, " + Steal45 + " seeds, and " + Steal350 + " credits.";    shipHealthLeft -= Damage50;
shipHealthLeft -= Damage40;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal45;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal350;
creditsAmount.innerHTML = creditsStart;}
} 
}


if (document.getElementById("Weapons2")) {  
if (document.getElementById("Armor1")) { 
attack2Button.style.color = "purple";
let Damage50 = Math.floor(Math.random() * 50);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal300 = Math.floor(Math.random() * 300);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage50 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal300 + " credits.";
shipHealthLeft -= Damage50;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal40) > 0) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal40) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal40) < 500) {  
    shipFuelLeft += Steal40;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal300;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor2")) { 
attack2Button.style.color = "purple";
let Damage48 = Math.floor(Math.random() * 48);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal300 = Math.floor(Math.random() * 300);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage48 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal300 + " credits.";
shipHealthLeft -= Damage48;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal300;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor3")) { 
attack2Button.style.color = "purple";
let Damage46 = Math.floor(Math.random() * 46);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal300 = Math.floor(Math.random() * 300);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage46 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal300 + " credits.";
shipHealthLeft -= Damage46;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal300;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor4")) { 
attack2Button.style.color = "purple";
let Damage44 = Math.floor(Math.random() * 44);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal300 = Math.floor(Math.random() * 300);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage44 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal300 + " credits.";
shipHealthLeft -= Damage44;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal300;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor5")) { 
attack2Button.style.color = "purple";
let Damage42 = Math.floor(Math.random() * 42);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal300 = Math.floor(Math.random() * 300);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage42 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal300 + " credits.";
shipHealthLeft -= Damage42;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal300;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor6")) { 
attack2Button.style.color = "purple";
let Damage40 = Math.floor(Math.random() * 40);
let Steal35 = Math.floor(Math.random() * 35);
let Steal40 = Math.floor(Math.random() * 40);
let Steal300 = Math.floor(Math.random() * 300);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage40 + " damage, but you won the battle.<br><br>You stole " + Steal35 + " fuel, " + Steal40 + " seeds, and " + Steal300 + " credits.";
shipHealthLeft -= Damage40;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal35) > 0) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal35) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal35) < 500) {  
    shipFuelLeft += Steal35;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal40;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal300;
creditsAmount.innerHTML = creditsStart;}
}


}

if (document.getElementById("Weapons1")) { 
if (document.getElementById("Armor1"))  {
attack2Button.style.color = "purple";
let Damage50 = Math.floor(Math.random() * 50);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal250 = Math.floor(Math.random() * 250);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage50 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal250 + " credits.";
shipHealthLeft -= Damage50;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal250;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor2"))  {
attack2Button.style.color = "purple";
let Damage48 = Math.floor(Math.random() * 48);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal250 = Math.floor(Math.random() * 250);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage48 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal250 + " credits.";
shipHealthLeft -= Damage48;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal250;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor3"))  {
attack2Button.style.color = "purple";
let Damage46 = Math.floor(Math.random() * 46);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal250 = Math.floor(Math.random() * 250);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage46 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal250 + " credits.";
shipHealthLeft -= Damage46;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal250;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor4"))  {
attack2Button.style.color = "purple";
let Damage44 = Math.floor(Math.random() * 44);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal250 = Math.floor(Math.random() * 250);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage44 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal250 + " credits.";
shipHealthLeft -= Damage44;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal250;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor5"))  {
attack2Button.style.color = "purple";
let Damage42 = Math.floor(Math.random() * 42);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal250 = Math.floor(Math.random() * 250);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage42 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal250 + " credits.";
shipHealthLeft -= Damage42;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal250;
creditsAmount.innerHTML = creditsStart;}
}
if (document.getElementById("Armor6"))  {
attack2Button.style.color = "purple";
let Damage40 = Math.floor(Math.random() * 40);
let Steal30 = Math.floor(Math.random() * 30);
let Steal35 = Math.floor(Math.random() * 35);
let Steal250 = Math.floor(Math.random() * 250);
consolelog.innerHTML = "You attacked a Cruiser.<br>It gave you " + Damage40 + " damage, but you won the battle.<br><br>You stole " + Steal30 + " fuel, " + Steal35 + " seeds, and " + Steal250 + " credits.";
shipHealthLeft -= Damage40;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal30) > 0) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal30) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal30) < 500) {  
    shipFuelLeft += Steal30;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal35;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal250;
creditsAmount.innerHTML = creditsStart;}
}


}


});

attack2Button.addEventListener("mouseup", function function1() {
attack2Button.style.color = "red";
});

attack3Button.addEventListener("mouseover", function function1() {
attack3Button.style.color = "red";
consolelog.innerHTML = "High risk of damage (up to 80HP).<br><br>Lower the risk of damage with Armor upgrades, and heighten the payoff with Weapons upgrades in the Machine Room"
});
attack3Button.addEventListener("mouseout", function function1() {
attack3Button.style.color = "white";
});

attack3Button.addEventListener("mousedown", function function1() {

if (document.getElementById("Weapons6")) {   
if (document.getElementById("Armor1")) { 
attack3Button.style.color = "purple";
let Damage80 = Math.floor(Math.random() * 80);
let Steal80 = Math.floor(Math.random() * 80);
let Steal85 = Math.floor(Math.random() * 85);
let Steal750 = Math.floor(Math.random() * 750);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage80 + " damage, but you won the battle.<br><br>You stole " + Steal80 + " fuel, " + Steal85 + " seeds, and " + Steal750 + " credits.";
shipHealthLeft -= Damage80;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal80) > 0) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal80) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) < 500) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal85;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal750;
creditsAmount.innerHTML = creditsStart;

}}
if (document.getElementById("Armor2")) { 
attack3Button.style.color = "purple";
let Damage78 = Math.floor(Math.random() * 78);
let Steal80 = Math.floor(Math.random() * 80);
let Steal85 = Math.floor(Math.random() * 85);
let Steal750 = Math.floor(Math.random() * 750);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage78 + " damage, but you won the battle.<br><br>You stole " + Steal80 + " fuel, " + Steal85 + " seeds, and " + Steal750 + " credits.";
shipHealthLeft -= Damage78;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal80) > 0) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal80) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) < 500) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal85;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal750;
creditsAmount.innerHTML = creditsStart;

}}

if (document.getElementById("Armor3")) { 
attack3Button.style.color = "purple";
let Damage76 = Math.floor(Math.random() * 76);
let Steal80 = Math.floor(Math.random() * 80);
let Steal85 = Math.floor(Math.random() * 85);
let Steal750 = Math.floor(Math.random() * 750);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage76 + " damage, but you won the battle.<br><br>You stole " + Steal80 + " fuel, " + Steal85 + " seeds, and " + Steal750 + " credits.";
shipHealthLeft -= Damage76;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal80) > 0) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal80) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) < 500) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal85;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal750;
creditsAmount.innerHTML = creditsStart;

}}

if (document.getElementById("Armor4")) { 
attack3Button.style.color = "purple";
let Damage74 = Math.floor(Math.random() * 74);
let Steal80 = Math.floor(Math.random() * 80);
let Steal85 = Math.floor(Math.random() * 85);
let Steal750 = Math.floor(Math.random() * 750);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage74 + " damage, but you won the battle.<br><br>You stole " + Steal80 + " fuel, " + Steal85 + " seeds, and " + Steal750 + " credits.";
shipHealthLeft -= Damage74;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal80) > 0) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal80) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) < 500) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal85;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal750;
creditsAmount.innerHTML = creditsStart;

}}

if (document.getElementById("Armor5")) { 
attack3Button.style.color = "purple";
let Damage72 = Math.floor(Math.random() * 72);
let Steal80 = Math.floor(Math.random() * 80);
let Steal85 = Math.floor(Math.random() * 85);
let Steal750 = Math.floor(Math.random() * 750);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage72 + " damage, but you won the battle.<br><br>You stole " + Steal80 + " fuel, " + Steal85 + " seeds, and " + Steal750 + " credits.";
shipHealthLeft -= Damage72;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal80) > 0) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal80) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) < 500) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal85;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal750;
creditsAmount.innerHTML = creditsStart;

}}

if (document.getElementById("Armor6")) { 
attack3Button.style.color = "purple";
let Damage70 = Math.floor(Math.random() * 70);
let Steal80 = Math.floor(Math.random() * 80);
let Steal85 = Math.floor(Math.random() * 85);
let Steal750 = Math.floor(Math.random() * 750);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage70 + " damage, but you won the battle.<br><br>You stole " + Steal80 + " fuel, " + Steal85 + " seeds, and " + Steal750 + " credits.";
shipHealthLeft -= Damage70;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal80) > 0) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal80) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal80) < 500) {  
    shipFuelLeft += Steal80;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal85;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal750;
creditsAmount.innerHTML = creditsStart;

}}

}


if (document.getElementById("Weapons5")) {   
if (document.getElementById("Armor1")) { 
attack3Button.style.color = "purple";
let Damage80 = Math.floor(Math.random() * 80);
let Steal75 = Math.floor(Math.random() * 75);
let Steal80 = Math.floor(Math.random() * 80);
let Steal700 = Math.floor(Math.random() * 700);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage80 + " damage, but you won the battle.<br><br>You stole " + Steal75 + " fuel, " + Steal80 + " seeds, and " + Steal700 + " credits.";
shipHealthLeft -= Damage80;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal75) > 0) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal75) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) < 500) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal80;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal700;
creditsAmount.innerHTML = creditsStart;
}}   

if (document.getElementById("Armor2")) { 
attack3Button.style.color = "purple";
let Damage78 = Math.floor(Math.random() * 78);
let Steal75 = Math.floor(Math.random() * 75);
let Steal80 = Math.floor(Math.random() * 80);
let Steal700 = Math.floor(Math.random() * 700);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage78 + " damage, but you won the battle.<br><br>You stole " + Steal75 + " fuel, " + Steal80 + " seeds, and " + Steal700 + " credits.";
shipHealthLeft -= Damage78;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal75) > 0) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal75) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) < 500) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal80;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal700;
creditsAmount.innerHTML = creditsStart;
}}   

if (document.getElementById("Armor3")) { 
attack3Button.style.color = "purple";
let Damage76 = Math.floor(Math.random() * 76);
let Steal75 = Math.floor(Math.random() * 75);
let Steal80 = Math.floor(Math.random() * 80);
let Steal700 = Math.floor(Math.random() * 700);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage76 + " damage, but you won the battle.<br><br>You stole " + Steal75 + " fuel, " + Steal80 + " seeds, and " + Steal700 + " credits.";
shipHealthLeft -= Damage76;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal75) > 0) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal75) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) < 500) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal80;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal700;
creditsAmount.innerHTML = creditsStart;
}}   

if (document.getElementById("Armor4")) { 
attack3Button.style.color = "purple";
let Damage74 = Math.floor(Math.random() * 74);
let Steal75 = Math.floor(Math.random() * 75);
let Steal80 = Math.floor(Math.random() * 80);
let Steal700 = Math.floor(Math.random() * 700);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage74 + " damage, but you won the battle.<br><br>You stole " + Steal75 + " fuel, " + Steal80 + " seeds, and " + Steal700 + " credits.";
shipHealthLeft -= Damage74;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal75) > 0) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal75) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) < 500) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal80;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal700;
creditsAmount.innerHTML = creditsStart;
}}   

if (document.getElementById("Armor5")) { 
attack3Button.style.color = "purple";
let Damage72 = Math.floor(Math.random() * 72);
let Steal75 = Math.floor(Math.random() * 75);
let Steal80 = Math.floor(Math.random() * 80);
let Steal700 = Math.floor(Math.random() * 700);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage72 + " damage, but you won the battle.<br><br>You stole " + Steal75 + " fuel, " + Steal80 + " seeds, and " + Steal700 + " credits.";
shipHealthLeft -= Damage72;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal75) > 0) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal75) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) < 500) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal80;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal700;
creditsAmount.innerHTML = creditsStart;
}}   

if (document.getElementById("Armor6")) { 
attack3Button.style.color = "purple";
let Damage70 = Math.floor(Math.random() * 70);
let Steal75 = Math.floor(Math.random() * 75);
let Steal80 = Math.floor(Math.random() * 80);
let Steal700 = Math.floor(Math.random() * 700);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage70 + " damage, but you won the battle.<br><br>You stole " + Steal75 + " fuel, " + Steal80 + " seeds, and " + Steal700 + " credits.";
shipHealthLeft -= Damage70;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal75) > 0) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal75) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal75) < 500) {  
    shipFuelLeft += Steal75;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal80;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal700;
creditsAmount.innerHTML = creditsStart;
}}   

} 



if (document.getElementById("Weapons4")) { 
if (document.getElementById("Armor1"))   {
attack3Button.style.color = "purple";
let Damage80 = Math.floor(Math.random() * 80);
let Steal70 = Math.floor(Math.random() * 70);
let Steal75 = Math.floor(Math.random() * 75);
let Steal650 = Math.floor(Math.random() * 650);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage80 + " damage, but you won the battle.<br><br>You stole " + Steal70 + " fuel, " + Steal75 + " seeds, and " + Steal650 + " credits.";
shipHealthLeft -= Damage80;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal70) > 0) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal70) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) < 500) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal75;
seedAmount.innerHTML = seedTotal;
creditsStart += Steal650;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor2"))   {
attack3Button.style.color = "purple";
let Damage78 = Math.floor(Math.random() * 78);
let Steal70 = Math.floor(Math.random() * 70);
let Steal75 = Math.floor(Math.random() * 75);
let Steal650 = Math.floor(Math.random() * 650);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage78 + " damage, but you won the battle.<br><br>You stole " + Steal70 + " fuel, " + Steal75 + " seeds, and " + Steal650 + " credits.";
shipHealthLeft -= Damage78;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal70) > 0) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal70) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) < 500) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal75;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal650;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor3"))   {
attack3Button.style.color = "purple";
let Damage76 = Math.floor(Math.random() * 76);
let Steal70 = Math.floor(Math.random() * 70);
let Steal75 = Math.floor(Math.random() * 75);
let Steal650 = Math.floor(Math.random() * 650);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage76 + " damage, but you won the battle.<br><br>You stole " + Steal70 + " fuel, " + Steal75 + " seeds, and " + Steal650 + " credits.";
shipHealthLeft -= Damage76;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal70) > 0) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal70) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) < 500) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal75;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal650;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor4"))   {
attack3Button.style.color = "purple";
let Damage74 = Math.floor(Math.random() * 74);
let Steal70 = Math.floor(Math.random() * 70);
let Steal75 = Math.floor(Math.random() * 75);
let Steal650 = Math.floor(Math.random() * 650);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage74 + " damage, but you won the battle.<br><br>You stole " + Steal70 + " fuel, " + Steal75 + " seeds, and " + Steal650 + " credits.";
shipHealthLeft -= Damage74;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal70) > 0) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal70) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) < 500) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal75;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal650;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor5"))   {
attack3Button.style.color = "purple";
let Damage72 = Math.floor(Math.random() * 72);
let Steal70 = Math.floor(Math.random() * 70);
let Steal75 = Math.floor(Math.random() * 75);
let Steal650 = Math.floor(Math.random() * 650);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage72 + " damage, but you won the battle.<br><br>You stole " + Steal70 + " fuel, " + Steal75 + " seeds, and " + Steal650 + " credits.";
shipHealthLeft -= Damage72;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal70) > 0) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal70) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) < 500) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal75;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal650;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor6"))   {
attack3Button.style.color = "purple";
let Damage70 = Math.floor(Math.random() * 70);
let Steal70 = Math.floor(Math.random() * 70);
let Steal75 = Math.floor(Math.random() * 75);
let Steal650 = Math.floor(Math.random() * 650);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage70 + " damage, but you won the battle.<br><br>You stole " + Steal70 + " fuel, " + Steal75 + " seeds, and " + Steal650 + " credits.";
shipHealthLeft -= Damage70;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal70) > 0) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal70) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal70) < 500) {  
    shipFuelLeft += Steal70;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal75;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal650;
creditsAmount.innerHTML = creditsStart;
}}

}

if (document.getElementById("Weapons3")) {   
if (document.getElementById("Armor1")) {
attack3Button.style.color = "purple";
let Damage80 = Math.floor(Math.random() * 80);
let Steal65 = Math.floor(Math.random() * 65);
let Steal70 = Math.floor(Math.random() * 70);
let Steal600 = Math.floor(Math.random() * 600);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage80 + " damage, but you won the battle.<br><br>You stole " + Steal65 + " fuel, " + Steal70 + " seeds, and " + Steal600 + " credits.";
shipHealthLeft -= Damage80;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal65) > 0) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal65) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) < 500) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal70;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal600;
creditsAmount.innerHTML = creditsStart;
}}
if (document.getElementById("Armor2")) {
attack3Button.style.color = "purple";
let Damage78 = Math.floor(Math.random() * 78);
let Steal65 = Math.floor(Math.random() * 65);
let Steal70 = Math.floor(Math.random() * 70);
let Steal600 = Math.floor(Math.random() * 600);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage78 + " damage, but you won the battle.<br><br>You stole " + Steal65 + " fuel, " + Steal70 + " seeds, and " + Steal600 + " credits.";
shipHealthLeft -= Damage78;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal65) > 0) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal65) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) < 500) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal70;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal600;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor3")) {
attack3Button.style.color = "purple";
let Damage76 = Math.floor(Math.random() * 76);
let Steal65 = Math.floor(Math.random() * 65);
let Steal70 = Math.floor(Math.random() * 70);
let Steal600 = Math.floor(Math.random() * 600);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage76 + " damage, but you won the battle.<br><br>You stole " + Steal65 + " fuel, " + Steal70 + " seeds, and " + Steal600 + " credits.";
shipHealthLeft -= Damage76;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal65) > 0) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal65) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) < 500) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal70;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal600;
creditsAmount.innerHTML = creditsStart;
}}


if (document.getElementById("Armor4")) {
attack3Button.style.color = "purple";
let Damage74 = Math.floor(Math.random() * 74);
let Steal65 = Math.floor(Math.random() * 65);
let Steal70 = Math.floor(Math.random() * 70);
let Steal600 = Math.floor(Math.random() * 600);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage74 + " damage, but you won the battle.<br><br>You stole " + Steal65 + " fuel, " + Steal70 + " seeds, and " + Steal600 + " credits.";
shipHealthLeft -= Damage74;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal65) > 0) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal65) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) < 500) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal70;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal600;
creditsAmount.innerHTML = creditsStart;
}}


if (document.getElementById("Armor5")) {
attack3Button.style.color = "purple";
let Damage72 = Math.floor(Math.random() * 72);
let Steal65 = Math.floor(Math.random() * 65);
let Steal70 = Math.floor(Math.random() * 70);
let Steal600 = Math.floor(Math.random() * 600);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage72 + " damage, but you won the battle.<br><br>You stole " + Steal65 + " fuel, " + Steal70 + " seeds, and " + Steal600 + " credits.";
shipHealthLeft -= Damage72;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal65) > 0) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal65) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) < 500) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal70;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal600;
creditsAmount.innerHTML = creditsStart;
}}


if (document.getElementById("Armor6")) {
attack3Button.style.color = "purple";
let Damage70 = Math.floor(Math.random() * 70);
let Steal65 = Math.floor(Math.random() * 65);
let Steal70 = Math.floor(Math.random() * 70);
let Steal600 = Math.floor(Math.random() * 600);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage70 + " damage, but you won the battle.<br><br>You stole " + Steal65 + " fuel, " + Steal70 + " seeds, and " + Steal600 + " credits.";
shipHealthLeft -= Damage70;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal65) > 0) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal65) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal65) < 500) {  
    shipFuelLeft += Steal65;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal70;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal600;
creditsAmount.innerHTML = creditsStart;
}}



}
if (document.getElementById("Weapons2")) {   
if (document.getElementById("Armor1")) {
attack3Button.style.color = "purple";
let Damage80 = Math.floor(Math.random() * 80);
let Steal60 = Math.floor(Math.random() * 60);
let Steal65 = Math.floor(Math.random() * 65);
let Steal550 = Math.floor(Math.random() * 550);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage80 + " damage, but you won the battle.<br><br>You stole " + Steal60 + " fuel, " + Steal65 + " seeds, and " + Steal550 + " credits.";
shipHealthLeft -= Damage80;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal60) > 0) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal60) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) < 500) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal65;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal550;
creditsAmount.innerHTML = creditsStart;
}}
if (document.getElementById("Armor2")) {
attack3Button.style.color = "purple";
let Damage78 = Math.floor(Math.random() * 78);
let Steal60 = Math.floor(Math.random() * 60);
let Steal65 = Math.floor(Math.random() * 65);
let Steal550 = Math.floor(Math.random() * 550);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage78 + " damage, but you won the battle.<br><br>You stole " + Steal60 + " fuel, " + Steal65 + " seeds, and " + Steal550 + " credits.";
shipHealthLeft -= Damage78;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal60) > 0) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal60) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) < 500) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal65;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal550;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor3")) {
attack3Button.style.color = "purple";
let Damage76 = Math.floor(Math.random() * 76);
let Steal60 = Math.floor(Math.random() * 60);
let Steal65 = Math.floor(Math.random() * 65);
let Steal550 = Math.floor(Math.random() * 550);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage76 + " damage, but you won the battle.<br><br>You stole " + Steal60 + " fuel, " + Steal65 + " seeds, and " + Steal550 + " credits.";
shipHealthLeft -= Damage76;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal60) > 0) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal60) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) < 500) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal65;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal550;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor4")) {
attack3Button.style.color = "purple";
let Damage74 = Math.floor(Math.random() * 74);
let Steal60 = Math.floor(Math.random() * 60);
let Steal65 = Math.floor(Math.random() * 65);
let Steal550 = Math.floor(Math.random() * 550);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage74 + " damage, but you won the battle.<br><br>You stole " + Steal60 + " fuel, " + Steal65 + " seeds, and " + Steal550 + " credits.";
shipHealthLeft -= Damage74;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal60) > 0) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal60) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) < 500) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal65;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal550;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor5")) {
attack3Button.style.color = "purple";
let Damage72 = Math.floor(Math.random() * 72);
let Steal60 = Math.floor(Math.random() * 60);
let Steal65 = Math.floor(Math.random() * 65);
let Steal550 = Math.floor(Math.random() * 550);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage72 + " damage, but you won the battle.<br><br>You stole " + Steal60 + " fuel, " + Steal65 + " seeds, and " + Steal550 + " credits.";
shipHealthLeft -= Damage72;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal60) > 0) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal60) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) < 500) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal65;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal550;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor6")) {
attack3Button.style.color = "purple";
let Damage70 = Math.floor(Math.random() * 70);
let Steal60 = Math.floor(Math.random() * 60);
let Steal65 = Math.floor(Math.random() * 65);
let Steal550 = Math.floor(Math.random() * 550);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage70 + " damage, but you won the battle.<br><br>You stole " + Steal60 + " fuel, " + Steal65 + " seeds, and " + Steal550 + " credits.";
shipHealthLeft -= Damage70;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal60) > 0) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal60) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal60) < 500) {  
    shipFuelLeft += Steal60;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
    
seedTotal += Steal65;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal550;
creditsAmount.innerHTML = creditsStart;
}}

}

if (document.getElementById("Weapons1")) {   
if (document.getElementById("Armor1")) {
attack3Button.style.color = "purple";
let Damage80 = Math.floor(Math.random() * 80);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage80 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage80;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
if ((shipFuelLeft + Steal55) > 0) {   
shipFuelLeft += Steal55;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal55) >= 1000) {
shipFuelLeft = 1000;
shipFuel.innerHTML = shipFuelLeft;
}}
if (document.getElementById("DoubleFuelOff")) {
if ((shipFuelLeft + Steal55) >= 500) {
shipFuelLeft = 500;
shipFuel.innerHTML = shipFuelLeft;
}
if ((shipFuelLeft + Steal55) < 500) {   
shipFuelLeft += Steal55;
shipFuel.innerHTML = shipFuelLeft;
}
}
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;
}}
if (document.getElementById("Armor2")) {
attack3Button.style.color = "purple";
let Damage78 = Math.floor(Math.random() * 78);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage78 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage78;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor3")) {
attack3Button.style.color = "purple";
let Damage76 = Math.floor(Math.random() * 76);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage76 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage76;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor4")) {
attack3Button.style.color = "purple";
let Damage74 = Math.floor(Math.random() * 74);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage74 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage74;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor5")) {
attack3Button.style.color = "purple";
let Damage72 = Math.floor(Math.random() * 72);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage72 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage72;
if (shipHealthLeft <= 0) {
    shipHealth.innerHTML = 0;
    shipHealthLeft = 0;
    creditsAmount.innerHTML = 0;
    creditsStart = 0;
    seedAmount.innerHTML = 0;
    seedTotal = 0;
    shipFuel.innerHTML = 0;
    shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;
}}

if (document.getElementById("Armor6")) {
attack3Button.style.color = "purple";
let Damage70 = Math.floor(Math.random() * 70);
let Steal55 = Math.floor(Math.random() * 55);
let Steal60 = Math.floor(Math.random() * 60);
let Steal500 = Math.floor(Math.random() * 500);
consolelog.innerHTML = "You attacked a Space Station.<br>It gave you " + Damage70 + " damage, but you won the battle.<br><br>You stole " + Steal55 + " fuel, " + Steal60 + " seeds, and " + Steal500 + " credits.";
shipHealthLeft -= Damage70;
if (shipHealthLeft <= 0) {
shipHealth.innerHTML = 0;
shipHealthLeft = 0;
creditsAmount.innerHTML = 0;
creditsStart = 0;
seedAmount.innerHTML = 0;
seedTotal = 0;
shipFuel.innerHTML = 0;
shipFuelLeft = 0;
consolelog.innerHTML = "GAME OVER.<br><br>Thank you for playing EMOJI ASTRONAUT!";
document.getElementById("consolelog2a").id = "consolelog2";
} else {
shipHealth.innerHTML = shipHealthLeft;
if (document.getElementById("DoubleFuelOn")) {
    if ((shipFuelLeft + Steal55) > 0) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) >= 1000) {
    shipFuelLeft = 1000;
    shipFuel.innerHTML = shipFuelLeft;
    }}
    if (document.getElementById("DoubleFuelOff")) {
    if ((shipFuelLeft + Steal55) >= 500) {
    shipFuelLeft = 500;
    shipFuel.innerHTML = shipFuelLeft;
    }
    if ((shipFuelLeft + Steal55) < 500) {   
    shipFuelLeft += Steal55;
    shipFuel.innerHTML = shipFuelLeft;
    }
    }
seedTotal += Steal60;
seedAmount.innerHTML = seedTotal;

creditsStart += Steal500;
creditsAmount.innerHTML = creditsStart;
}}

}
}
);

attack3Button.addEventListener("mouseup", function function1() {
attack3Button.style.color = "red";
});

document.addEventListener('mousemove', function function1() {

    if (document.getElementById("spaceShipHealth")) {

        if ((document.getElementById("shipHealth").textContent) != 100) {
        document.getElementById("shipHealth").style.color = "white";
        document.getElementById("denominator2").style.color = "white";
    }    if ((document.getElementById("shipHealth").textContent) <= 20) {
            document.getElementById("shipHealth").style.color = "red";
            document.getElementById("denominator2").style.color = "red";
        }
    if ((document.getElementById("shipHealth").textContent) == 100) {
        document.getElementById("shipHealth").style.color = "lightgreen";
        document.getElementById("denominator2").style.color = "lightgreen";
    }}
    
    if (document.getElementById("spaceShipHealth2")) {
        if ((document.getElementById("shipHealth").textContent) != 120) {
        document.getElementById("shipHealth").style.color = "white";
        document.getElementById("denominator2").style.color = "white";
    }if ((document.getElementById("shipHealth").textContent) <= 20) {
        document.getElementById("shipHealth").style.color = "red";
        document.getElementById("denominator2").style.color = "red";
    }
    if ((document.getElementById("shipHealth").textContent) == 120) {
        document.getElementById("shipHealth").style.color = "lightgreen";
        document.getElementById("denominator2").style.color = "lightgreen";
    }}
    if (document.getElementById("spaceShipHealth3")) {
        if ((document.getElementById("shipHealth").textContent) != 140) {
        document.getElementById("shipHealth").style.color = "white";
        document.getElementById("denominator2").style.color = "white";
    }if ((document.getElementById("shipHealth").textContent) <= 20) {
        document.getElementById("shipHealth").style.color = "red";
        document.getElementById("denominator2").style.color = "red";
    }
    if ((document.getElementById("shipHealth").textContent) == 140) {
        document.getElementById("shipHealth").style.color = "lightgreen";
        document.getElementById("denominator2").style.color = "lightgreen";
    }}
    if (document.getElementById("spaceShipHealth4")) {
        if ((document.getElementById("shipHealth").textContent) != 160) {
        document.getElementById("shipHealth").style.color = "white";
        document.getElementById("denominator2").style.color = "white";
    }if ((document.getElementById("shipHealth").textContent) <= 20) {
        document.getElementById("shipHealth").style.color = "red";
        document.getElementById("denominator2").style.color = "red";
    }
    if ((document.getElementById("shipHealth").textContent) == 160) {
        document.getElementById("shipHealth").style.color = "lightgreen";
        document.getElementById("denominator2").style.color = "lightgreen";
    }}
    if (document.getElementById("spaceShipHealth5")) {
        if ((document.getElementById("shipHealth").textContent) != 180) {
        document.getElementById("shipHealth").style.color = "white";
        document.getElementById("denominator2").style.color = "white";
    }if ((document.getElementById("shipHealth").textContent) <= 20) {
        document.getElementById("shipHealth").style.color = "red";
        document.getElementById("denominator2").style.color = "red";
    }
    if ((document.getElementById("shipHealth").textContent) == 180) {
        document.getElementById("shipHealth").style.color = "lightgreen";
        document.getElementById("denominator2").style.color = "lightgreen";
    }}
    if (document.getElementById("spaceShipHealth6")) {
        if ((document.getElementById("shipHealth").textContent) != 200) {
        document.getElementById("shipHealth").style.color = "white";
        document.getElementById("denominator2").style.color = "white";
    }if ((document.getElementById("shipHealth").textContent) <= 20) {
        document.getElementById("shipHealth").style.color = "red";
        document.getElementById("denominator2").style.color = "red";
    }
    if ((document.getElementById("shipHealth").textContent) == 200) {
        document.getElementById("shipHealth").style.color = "lightgreen";
        document.getElementById("denominator2").style.color = "lightgreen";
    }}
})    



document.addEventListener('click', function function1() {

if (document.getElementById("spaceShipHealth")) {

    if ((document.getElementById("shipHealth").textContent) != 100) {
    document.getElementById("shipHealth").style.color = "white";
    document.getElementById("denominator2").style.color = "white";
}    if ((document.getElementById("shipHealth").textContent) <= 20) {
        document.getElementById("shipHealth").style.color = "red";
        document.getElementById("denominator2").style.color = "red";
    }
if ((document.getElementById("shipHealth").textContent) == 100) {
    document.getElementById("shipHealth").style.color = "lightgreen";
    document.getElementById("denominator2").style.color = "lightgreen";
}}

if (document.getElementById("spaceShipHealth2")) {
    if ((document.getElementById("shipHealth").textContent) != 120) {
    document.getElementById("shipHealth").style.color = "white";
    document.getElementById("denominator2").style.color = "white";
}if ((document.getElementById("shipHealth").textContent) <= 20) {
    document.getElementById("shipHealth").style.color = "red";
    document.getElementById("denominator2").style.color = "red";
}
if ((document.getElementById("shipHealth").textContent) == 120) {
    document.getElementById("shipHealth").style.color = "lightgreen";
    document.getElementById("denominator2").style.color = "lightgreen";
}}
if (document.getElementById("spaceShipHealth3")) {
    if ((document.getElementById("shipHealth").textContent) != 140) {
    document.getElementById("shipHealth").style.color = "white";
    document.getElementById("denominator2").style.color = "white";
}if ((document.getElementById("shipHealth").textContent) <= 20) {
    document.getElementById("shipHealth").style.color = "red";
    document.getElementById("denominator2").style.color = "red";
}
if ((document.getElementById("shipHealth").textContent) == 140) {
    document.getElementById("shipHealth").style.color = "lightgreen";
    document.getElementById("denominator2").style.color = "lightgreen";
}}
if (document.getElementById("spaceShipHealth4")) {
    if ((document.getElementById("shipHealth").textContent) != 160) {
    document.getElementById("shipHealth").style.color = "white";
    document.getElementById("denominator2").style.color = "white";
}if ((document.getElementById("shipHealth").textContent) <= 20) {
    document.getElementById("shipHealth").style.color = "red";
    document.getElementById("denominator2").style.color = "red";
}
if ((document.getElementById("shipHealth").textContent) == 160) {
    document.getElementById("shipHealth").style.color = "lightgreen";
    document.getElementById("denominator2").style.color = "lightgreen";
}}
if (document.getElementById("spaceShipHealth5")) {
    if ((document.getElementById("shipHealth").textContent) != 180) {
    document.getElementById("shipHealth").style.color = "white";
    document.getElementById("denominator2").style.color = "white";
}if ((document.getElementById("shipHealth").textContent) <= 20) {
    document.getElementById("shipHealth").style.color = "red";
    document.getElementById("denominator2").style.color = "red";
}
if ((document.getElementById("shipHealth").textContent) == 180) {
    document.getElementById("shipHealth").style.color = "lightgreen";
    document.getElementById("denominator2").style.color = "lightgreen";
}}
if (document.getElementById("spaceShipHealth6")) {
    if ((document.getElementById("shipHealth").textContent) != 200) {
    document.getElementById("shipHealth").style.color = "white";
    document.getElementById("denominator2").style.color = "white";
}if ((document.getElementById("shipHealth").textContent) <= 20) {
    document.getElementById("shipHealth").style.color = "red";
    document.getElementById("denominator2").style.color = "red";
}
if ((document.getElementById("shipHealth").textContent) == 200) {
    document.getElementById("shipHealth").style.color = "lightgreen";
    document.getElementById("denominator2").style.color = "lightgreen";
}}


if (document.getElementById("DoubleFuelOff")) {

if (document.getElementById("shipFuel").textContent == 500) {
    document.getElementById("shipFuel").style.color = "lightgreen";
    document.getElementById("denominator1").style.color = "lightgreen";
}
if (document.getElementById("shipFuel").textContent != 500) {
    document.getElementById("shipFuel").style.color = "white";
    document.getElementById("denominator1").style.color = "white";
}
}

if (document.getElementById("DoubleFuelOn")) {

    if (document.getElementById("shipFuel").textContent >= 1000) {
        document.getElementById("shipFuel").style.color = "lightgreen";
        document.getElementById("denominator1").style.color = "lightgreen";
    }
    if (document.getElementById("shipFuel").textContent < 1000) {
        document.getElementById("shipFuel").style.color = "white";
        document.getElementById("denominator1").style.color = "white";
    }
    }

})

addEventListener('load', function function1() {
    if ((document.getElementById("shipHealth").textContent) != 100) {
    document.getElementById("shipHealth").style.color = "white";
    document.getElementById("denominator2").style.color = "white";
}
if ((document.getElementById("shipHealth").textContent) == 100) {
    document.getElementById("shipHealth").style.color = "lightgreen";
    document.getElementById("denominator2").style.color = "lightgreen";
}
if (document.getElementById("shipFuel").textContent != 500) {
    document.getElementById("shipFuel").style.color = "white";
    document.getElementById("denominator1").style.color = "white";
}
if (document.getElementById("shipFuel").textContent == 500) {
    document.getElementById("shipFuel").style.color = "lightgreen";
    document.getElementById("denominator1").style.color = "lightgreen";
}

})

addEventListener('keypress', function function1(event) {
    if (((event.keypress) === "w") || ((event.keypress) === "a") || ((event.keypress) === "s") || ((event.keypress) === "d")) {

if (document.getElementById("shipFuel").textContent != 500) {
    document.getElementById("shipFuel").style.color = "white";
    document.getElementById("denominator1").style.color = "white";
}
if (document.getElementById("shipFuel").textContent == 500) {
    document.getElementById("shipFuel").style.color = "lightgreen";
    document.getElementById("denominator1").style.color = "lightgreen";
}

}})


function validate() {
let value = document.querySelector("unlockcode").value;
const regEx = /^\d+$/;
return regEx.test(value);
}