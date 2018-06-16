//Set global variables
window.onload = function() {
  let intervalId;
  let timer = 10;
  //need set of questions

  let questionArray = [
    {
      question:
        "Who recorded the original version of the song &quot;Hound Dog&quot;?",
      answers: [
        'Willa Mae "Big Mama" Thornton',
        "Elvis Presley",
        "Carl Perkins",
        "Chuck Berry",
        "Miley Cyrus"
      ],
      correctAnswer: 'Willa Mae "Big Mama" Thornton'
    },
    {
      question:
        "Who was marketed by her record company as the &quot;Female Elvis&quot;?",
      answers: [
        "Wanda Jackson",
        "Janis Martin",
        "Patsy Cline",
        "Diana Ross",
        "Miley Cyrus"
      ],
      correctAnswer: "Janis Martin"
    },
    {
      question:
        "Who sang the 1957 song &quot;Whole Lotta Shakin Goin On&quot;?",
      answers: [
        "Elvis Presley",
        "Jerry Lee Lewis",
        "Gene Vincent",
        "Buddy Holly",
        "Miley Cyrus"
      ],
      correctAnswer: "Jerry Lee Lewis"
    },
    {
      question:
        "&quot;Rebel-Rouser&quot;, &quot;Cannonball&quot;, and &quot;Because They Are Young&quot; were all hits by which artist?",
      answers: [
        "The Big Bopper",
        "Jerry Lee Lewis",
        "Gene Vincent",
        "Duane Eddy",
        "Miley Cyrus"
      ],
      correctAnswer: "Duane Eddy"
    },

    {
      question:
        "Who spent three weeks at No.1 in 1957 with &quot;That’ll be the Day&quot;?",
      answers: [
        "Buddy Holly",
        "June Carter",
        "Little Richard",
        "Fats Domino",
        "Miley Cyrus"
      ],
      correctAnswer: "Buddy Holly"
    }
  ];

  // Needed functions--

  //start game (start the timer, get it to decrement, load first question) -- on click

  $("#startGame").on("click", function() {
    $("#startGame").replaceWith();

    startTimer();
    decrement();
    firstQuestion();
  });

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
    nextQuestion();
  }

  function firstQuestion() {
    //Get first question
    for (let i = 0; i < questionArray.length; i++) {
      $("#question-display").html(questionArray[i].question);

      //Loop through question array and create buttons for each answer
      // Clear button div of any newly created buttons
      $("#answer-display").empty();
      for (let j = 0; j < questionArray[i].answers.length; j++) {
        var a = $("<button>");

        // add class to the button
        a.addClass("btn-answer");
        // adds a data attribute
        a.data("name", questionArray[i].answers[j]);

        //label buttons
        a.text(questionArray[i].answers[j]);

        //if else statement, randomQuestion.answers is e qual to randomQuestion.correctAnswer, then add btn-correct answer

        if (questionArray[i].answers[j] == questionArray[i].correctAnswer) {
          a.addClass("btn-correctAnswer");
          a.addClass("btn-answer");
        } else {
          a.addClass("btn-answer");
        }

        $("#answer-display").append(a);
      }

      //adds button to div
      $("#answer-display").append(a);
    }
  }

  $("#answer-display").on("click", ".btn-answer", function(event) {
    //get answer from clicked element
    event.preventDefault();
    var answer = $(".btn-answer").val;
    //get correct answer from parent element
    var correctAnswer = $(this).hasClass("btn-correctAnswer");
    console.log(correctAnswer);
    //correct logic
    if (correctAnswer) {
      $("#alert-box").text("You got it, daddy-o!");
      // numberCorrect++;

      setTimeout(nextQuestion, 2000);
      stopTimer();
      // checkScore();
    } else {
      $("#alert-box").text(
        "You're cruisin' for a bruisin'- that answer is wrong!"
      );
      // numberIncorrect++;
      setTimeout(nextQuestion, 2000);
      stopTimer();
      // checkScore();
    }
  });

  function nextQuestion() {
    $("#question-display").empty();
    $("#answer-display").empty();
    $("#countdown").empty();

    timer = 11;
    startTimer();
    firstQuestion();
    console.log("nextQuestion is running!");
  }
};
