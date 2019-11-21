window.onload = function() {
  let intervalId;
  let timer = 120;
  var correct = 0;
  var incorrect = 0;
  var currentQuestion = 0;
  var currentOptions = 0;
  
  $('#nextQuestion').hide();
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
    // nextQuestion();
  }

  function getQuestions() {
    //Get first questi
    $("#quiz-area").append("<div class='questions'>" + questionArray[currentQuestion].question + '</div>' + '<class="options">' + questionArray[currentQuestion].answers + '</div>');
      var totalQuestions = $('.questions').length;
      console.log(totalQuestions);
      var questions = $('.questions');
      var options = $('.option');
      $('.questions').show();

    $("#quiz-area").append("<button id='submit-btn'>Done</button>");
    $('#submit-btn').hide();
    $('#startGame').hide();
    $('#nextQuestion').show();
    $(questions.get(currentQuestion)).fadeIn();
    $(options.get(currentOptions)).fadeIn();

    $('#nextQuestion').click(function () {
      currentQuestion++;
      currentOptions++;
      $('.questions').html(questionArray[currentQuestion].question).fadeIn();
      $('.options').html(questionArray[currentQuestion].answers).fadeIn();
    });

  }
  function checkScore() {
    //Queston 1
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questionArray[0].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    //Question 2
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questionArray[1].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    //Question 3
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questionArray[2].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    //Question 4
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questionArray[3].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    
    });

    //Question 5
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questionArray[4].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });
  }

function displayResults(){
  $("#quiz-area").empty();
  $("#timer-area").empty();
  $("#quiz-area").append("<h3>Correct:  " + correct + "</h3>");
  $("#quiz-area").append("<h3> Incorrect:  " + incorrect + "</h3>");

  if(correct > incorrect) {
    $("#quiz-area").prepend("<h4>You win, Daddy-o!</h4><br>")
  } else {
    $("#quiz-area").prepend("<h4>You're cruisin' for a bruisin', try again!</h4><br>")
  }
}
  
  // Click Events
  $(document).on("click", "#startGame", function() {
    $("#startGame").replaceWith();
    startTimer();
    decrement();
    getQuestions();
  });

  $(document).on("click", "#submit-btn", function() {
    checkScore();
    displayResults();
  });
};