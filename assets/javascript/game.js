var startButton = $("<button id=\"start\"></button>").text("Start");
var restartButton = $("<button id=\"restart\"></button>").text("Start Over?");
var wins = 0;
var losses = 0;
var timeouts = 0;
var rightOrWrong = -1;
var questions = ["What is the color of Diamonds?", "How high does the Efficiency enchantment go?", "Which of these is a number of rotten flesh a single zombie can drop?", "Can TNT blow up Obsidian?", "Can the Wither blow up Obsidian?"];
var diamondAnswers = ["Yellow", "Clear", "Blue", "Red"];
var efficiencyAnswers = ["II", "III", "V", "VI"];
var rottenAnswers = ["1", "2", "4", "8"]
var boolAnswers = ["Yes", "No"]
$("#startButton").append(startButton);

$("#restart").click(function() {
$("div").empty();
$("#startButton").append(startButton);
});

$("#start").click(function(){
$("div").empty();

function questionStart(){
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000)
};

function countdown(){
    var seconds = 30;
    seconds--;
    $("timer").html("Time Remaining: " + seconds + " seconds.");

if(seconds === 0){
    quizTimeOut();
    clearInterval(intervalId);
} else if(rightOrWrong){
    correct();
} else if(!rightOrWrong){
    wrong();
}
};
function correct(){
    $("div").empty();
    $("rightOrWrong").html("You ran out of time! The correct answer was:");
    $("gif").html("<img src=\"\"></img>");
    questions++;
    setTimeout(questionStart, 5000); 
}
function wrong(){
    $("div").empty();
    $("rightOrWrong").html("You ran out of time! The correct answer was:");
    $("gif").html("<img src=\"\"></img>");
    questions++;
    setTimeout(questionStart, 5000);
}
function quizTimeOut(){
    $("div").empty();
    $("rightOrWrong").html("You ran out of time! The correct answer was:");
    $("gif").html("<img src=\"\"></img>");
    questions++;
    setTimeout(questionStart, 5000);
}

function gameEnd(){
    $("div").empty();
    $("score").html("Your score is:<br/>" + wins + " wins,<br/>" + losses + " losses, and<br/>you timed out " + timeouts +" times.")
}


questionStart();
});
