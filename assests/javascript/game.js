
// adding value to the crystal
var image1= Math.floor(math.random()*12)+1;
var image2= Math.floor(math.random()*12)+1;
var image3=Math.floor(mathe.randon()*12)+1;
var image4= Math.floor(math.random()*12)+1;
//click on the randomNumber to get the win or lose
var computer= math.floor (math.random()*120)+19;
var presentScore=0
var wincount=0
var losecount=0
// console.log the images into string
console.log(image1, image2, image3, image4);
var compScore = computer;
console.log(computer)
console.log(computerScore);
// link the score in the html file
$("#compScore").html(compScore);

$("#presentScore").html(presentScore);

$("#winCount").html(wincount);

$("#loseCount").html(losecount);

$("#image1").click(function () {
    presentScore += images1
    winchecker();
    console.log(presentScore);
    $("#presentScore").html(currentScore);

});
$("#image2").click(function() {
    presentScore += image2
    winchecker();
    console.log(presentScore);
    $("#presentScore").html(presentScore);
})

$("#image3").click(function () {
    presentScore += image3
    winchecker();
    Console.log(presentScore);
    $("#presentScore").html(presentScore);
})

$("#image4").click(function () {
    presentScore += image4
    winchecker();
    console.log(presentScore);
    $("#presentScore").html(presentScore);

})