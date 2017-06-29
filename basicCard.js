
var questArray = [];

var patrick = new Basic("Patrick", "O'Hara");

// console.log(carBasic
var q1 = Basic("Who skull did Mr Candy bring out to the dinner Table in Django?", "Ol Ben", "https://blackcomicguy.files.wordpress.com/2013/02/djangounchained_620_101112.jpg");
var q2 = Basic("Who's house did Django and The dentist go to collect Djangos first Bounty?", "Big Daddy", "http://static.tvtropes.org/pmwiki/pub/images/bennett_spencer_2718.jpg");
var q3 = Basic("When does Jules want the calvary to arrive?", "Directly", "https://i.ytimg.com/vi/RMbAANfUJhI/hqdefault.jpg");
var q4 = Basic("What does Aldo the Apache want?", "His Scalps", "http://s3.media.squarespace.com/production/465215/5307878/wp-content/uploads/2009/02/4.jpg");
var q5 = Basic("How doe Jules describe Kahuna Burgers food?", "That is a tasty burger", "http://metsmerizedonline.com/wp-content/uploads/2014/04/Jules-winnfield-tasty-burger.jpg");
var q6 = Basic("What should be done if a German wants to die for his country?", "Oblige Him", "http://darecountynow.com/uploads/film_images/movie_stills/inglourious_basterds_25_630_pxlw.jpg");
var q7 = Basic("Which wallet belongs to Jules", "The one that says Bad Mother F@#cka", "http://www.ranthollywood.com/wp-content/uploads/2015/02/168581305.jpg");
var q8 = Basic("Where does Candy send slaves to work until their backs give out?", "Quinn Dicky Mining Company", "https://i.ytimg.com/vi/URlB2eyKDAM/hqdefault.jpg");
var q9 = Basic("What does Django like?", "The way you die boy", "https://s-media-cache-ak0.pinimg.com/736x/38/db/ce/38dbce93cb2514b410af4b03329f3f27.jpg");
var q10 = Basic("What business are the Inglorius Bastards in?", "Nazi killin business", "https://ae01.alicdn.com/kf/HTB1bXoGLVXXXXbmXFXXq6xXFXXXr/Lt-Aldo-The-Apache-Raine-Inglourious-Basterds-Brad-Pitt-Movie-Art-Huge-Print-Poster-TXHOME-D6163.jpg");

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

console.log("Question Array: " + questArray);

var cardCount=0;

$("#flip").on("click", function() {
        console.log(questArray[cardCount].front);
        console.log("button clicked");
        $("#question").html(questArray[cardCount].front);
        $("#image").attr("src", questArray[cardCount].image);
        cardCount++;
});
