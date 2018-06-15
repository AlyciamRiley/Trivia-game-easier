//Set global variables
window.onload = function () {

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
        // nextQuestion();

    }
// first question -- don't do a random one!!

function firstQuestion() {
    //Get first question
  for (let i = 0; i < questionArray.length; i++) {
      let currentQuestion = questionArray[i].question;
    $("#question-display").html(currentQuestion);

    //Get corresponding answers and render buttons
 
}
};







// Grab the users answer - if correct, do this, if incorrect, do this

// load next question

//check score function
}