let correct = 0;
let incorrect = 0;
let unanswered = 0;




var questions = [
    {   // question 1
        question: "You're running in a race. You're almost at the finish line when you pass the competitor in second place! What place are you now in?",
        answers: [
            "First",
            "Second",
            "Third",
            "Fourth"],
        correctAnswer: "Second"
    }, { // question 2
        question: "Before Mount Everest was discovered, what was the tallest mountain on Earth?",
        answers: [
            "K2",
            "Kanchenjunga",
            "Lhotse",
            "Everest"],
        correctAnswer: "Everest"
    }, { // question 3
        question: "There are 12 apples in a barrel. If you take away 5, how many do you have?",
        answers: [
            "5",
            "12",
            "7",
            "17"],
        correctAnswer: "5"
    }, {
        // question 4
        question: "If the vice president were to die, who is supposed to be president?",
        answers: [
            "The Speaker of the House",
            "The Attorney General",
            "The Vice President",
            "The President"],
        correctAnswer: "The President"
    }, { // question 5
        question: "How many months have 28 days?",
        answers: [
            "All of them",
            "1",
            "Depends if its a Leap Year",
            "2"],
        correctAnswer: "All of them"
    }
    // , { // question 6
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 7
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 8
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 9
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 10
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 11
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 12
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }
];



$("#startButton").click(function () {
    $("#start").hide();
    $("#gameDiv").show();
    questionStart();
})

let i = 0;

function questionStart() {
    if (i < questions.length) {
        $("#question span").text(questions[i].question);
        $("#choice0 span").text(questions[i].answers[0]);
        $("#choice1 span").text(questions[i].answers[1]);
        $("#choice2 span").text(questions[i].answers[2]);
        $("#choice3 span").text(questions[i].answers[3]);
    } else {
        $("#gameDiv").hide();
        $("#correct").find("span").text("Correct: " + correct);
        $("#incorrect").find("span").text("Incorrect: " + incorrect);
        $("#unanswered").find("span").text("Unanswered: " + unanswered);
        $("#finalStats").show();
    }
};

$(".choice").click(function questionAnswer() {

    if ($(this).find("span").text() === questions[i].correctAnswer) {

        $("#gameDiv").hide();

        $("#solution").show();

        setTimeout(function () { $("#gameDiv").show() }, 2000)

        $("#solutionPic").attr("src", "http://www.clker.com/cliparts/9/M/v/f/H/d/correct-mark-hi.png");

        setTimeout(function () { $("#solution").hide() }, 2000);

        correct++;

    } else {

        $("#gameDiv").hide();

        $("#solution").show();

        setTimeout(function () { $("#gameDiv").show() }, 2000)

        $("#solutionPic").attr("src", "https://i.imgflip.com/1bpxyu.jpg");

        setTimeout(function () { $("#solution").hide() }, 2000);

        incorrect++;

    };

    i++;
    questionStart();

})

