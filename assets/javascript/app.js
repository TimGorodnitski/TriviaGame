let correct = 0;
let incorrect = 0;
let unanswered = 0;





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
    }


    // }, { // question 4
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 5
    //     question: "Question?",
    //     answers: [
    //         "Answer1",
    //         "Answer2",
    //         "Answer3",
    //         "Answer4"],
    //     correctAnswer: "Answer4"
    // }, { // question 6
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
        $("#finalStats").show();
    }
};

$(".choice").click(function questionAnswer() {

    if ($(this).find("span").text() === questions[i].correctAnswer) {

        correct++;

    } else {

        incorrect++;
    };

    i++;
    questionStart();

})

