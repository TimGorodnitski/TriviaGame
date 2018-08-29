questions = {

    q1: function () {
        $("#question").append("The answer is C");
    }

}








$("#gameDiv").hide();


$("#startButton").click(function () {
    $("#start").hide();
    $("#gameDiv").show();
    questions.q1();
})





