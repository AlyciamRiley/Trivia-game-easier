window.onload = function () {


    var timer = 10;
    var questionArray = [{

            question: 'Who recorded the original version of the song "Hound Dog"?',
            answers: ['Willa Mae "Big Mama" Thornton', 'Elvis Presley', 'Carl Perkins', 'Chuck Berry', 'Miley Cyrus'],
            correctAnswer: 'Willa Mae "Big Mama" Thornton',
}, {

            question: 'Who was marketed by her record company as the "female Elvis"?',
            answers: ['Wanda Jackson', 'Janis Martin', 'Patsy Cline', 'Diana Ross', 'Miley Cyrus'],
            correctAnswer: 'Janis Martin',
}, {

            question: 'Who sang the 1957 song Whole Lotta Shakin Goin On?',
            answers: ['Elvis Presley', 'Jerry Lee Lewis', 'Gene Vincent', 'Buddy Holly', 'Miley Cyrus'],
            correctAnswer: 'Jerry Lee Lewis',
}, {

            question: '"Rebel-Rouser", "Cannonball", and "Because They Are Young" were all hits by which artist?',
            answers: ['The Big Bopper', 'Jerry Lee Lewis', 'Gene Vincent', 'Duane Eddy', 'Miley Cyrus'],
            correctAnswer: 'Duane Eddy',
},

        {

            question: 'Who spent three weeks at No.1 in 1957 with “That’ll be the Day”?',
            answers: ['Buddy Holly', 'June Carter', 'Little Richard', 'Fats Domino', 'Miley Cyrus'],
            correctAnswer: 'Buddy Holly',
}];





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
    }

    function decrement() {
        timer--;
        $("#countdown").html("<span>" + timer + "<span>");

        if (timer === 0) {
            stopTimer();
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        /*nextQuestion();*/

    }

    function firstQuestion() {
        var randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
        $("#question-display").html(JSON.stringify(randomQuestion.question));
        renderButtons(randomQuestion);
    }

    function renderButtons(randomQuestion) {
        //Cleared button div of any newly created buttons
        $("#answer-display").empty();

        //access correct answer on click handler
        $("#answer-display").data("answer", randomQuestion.correctAnswer);

        //dynamically generates buttons for each answer
        for (var i = 0; i < randomQuestion.answers.length; i++) {
            var a = $("<button>");
            //adds class to the button

            //adds a data attribute
            a.data("name", randomQuestion.answers[i]);

            //labels button
            a.text(randomQuestion.answers[i]);
            a.val(randomQuestion.answers[i]);
            //if else tatement, randomQuestion.answers is equal to randomQuestion.correctAnswer, then add btn-correct answer

            if (randomQuestion.answers[i] == randomQuestion.correctAnswer) {
                a.addClass("btn-correctAnswer");
                a.addClass("btn-answer");
            } else {
                a.addClass("btn-answer");
            };

            $("#answer-display").append(a);
        }

    }

    $("#answer-display").on("click", ".btn-answer", function (event) {
        //get answer from clicked element
        event.preventDefault();
        var answer = $(".btn-answer").val;
        //get correct answer from parent element
        var correctAnswer = $(this).hasClass("btn-correctAnswer");
        console.log(correctAnswer);
        //correct logic
        if (correctAnswer) {
            console.log("Correct!!");

        } else {
            console.log("wrong");
        }
    });


};

//Check if correct/incorrect, update scoreboard
//answer is clicked, move on to next question

//OR...

//timer runs out, move to next question...

/*
    function nextQuestion() {

        $('#question-display').empty();
        $('#correct').empty();
        $('#answerBtn').empty();
        timer = 10;
        startTimer();

        console.log("nextQuestion is running!")
        console.log(nextQuestion);

    }*/
