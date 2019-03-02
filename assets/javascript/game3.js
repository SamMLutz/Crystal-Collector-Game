$("#wins-text").text("Wins: " + wins);
$("#losses-text").text("Losses: " + losses);


var crystalValues = function() {
    $("#red-crystal").attr('data-points', randomValue());
    $("#blue-crystal").attr('data-points', randomValue());
    $("#green-crystal").attr('data-points', randomValue());
    $("#pink-crystal").attr('data-points', randomValue());
}