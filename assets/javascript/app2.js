window.onload = function () {


    var timer = 11;
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var totalScore = 0;


    var questionArray = [{

            question: 'Who recorded the original version of the song &quot;Hound Dog&quot;?',
            answers: ['Willa Mae "Big Mama" Thornton', 'Elvis Presley', 'Carl Perkins', 'Chuck Berry', 'Miley Cyrus'],
            correctAnswer: 'Willa Mae "Big Mama" Thornton',
            alreadyAnswered: false
}, {

            question: 'Who was marketed by her record company as the &quot;Female Elvis&quot;?',
            answers: ['Wanda Jackson', 'Janis Martin', 'Patsy Cline', 'Diana Ross', 'Miley Cyrus'],
            correctAnswer: 'Janis Martin',
            alreadyAnswered: false
}, {

            question: 'Who sang the 1957 song &quot;Whole Lotta Shakin Goin On&quot;?',
            answers: ['Elvis Presley', 'Jerry Lee Lewis', 'Gene Vincent', 'Buddy Holly', 'Miley Cyrus'],
            correctAnswer: 'Jerry Lee Lewis',
            alreadyAnswered: false
}, {

            question: '&quot;Rebel-Rouser&quot;, &quot;Cannonball&quot;, and &quot;Because They Are Young&quot; were all hits by which artist?',
            answers: ['The Big Bopper', 'Jerry Lee Lewis', 'Gene Vincent', 'Duane Eddy', 'Miley Cyrus'],
            correctAnswer: 'Duane Eddy',
            alreadyAnswered: false
},

        {

            question: 'Who spent three weeks at No.1 in 1957 with &quot;That’ll be the Day&quot;?',
            answers: ['Buddy Holly', 'June Carter', 'Little Richard', 'Fats Domino', 'Miley Cyrus'],
            correctAnswer: 'Buddy Holly',
            alreadyAnswered: false
}];




//booleans are updating, but are not sticking and array is resetting - how to fix?
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
        // $('#answer-display').fadeIn(3000);
        // nextQuestion();

    }

    function firstQuestion() {
        // //Filters out the answers that have not been answered yet
        // var filteredQuestions = questionArray.filter(word=>word.alreadyAnswered===false);
        // // console.log(filteredQuestions);
        // //picks a ranom question from the filtered questions
        // var randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
        // //changes the state to true
        // this.alreadyAnswered = true;
        // //displayed current question
        // $("#question-display").html(JSON.stringify(randomQuestion.question));
        // renderButtons(randomQuestion);
        // console.log("already answered", this.alreadyAnswered);
    }


    // function renderButtons(randomQuestion) {
    //     //Cleared button div of any newly created buttons
    //     $("#answer-display").empty();

    //     //access correct answer on click handler
    //     $("#answer-display").data("answer", randomQuestion.correctAnswer);

    //     //dynamically generates buttons for each answer
    //     for (var i = 0; i < randomQuestion.answers.length; i++) {
    //         var a = $("<button>");
    //         //adds class to the button

    //         //adds a data attribute
    //         a.data("name", randomQuestion.answers[i]);

    //         //labels button
    //         a.text(randomQuestion.answers[i]);
    //         a.val(randomQuestion.answers[i]);
    //         //if else tatement, randomQuestion.answers is e qual to randomQuestion.correctAnswer, then add btn-correct answer

    //         if (randomQuestion.answers[i] == randomQuestion.correctAnswer) {
    //             a.addClass("btn-correctAnswer");
    //             a.addClass("btn-answer");
    //         } else {
    //             a.addClass("btn-answer");
    //         };

    //         $("#answer-display").append(a);
    //     }

    // }

    // $("#answer-display").on("click", ".btn-answer", function (event) {
    //     //get answer from clicked element
    //     event.preventDefault();
    //     var answer = $(".btn-answer").val;
    //     //get correct answer from parent element
    //     var correctAnswer = $(this).hasClass("btn-correctAnswer");
    //     console.log(correctAnswer);
    //     //correct logic
    //     if (correctAnswer) {
    //         $("#alert-box").text("You got it, daddy-o!");
    //         numberCorrect++;

    //         setTimeout(nextQuestion, 2000);
    //         stopTimer();
    //         checkScore();

    //     } else {
    //         $("#alert-box").text("You're cruisin' for a bruisin'- that answer is wrong!");
    //         numberIncorrect++;
    //         setTimeout(nextQuestion, 2000);
    //         stopTimer();
    //         checkScore();
    //     }
    // });


    // function nextQuestion() {

    //     $('#question-display').empty();
    //     $('#answer-display').empty();
    //     $('#alert-box').empty();
    //     $('#countdown').empty();
    //     timer = 11;
    //     startTimer();
    //     firstQuestion();

    // };

    // function checkScore() {
    //     if (numberCorrect + numberIncorrect === questionArray.length) {
    //         alert("Game over!");
    //     }
    // }




};