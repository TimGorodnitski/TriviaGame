let correct = 0;
let incorrect = 0;
let unanswered = 0;

let timeLeft = 20;

$("#timer").find("span").text("Time remaining: " + timeLeft);





var questions = [
    {   // question 1
        question: "You're running in a race. You're almost at the finish line when you pass the competitor in second place! What place are you now in?",
        answers: [
            "First",
            "Second",
            "Third",
            "Fourth"],
        correctAnswer: "Second",
        explanation: "HE was in 2nd, so now YOU are in 2nd."
    }, { // question 2
        question: "Before Mount Everest was discovered, what was the tallest mountain on Earth?",
        answers: [
            "K2",
            "Kanchenjunga",
            "Lhotse",
            "Everest"],
        correctAnswer: "Everest",
        explanation: "Everest was still the tallest mountain before we discovered it."
    }, { // question 3
        question: "There are 12 apples in a barrel. If you take away 5, how many do you have?",
        answers: [
            "5",
            "12",
            "7",
            "17"],
        correctAnswer: "5",
        explanation: "YOU take away 5, so YOU have 5. The barrel has the other 7."
    }, {
        // question 4
        question: "If the vice president were to die, who is supposed to be president?",
        answers: [
            "The Speaker of the House",
            "The Attorney General",
            "The Vice President",
            "The President"],
        correctAnswer: "The President",
        explanation: "The President didn't die."
    }, { // question 5
        question: "How many months have 28 days?",
        answers: [
            "1",
            "2",
            "Depends if its a Leap Year",
            "12"],
        correctAnswer: "12",
        explanation: "Every month has 28 days, but most of them have more."
    }

];


$("#startButton").click(function () {
    $("#start").hide();
    $("#gameDiv").show();
    questionStart();

    var timerId = setInterval(countdown, 1000);
    
    function countdown() {

        // Time's up trigger.
        if (timeLeft === 0) {

            unanswered++;

            // hides the gameDiv but starts a timer to show it after 2 seconds, unless this was the last question
            $("#gameDiv").hide();
            if (i < questions.length - 1) { setTimeout(function () { $("#gameDiv").show() }, 5000) };

            // Shows a picture, then hides it after 2 seconds.
            $("#solution").show();
            $("#solutionPic").attr("src", "https://i.imgflip.com/1bpxyu.jpg");
            $("#solution span").text(questions[i].explanation);
            setTimeout(function () { $("#solution").hide() }, 5000);

            // Reset the timer, iterate i, start the next question
            timeLeft = 25;
            i++;
            questionStart();

        } else {
            // take 1 second off the timeleft and display it, repeat until ^ condition is met or timeleft is reset
            timeLeft--;
            $("#timer").find("span").text("Time remaining: " + timeLeft);

        }
    };

})

let i = 0;

function questionStart() {


    // checks if you've finished all the questions
    if (i < questions.length) {

        $("#question span").text(questions[i].question);
        $("#choice0 span").text(questions[i].answers[0]);
        $("#choice1 span").text(questions[i].answers[1]);
        $("#choice2 span").text(questions[i].answers[2]);
        $("#choice3 span").text(questions[i].answers[3]);

    } else {
        // hide the game and update the final stats div, then display it
        $("#gameDiv").hide();
        $("#correct").find("span").text("Correct: " + correct);
        $("#incorrect").find("span").text("Incorrect: " + incorrect);
        $("#unanswered").find("span").text("Unanswered: " + unanswered);
        setTimeout(function(){  $("#finalStats").show();}, 5000);

    }
};

$(".choice").click(function questionAnswer() {

    if ($(this).find("span").text() === questions[i].correctAnswer) {
        $("#gameDiv").hide();
        $("#solution").show();
        if (i < questions.length - 1) { setTimeout(function () { $("#gameDiv").show() }, 5000) };
        $("#solutionPic").attr("src", "http://www.clker.com/cliparts/9/M/v/f/H/d/correct-mark-hi.png");
        $("#solution span").text(questions[i].explanation);
        setTimeout(function () { $("#solution").hide() }, 5000);
        correct++;
    } else {
        $("#gameDiv").hide();
        $("#solution").show();
        if (i < questions.length - 1) { setTimeout(function () { $("#gameDiv").show() }, 5000) };
        $("#solutionPic").attr("src", "https://i.imgflip.com/1bpxyu.jpg");
        $("#solution span").text(questions[i].explanation);
        setTimeout(function () { $("#solution").hide() }, 5000);
        incorrect++;

    };


    timeLeft = 25;
    i++;
    questionStart();

})

