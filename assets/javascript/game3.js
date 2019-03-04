$("#wins-text").text("Wins: " + wins);
$("#losses-text").text("Losses: " + losses);


var crystalValues = function() {
    $("#red-crystal").attr('data-points', randomValue());
    $("#blue-crystal").attr('data-points', randomValue());
    $("#green-crystal").attr('data-points', randomValue());
    $("#pink-crystal").attr('data-points', randomValue());
}




// function for crystal clicks

// give class to all crsytals
var addCrystals = function (crystal) {
    totalScore += parseInt($(crystal).attr('data-points'));
}