$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    $("#squareMakerButton").click(makeSquare);
});
//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.
// SquareMaker Code:
function makeSquare() {
    console.log("hit");
    $("#squareMaker").html("");
    var numOfSquares = 5;
    console.log($("#squareMakerInput").val());
    for (var x=0 ; x < numOfSquares ; x++){
        $("#squareMaker").append("<div class=\"square\"></div>");
        console.log(x);
    };
};
