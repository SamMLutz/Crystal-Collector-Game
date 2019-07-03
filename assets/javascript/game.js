// global variables
let wins = 0;
let losses = 0;
let totalScore = 0 ;

// funcion for random target Number
const randomNumber = () => Math.floor(Math.random() * ((120-19)+1) + 19);

// function to generate random values for our crystals 
const randomValue = () => Math.floor(Math.random() * ((12-1)+1) + 1);

// function to store crystal values
const crystalValues = () => {
    $("#red-crystal").attr('data-points', randomValue());
    $("#blue-crystal").attr('data-points', randomValue());
    $("#green-crystal").attr('data-points', randomValue());
    $("#pink-crystal").attr('data-points', randomValue());
}
// target number variable
let targetNumber = randomNumber();

// function to add crystal points to total score
const addCrystalPoints = crystal => {
    totalScore += parseInt($(crystal).attr('data-points'));
    $("#total-score").text(totalScore);
}

// start button to begin the game
$("#start-button").on("click", () => {
    targetNumber = randomNumber();
    $("#total-score").empty();
    $("#target-number").empty();
    $("#target-number").text(targetNumber);
    crystalValues();
});

// function to reset game
const reset = () => {
    $("#target-number").empty();
    $("#total-score").empty();
    totalScore = 0;
    crystalValues();
};

// function to check scores
const checkScores = () => {
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
        // add the value of red gem to the total score and print to total score
        addCrystalPoints("#red-crystal");
        checkScores();
    });

    // click function for blue crystal to give it a number value
    $("#blue-crystal").on("click", () => {
        // add the value of blue gem to the total score and print to total score
        addCrystalPoints("#blue-crystal");
        checkScores()
    });

    // click function for green crystal to give it a number value
    $("#green-crystal").on("click", () => {
         // add the value of red gem to the total score and print to total score
        addCrystalPoints("#green-crystal");
        checkScores();
    });

    // click function for pink crystal to give it a number value
    $("#pink-crystal").on("click", () => {
        // add the value of pink crystal to the total score and print to total score
        addCrystalPoints("#pink-crystal");
        checkScores();
    });
});