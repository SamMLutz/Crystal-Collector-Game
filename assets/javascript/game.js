// global variables
var wins = 0;
var losses = 0;
var totalScore = 0 ;
// funcion for random target Number
var randomNumber = function()  {
    return Math.floor(Math.random() * ((120-19)+1) + 19);
};
// function to generate random gem values
var randomValue = function() {
    return Math.floor(Math.random() * ((12-1)+1) + 1);
};
// function to store crystal values
var crystalValues = function() {
    $("#red-crystal").attr('data-points', randomValue());
    $("#blue-crystal").attr('data-points', randomValue());
    $("#green-crystal").attr('data-points', randomValue());
    $("#pink-crystal").attr('data-points', randomValue());
}

// function to add crystal points to total score
var addCrystalPoints = function (crystal) {
    totalScore += parseInt($(crystal).attr('data-points'));
    $("#total-score").text(totalScore);
}

// target number variable
var targetNumber = randomNumber();

//  add attribute data points with a value of randomValue
crystalValues();

// start button to begin the game
$("#start-button").on("click", function(){
    $("#total-score").empty();
    $("#target-number").text(targetNumber);
    crystalValues();
   
});

// function to reset game
var reset = function() {
    $("#target-number").empty();
    $("#total-score").empty();
    totalScore = 0;
    crystalValues();
};

// function to check scores
var checkScores = function() {
    if (totalScore === targetNumber) {
        alert("You win!");
        reset();
        wins++
    } 
    else if (totalScore > targetNumber) {
        alert("You lose, loser");
        reset();
        losses++
    }
    $("#wins-text").text("Wins: " + wins);
    $("#losses-text").text("Losses: " + losses);
};

$(document).ready(function() {
    
    // click function for red crystal to give it a number value
    $("#red-crystal").on("click", () => {
        // add the value of red gem to the total score
        addCrystalPoints("#red-crystal");
        checkScores();
    });

    // click function for blue crystal to give it a number value
    $("#blue-crystal").on("click", () => {
        // add the value of blue gem to the total score
        addCrystalPoints("#blue-crystal");
        // print total score to the broswer
        $("#total-score").text(totalScore);
        checkScores()
    });

    // click function for green crystal to give it a number value
    $("#green-crystal").on("click", () => {
         // add the value of red gem to the total score
        addCrystalPoints("#green-crystal");
        // print total score to the broswer
        $("#total-score").text(totalScore);
        checkScores();
    });

    // click function for pink crystal to give it a number value
    $("#pink-crystal").on("click", () => {
        // add the value of pink crystal to the total score
        addCrystalPoints("#pink-crystal");
        // print total score to the broswer
        $("#total-score").text(totalScore);
        checkScores();
    });
});