// // button click for random value on blue crystal
// $("#blue-crystal").on("click", function(){
//     // assign its random number
//     var blueGemValue = randomValue()
//     // add the random value 
//     totalScore += blueGemValue
//     //print the total score to the total score div
//     ("#total-score").text(totalScore);
// })


// global variables

var wins = 0;

var losses = 0;

// var totalScore = 0 ;

var randomNumber = function()  {
     return Math.floor(Math.random() * ((120-19)+1) + 19);
};

var randomValue = function() {
    return Math.floor(Math.random() * ((12-1)+1) + 1);
};

var targetNumber = randomNumber();

$("#red-crystal").attr('data-points', randomValue());
$("#blue-crystal").attr('data-points', randomValue());
$("#green-crystal").attr('data-points', randomValue());
$("#pink-crystal").attr('data-points', randomValue());

var checkScores = function() {
  if (totalScore === targetNumber) {
    alert("You win!");
  }
  else if (totalScore > targetNumber) {
    alert("You Lose!");
  };

  console.log(totalScore);
  console.log(targetNumber);
}

$(document).ready(function() {
  var totalScore = 0 ;

  // assign a random number to the target number box
  $("#target-number").text(targetNumber);

  // click function for red crystal to give it a number value
  $("#red-crystal").on("click", () => {

    // add the value of red gem to the total score
    totalScore += parseInt($("#red-crystal").attr('data-points'));
    // print total score to the broswer
    $("#total-score").text(totalScore);
    checkScores();
  });


  // click function for blue crystal to give it a number value
  $("#blue-crystal").on("click", () => {

      // add the value of red gem to the total score
    totalScore += parseInt($("#blue-crystal").attr('data-points'));
    // print total score to the broswer
    $("#total-score").text(totalScore);
    checkScores();
  });

  // click function for green crystal to give it a number value
  $("#green-crystal").on("click", () => {

    // add the value of red gem to the total score
    totalScore += parseInt($("#green-crystal").attr('data-points'));
    // print total score to the broswer
    $("#total-score").text(totalScore);
    checkScores();
  });

  // click function for pink crystal to give it a number value
  $("#pink-crystal").on("click", () => {

    // add the value of red gem to the total score
    totalScore += parseInt($("#pink-crystal").attr('data-points'));
    // print total score to the broswer
    $("#total-score").text(totalScore);
    checkScores();
  });
});