window.onload = function () {


    var intervalId
    var timer = 10;
    var questions = [{

            question: 'Who recorded the original version of the song "Hound Dog"?',
            answers: ['Willa Mae "Big Mama" Thornton', 'Elvis Presley', 'Carl Perkins', 'Chuck Berry', 'Miley Cyrus'],
            correctAnswers: 'Willa Mae "Big Mama" Thornton',
}, {

            question: 'Who was marketed by her record company as the "female Elvis"?',
            answers: ['Wanda Jackson', 'Janis Martin', 'Patsy Cline', 'Diana Ross', 'Miley Cyrus'],
            correctAnswers: 'Janis Martin',
}, {

            question: 'Who sang the 1957 song Whole Lotta Shakin Goin On?',
            answers: ['Elvis Presley', 'Jerry Lee Lewis', 'Gene Vincent', 'Buddy Holly', 'Miley Cyrus'],
            correctAnswers: 'Jerry Lee Lewis',
}, {

            question: '"Rebel-Rouser", "Cannonball", and "Because They Are Young" were all hits by which artist?',
            answers: ['The Big Bopper', 'Jerry Lee Lewis', 'Gene Vincent', 'Duane Eddy', 'Miley Cyrus'],
            correctAnswers: 'Duane Eddy',
},

        {

            question: 'Who spent three weeks at No.1 in 1957 with “That’ll be the Day”?',
            answers: ['Buddy Holly', 'June Carter', 'Little Richard', 'Fats Domino', 'Miley Cyrus'],
            correctAnswers: 'Buddy Holly',
}]





    //Start  button starts game
    //clearing the content works.  Do not touch it. 
    $("#startGame").on("click", function () {
        $("#startGame").replaceWith();
        startTimer();
        decrement();
        firstQuestion();
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

    function firstQuestion (){
        questions = Math.floor((Math.random() * 5) + 1);
        
        $('#question').text(questions);
        console.log(firstQuestion);
        
    }



    function renderGame() {


       /* for (i = 0; i < questions.length; i++) {
            $('#wrapper').empty();
            $('#question').append('<h2>' + questions[i].question + '</h2>');

            $('#correct').html('<button>' + questions[i].correctAnswer + '</button><br>')

            for (j = 0; j < questions[i].incorrectAnswers.length; j++) {

                $('#answerBtn').append('<button>' + questions[i].incorrectAnswers[j] + '</button><br>');


            }

        };*/



    }

    function nextQuestion() {

        $('#question').empty();
        $('#correct').empty();
        $('#answerBtn').empty();
        timer = 10;
        renderGame();
        startTimer();

        console.log("nextQuestion is running!")
        console.log(nextQuestion);

    }


}