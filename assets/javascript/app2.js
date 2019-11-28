window.onload = function () {
  var intervalId;
  var timer = 30;
  var correct = 0;
  var incorrect = 0;
  var chosen = 0;
  var currentQuestion = 0;
  var currentOptions = 0;
  var allBtns = [];
  var newBtns = [];


  var questionArray = [{
      question: "Who recorded the original version of the song &quot;Hound Dog&quot;?",
      answers: [
        'Willa Mae Big Mama Thornton',
        "Elvis Presley",
        "Carl Perkins",
        "Chuck Berry",
        "Miley Cyrus"
      ],
      correctAnswer: 'Willa Mae Big Mama Thornton'
    },
    {
      question: "Who was marketed by her record company as the &quot;Female Elvis&quot;?",
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
      question: "Who sang the 1957 song &quot;Whole Lotta Shakin Goin On&quot;?",
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
      question: "&quot;Rebel-Rouser&quot;, &quot;Cannonball&quot;, and &quot;Because They Are Young&quot; were all hits by which artist?",
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
      question: "Who spent three weeks at No.1 in 1957 with &quot;That’ll be the Day&quot;?",
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

  var totalQuestions = questionArray.length;


  $('.nextQuestion').hide();
  $('.retry').hide();
  $('.results').css('display', 'none');
  $('.timer-area').css('display', 'none');

  function startTimer() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    timer--;
    $('.countdown').html("<span>" + timer + "<span>");

    if (timer === 0) {
      chosen++;
      incorrect++;
      checkComplete();
      nextQuestion();
    }
  }

  function stopTimer() {
    timer = 31;
    clearInterval(intervalId);
  }

  function getQuestions() {
    questionArray[currentQuestion].answers.forEach(function (btn) {
      var displayBtns = '<div class="btn answers" value="' + btn + '">' + btn + '</div>'
      allBtns.push(displayBtns);
    })
    $('.quiz-area').append("<div class='animation-wrapper'><div class='questions'>" + questionArray[currentQuestion].question + '</div>' + "<div class='options'>" + allBtns.join(' ') + '</div></div><div class="btn next nextQuestion">Next</div></div>');
    $('.questions').show();
    $(".quiz-area").append("<button id='submit-btn'>Done</button>");
    $('#submit-btn').hide();
    $('#startGame').hide();
    $('.results').css('display', 'none');
    $('.nextQuestion').show();
    $('.nextQuestion').click(function () {
      chosen++;
      checkComplete();
      nextQuestion();
    })
  }

  function nextQuestion() {
    stopTimer();
    startTimer();
    newBtns = [];
    currentQuestion++;
    currentOptions++;
    questionArray[currentOptions].answers.forEach(function (btn) {
      var displayBtns = '<div class="btn answers second" value="' + btn + '">' + btn + '</div>'
      newBtns.push(displayBtns);
      $('.questions').html(questionArray[currentQuestion].question).fadeIn();
      $('.options').html(newBtns).fadeIn();
    })
    // $('.animation-wrapper').toggle("slide");
  }

  function displayResults() {
    $('.quiz-area').remove();
    $('.timer-area').remove();
    $('.results').css('display', 'flex');
    $('.retry').show();
    $('.numCorrect').html(correct);
    $('.numIncorrect').html(incorrect);
    if (correct > incorrect) {
      $('.results').prepend("<h4>You win, Daddy-o!</h4><br>")
    } else {
      $('.results').prepend("<h4>You're cruisin' for a bruisin', try again!</h4><br>")
    }

  }

  function checkComplete() {
    if (chosen == totalQuestions) {
      displayResults();
    }
  }

  $(document).on("click", "#startGame", function () {
    $('#startGame').replaceWith();
    $('.timer-area').css('display', 'flex');
    startTimer();
    decrement();
    getQuestions();
  });

  $(document).on("click", ".retry", function () {
      location.reload();
  });

  $(document).on("click", ".answers", function () {
    if ($(this).attr('value') === questionArray[currentQuestion].correctAnswer) {
      correct++;
      chosen++;
      checkComplete();
      nextQuestion();
    } else {
      incorrect++;
      chosen++;
      checkComplete();
      nextQuestion();
    }
  });

};