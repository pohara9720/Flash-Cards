// function Basic(front,back){
// 	this.front = front,
// 	this.back= back,
// 	console.log(front);
// 	console.log(back);

	
// }

var card = require("./cardConstructor.js");

var patrick = new card("Patrick", "O'Hara");

console.log(card);

var q1 = card("Who skull did Mr Candy bring out to the dinner Table in Django?", "Ol Ben");
var q2 = card("Who's house did Django and The dentist go to collect Djangos first Bounty?", "Big Daddy");
var q3 = card("When does Jules want the calvary to arrive?", "Directly");
var q4 = card("What does Aldo the Apache want?", "His Scalps");
var q5 = card("How doe Jules describe Kahuna Burgers food?","That is a tasty burger");
var q6 = card("What should be done if a German wants to die for his country?", "Oblige Him");
var q7 = card("Which wallet belongs to Jules", "The one that says Bad Mother F@#cka");
var q8 = card("Where does Candy send slaves to work until their backs give out?","Quinn Dicky Mining Company");
var q9 = card("What does Django like?", "The way you die boy");
var q10 = card("What business are the Inglorius Bastards in?","Nazi killin business");

console.log(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10);

