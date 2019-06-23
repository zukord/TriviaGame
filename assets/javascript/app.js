var intervalId;
var countdown = 30;
var right = 0;
var wrong = 0;
var unanswered = 0;
var questionNumber = 0;
var i=0;
var j=0;
var questions = ["What is the color of Diamonds?", "How high does the Efficiency enchantment go?", "Which of these is a number of rotten flesh a single zombie can drop?", "Can TNT blow up Obsidian?", "Can the Wither blow up Obsidian?"];
var diamondAnswers = ["Yellow", "Clear", "Blue", "Red"];
var efficiencyAnswers = ["II", "III", "V", "VI"];
var rottenAnswers = ["1", "3", "7", "8"]
var boolAnswers = ["Yes", "No"]
var answers = [diamondAnswers, efficiencyAnswers, rottenAnswers, boolAnswers, boolAnswers];



function loadPage(){
    $("#startButton").append($("<button id=\"start\"></button>").text("Start"));
    console.log("here");

    $("#start").click(function(){
        countdown = 30;
        gameStart();
    })

    function gameStart(){
        clearInterval(intervalId);
        $("div").empty();
        console.log("In Game Start Function")
        intervalId = setInterval(function(){
            countdown--
            $("#timer").html("Time remaining: " + countdown + " seconds.")
            if(countdown === 0){
                score();
            }
        }, 1000);

        console.log(questions.length);
        for(i=0; i<questions.length; i++){
            var questionDiv = "#question" + i
            $(questionDiv).html(questions[i]);
            console.log(answers[i].length);
            for(j=0; j<answers[i].length; j++){
                var answerDiv = "#q" + i + "a" + j
                console.log("answerDiv is: " + answerDiv);
                $(answerDiv).append("<input type=\"radio\" name=\"question" + i + "\" id=\"q" + i + "a" + j + "\"> " + answers[i][j])
            }
        }
        $("#finishButton").append($("<button id=\"finish\"></button>").text("Submit"));
        $("#finish").click(function(){
            score();
            gameEnd();
        })
    }
    
    function score(){
        console.log("finish pressed");
          if ($("input[id=q0a2]:checked").length > 0) {
            right++;        
        } else if ($("input[name=question0]:checked").length > 0) {
            wrong++
        } else if(countdown === 0){
            unanswered++
        } else {
            alert("Please answer all questions.")
            right = 0
            wrong = 0
            unanswered = 0;
        }

        if ($("input[id=q1a2]:checked").length > 0) {
            right++;        
        } else if ($("input[name=question1]:checked").length > 0) {
            wrong++
        } else if(countdown === 0){
            unanswered++
        } else {
            alert("Please answer all questions.")
            right = 0
            wrong = 0
            unanswered = 0;
        }

        if ($("input[id=q2a0]:checked").length > 0) {
            right++;        
        } else if ($("input[name=question2]:checked").length > 0) {
            wrong++
        } else if(countdown === 0){
            unanswered++
        } else {
            alert("Please answer all questions.")
            right = 0
            wrong = 0
            unanswered = 0;
        }

        if ($("input[id=q3a1]:checked").length > 0) {
            right++;        
        } else if ($("input[name=question3]:checked").length > 0) {
            wrong++
        } else if(countdown === 0){
            unanswered++
        } else {
            alert("Please answer all questions.")
            right = 0
            wrong = 0
            unanswered = 0;
        }

        if ($("input[id=q4a0]:checked").length > 0) {
            right++;
            gameEnd();        
        } else if ($("input[name=question4]:checked").length > 0) {
            wrong++
            gameEnd();
        } else if(countdown === 0){
            unanswered++
            gameEnd();
        } else {
            alert("Please answer all questions.")
            right = 0
            wrong = 0
            unanswered = 0;
        }
    }


    function gameEnd(){
        $("div").empty();
        clearInterval(intervalId);
        $("#right").html("You got " + right + " correct!")
        $("#wrong").html("You got " + wrong + " wrong!")
        $("#timeout").html("You didn't answer " + unanswered + " questions.")
        $("#restartButton").append($("<button id=\"restart\"></button>").text("Restart"));
        $("#restart").click(function() {
            $("div").empty();
            right = 0;
            wrong = 0;
            unanswered = 0;
            $("#startButton").append($("<button id=\"start\"></button>").text("Start"));
            $("#start").click(function(){
                countdown = 30;
                gameStart();
            })
        });
    }
    

}

loadPage();

/* function questionStart(){
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
    askQuestion();
};

function askQuestion(){
    $("#question" +  questionNumber).html(questions[questionNumber]);
    //$("#answers").html(answers[questionNumber]);
}

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
    questionNumber++;
    setTimeout(questionStart, 5000); 
}
function wrong(){
    $("div").empty();
    $("rightOrWrong").html("You ran out of time! The correct answer was:");
    $("gif").html("<img src=\"\"></img>");
    questionNumber++;
    setTimeout(questionStart, 5000);
}
function quizTimeOut(){
    $("div").empty();
    $("rightOrWrong").html("You ran out of time! The correct answer was:");
    $("gif").html("<img src=\"\"></img>");
    questionNumber++;
    setTimeout(questionStart, 5000);
}

function gameEnd(){
    $("div").empty();
    $("score").html("Your score is:<br/>" + wins + " wins,<br/>" + losses + " losses, and<br/>you timed out " + timeouts +" times.")
}


questionStart();
});*/