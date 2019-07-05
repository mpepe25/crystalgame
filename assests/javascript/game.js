$(document).ready(function(){

// adding value to the crystal
var crystal = Math.floor(Math.random()*12)+1;
console.log('this is a value crystal ' + crystal);
$('#image1black').text(crystal);

var greencrystal = Math.floor(Math.random()*12)+1;
console.log('this is a value greencrystal' + greencrystal);
$('#imagegreen').text(greencrystal);

var redcrystal = Math.floor(Math.random()*12)+1;
console.log('this is a value redcrysta ' + redcrystal);
$('#imagered').text(redcrystal);

var image6 = Math.floor(Math.random()*12)+1;
console.log('this is a value image6 ' + image6);
$('#image4').text(image6);

var randomNumber = Math.floor(Math.random()*102)+19;
console.log('this is a value randomNumber ' + randomNumber);
$('#leftDiv').text(randomNumber);

var presentScore = 0
$('#presentScore').text(presentScore);

//click on the randomNumber to get the win or lose

var wincount = 0 
var losecount = 0


$("#crystal").click(function () {
    // alert(presentScore += crystal);
    presentScore += crystal
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);
    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);
    
    }
});
$("#greencrystal").click(function() {
    presentScore += greencrystal
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);
    
    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);

    }

})

$("#redcrystal").click(function () {
    presentScore += redcrystal
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);
    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);
    }
})

$("#image6").click(function () {
    presentScore += image6
    $('#presentScore').text(presentScore);
    if (randomNumber < presentScore){
    $("#number1").text(losecount + 1);
    }
    else if (randomNumber == presentScore){
    $("#number").text(wincount + 1);
    
    }
  
})




});
