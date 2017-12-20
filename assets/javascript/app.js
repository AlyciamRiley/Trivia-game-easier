window.onload = function () {

    //define global variables
    /*
    var correctCounter
    var incorrectCounter
    var unansweredCounter*/
    var intervalId
    var timer = 10;
    var questions = [{

            question: 'Who recorded the original version of the song "Hound Dog"?',
            incorrectAnswers: ['Willa Mae "Big Mama" Thornton', 'Elvis Presley', 'Carl Perkins', 'Chuck Berry', 'Miley Cyrus'],
            correctAnswers: 'Willa Mae "Big Mama" Thornton',
}, {

            question: 'Who was marketed by her record company as the "female Elvis"?',
            incorrectAnswers: ['Wanda Jackson', 'Janis Martin', 'Patsy Cline', 'Diana Ross', 'Miley Cyrus'],
            correctAnswers: 'Janis Martin',
}, {

            question: 'Who sang the 1957 song Whole Lotta Shakin Goin On?',
            incorrectAnswers: ['Elvis Presley', 'Jerry Lee Lewis', 'Gene Vincent', 'Buddy Holly', 'Miley Cyrus'],
            correctAnswers: 'Jerry Lee Lewis',
}, {

            question: '"Rebel-Rouser", "Cannonball", and "Because They Are Young" were all hits by which artist?',
            incorrectAnswers: ['The Big Bopper', 'Jerry Lee Lewis', 'Gene Vincent', 'Duane Eddy', 'Miley Cyrus'],
            correctAnswers: 'Duane Eddy',
},

        {

            question: 'Who spent three weeks at No.1 in 1957 with “That’ll be the Day”?',
            incorrectAnswers: ['Buddy Holly', 'June Carter', 'Little Richard', 'Fats Domino', 'Miley Cyrus'],
            correctAnswers: 'Buddy Holly',
}]





    //Start  button starts game
    //clearing the content works.  Do not touch it. 
    $("#startGame").on("click", function () {
        $("#startGame").replaceWith();
        startTimer();
        decrement();
        renderGame();
    })

    //this is your timer.  It is working.  Do not touch it. 
    function startTimer() {
        intervalId = setInterval(decrement, 1000);
        console.log("startTimer is working.")
    }

    function decrement() {
        timer--;
        $("#countdown").html("<span>" + timer + "<span>");

        if (timer === 0) {
            stopTimer();
        }
        console.log("decrement is working.")
    }

    function stopTimer() {
        clearInterval(intervalId);
        console.log("stop timer is working.")
        nextQuestion();
    }






    function renderGame() {
        //need to clear out old questions to replace with new
        //all questions are displaying at once - how to fix? Change array parameters...?

        for (i = 0; i < questions.length; i++) {
            $('#question').append('<h2>' + questions[i].question + '</h2>');

            $('#correct').html('<button>' + questions[i].correctAnswer + '</button><br>')

            for (j = 0; j < questions[i].incorrectAnswers.length; j++) {

                $('#answerBtn').append('<button>' + questions[i].incorrectAnswers[j] + '</button><br>');


            }

        };

        //can I target these button tags with css??
        //if else statement? How do I target the buttons with an if else? 
        //How do I do an onclick with these buttons and fit it in with all of this extra code?



    }

    function nextQuestion() {

       
        //Replace with currently leaves page blank. Would like to replace with NEW question and answers.  
        $('#question').empty();
        $('#correct').empty();
        $('#answerBtn').empty();
        timer = 10;
        renderGame();
        startTimer();

        console.log("nextQuestion is running!")

    }


}
