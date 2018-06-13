

//get document ready on load {}
//declare variables

$(document).ready(function() {
var targetNumber = "";
var totalScore = 0;
var wins = 0;
var losses = 0;
var diamond = "";
var ruby = "";
var sapphire = "";
var yellow = "";

//Game sounds
var winsound = new Audio("./assets/sounds/tada.mp3");
var losesound = new Audio("./assets/sounds/fail.mp3")



//initialize game on load/ reset game
//targetNumber = randomly generated newTarget; between 19-12
//values for rubies should be selected randomly between 1-12

function initializeGame() {
    targetNumber = parseInt(Math.floor(Math.random() * 102) + 19);
    $("#targetNumber").text("Target Number: " + targetNumber);
    totalScore= 0;
    $("#total").text("Total: " + totalScore);
    diamond = parseInt(Math.floor(Math.random() * 12) + 1);
    ruby = parseInt(Math.floor(Math.random() * 12) + 1);
    sapphire = parseInt(Math.floor(Math.random() * 12) + 1);
    yellow = parseInt(Math.floor(Math.random() * 12) + 1);

    //making sure values for all four crystals have different values
      
    do { diamond = parseInt(Math.floor(Math.random() * 12) + 1);
        
    } while(diamond === ruby || diamond === sapphire || diamond === yellow);

    do { ruby = parseInt(Math.floor(Math.random() * 12) + 1);
        
    } while(ruby === sapphire || ruby === yellow || ruby === diamond);

    do { sapphire = parseInt(Math.floor(Math.random() * 12) + 1);
        
    } while(sapphire === ruby || diamond === sapphire || sapphire === yellow);

    do { yellow = parseInt(Math.floor(Math.random() * 12) + 1);
        
    } while(yellow === ruby || yellow === sapphire || diamond === yellow);
    
}


//set conditions on rubies upon user click (input)

//getting the random ruby value from the previous step and adding it to total score. 

$("#ruby-image").on("click", function(){

    totalScore += ruby;
    $("#total").text("Total: " + totalScore);


});

//selecting yellow, get its value and adding it to total score

$("#yellow-image").on("click", function(){
totalScore += yellow;
$("#total").text("Total: " + totalScore);

}),

//selecting sapphire, get its value and adding it to total score
$("#sapphire-image").on("click", function(){
    totalScore += sapphire;
    $("#total").text("Total: " + totalScore);
    
 });

 //selecting diamond, get its value, adding it to total score
 $("#diamond-image").on("click", function(){
    totalScore += diamond;
    $("#total").text("Total: " + totalScore);
    
    });


//set conditions for winning or losing
$(".crystal").on("click", function(){

    

 if (totalScore === targetNumber){
    winsound.play();
    wins++;
    $("#wins").text("Wins: " + wins);
    $("#wins").append("<p id='winner'>You win!</p>")
    $("#winner").delay(3000).hide(0);
    initializeGame();
    
}

else if (totalScore >= targetNumber){
    losesound.play();
    losses++;
    $("#loss").text("Losses: " + losses);
    $("#loss").append("<p id='loser'>You lose:(</p>")
    $("#loser").delay(3000).hide(0);
    initializeGame();

}

});

//if player clicks on reset button, restart game

$("#reset").on("click", function(){
    initializeGame();
})

initializeGame();
})