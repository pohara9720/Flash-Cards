// function Basic(front,back){
// 	this.front = front,
// 	this.back= back,
// 	console.log(front);
// 	console.log(back);

	
// }
var card = require("./cardConstructor.js");

var questArray = [];

var patrick = new card("Patrick", "O'Hara");

// console.log(card);

var q1 = card("Who skull did Mr Candy bring out to the dinner Table in Django?", "Ol Ben","https://blackcomicguy.files.wordpress.com/2013/02/djangounchained_620_101112.jpg");
var q2 = card("Who's house did Django and The dentist go to collect Djangos first Bounty?", "Big Daddy","http://static.tvtropes.org/pmwiki/pub/images/bennett_spencer_2718.jpg");
var q3 = card("When does Jules want the calvary to arrive?", "Directly","https://i.ytimg.com/vi/RMbAANfUJhI/hqdefault.jpg");
var q4 = card("What does Aldo the Apache want?", "His Scalps","http://s3.media.squarespace.com/production/465215/5307878/wp-content/uploads/2009/02/4.jpg");
var q5 = card("How doe Jules describe Kahuna Burgers food?","That is a tasty burger","http://metsmerizedonline.com/wp-content/uploads/2014/04/Jules-winnfield-tasty-burger.jpg");
var q6 = card("What should be done if a German wants to die for his country?", "Oblige Him","http://darecountynow.com/uploads/film_images/movie_stills/inglourious_basterds_25_630_pxlw.jpg");
var q7 = card("Which wallet belongs to Jules", "The one that says Bad Mother F@#cka","http://www.ranthollywood.com/wp-content/uploads/2015/02/168581305.jpg");
var q8 = card("Where does Candy send slaves to work until their backs give out?","Quinn Dicky Mining Company","https://i.ytimg.com/vi/URlB2eyKDAM/hqdefault.jpg");
var q9 = card("What does Django like?", "The way you die boy","https://s-media-cache-ak0.pinimg.com/736x/38/db/ce/38dbce93cb2514b410af4b03329f3f27.jpg");
var q10 = card("What business are the Inglorius Bastards in?","Nazi killin business","https://ae01.alicdn.com/kf/HTB1bXoGLVXXXXbmXFXXq6xXFXXXr/Lt-Aldo-The-Apache-Raine-Inglourious-Basterds-Brad-Pitt-Movie-Art-Huge-Print-Poster-TXHOME-D6163.jpg");

// console.log(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10);

questArray.push(q1);
questArray.push(q2);
questArray.push(q3);
questArray.push(q4);
questArray.push(q5);
questArray.push(q6);
questArray.push(q7);
questArray.push(q8);
questArray.push(q9);
questArray.push(q10);

console.log(questArray);

console.log("Question Array: " + questArray);
$("#flip").on("click", function(){
for ( var i=0; i<questArray.length;i++){
	$("#question").html(questArray[i].front);
	$("image").attr(questArray[i].image);

}
});









