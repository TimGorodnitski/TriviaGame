var questions = [
    {   // question 1
        question: "What color is the sky?",
        answers: [
            "Blue",
            "Green",
            "Pink",
            "Red"],
        correctAnswer: "Blue"

    }, { // question 2
        question: "Who is our President?",
        answers: [
            "Blue",
            "Trump",
            "Pink",
            "Red"],
        correctAnswer: "Trump"

    }, { // question 3
        question: "This answer is D",
        answers: [
            "A",
            "B",
            "C",
            "D"],
        correctAnswer: "D"
    }];



$("#startButton").click(function () {
    $("#start").hide();
    $("#gameDiv").show();
    questionStart();
})

function questionStart(){
    let i = 0;
    $("#question span").text(questions[i].question);
    $("#choice0 span").text(questions[i].answers[0]);
    $("#choice1 span").text(questions[i].answers[1]);
    $("#choice2 span").text(questions[i].answers[2]);
    $("#choice3 span").text(questions[i].answers[3]);
    i++;
    console.log(i)
};




