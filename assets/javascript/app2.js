var panel = $("#quiz-area");

//Set global variables

var timer = 11;
var numberCorrect = 0;
var numberIncorrect = 0;
var totalScore = 0;

//need set of questions

var questionArray = [{

    question: 'Who recorded the original version of the song &quot;Hound Dog&quot;?',
    answers: ['Willa Mae "Big Mama" Thornton', 'Elvis Presley', 'Carl Perkins', 'Chuck Berry', 'Miley Cyrus'],
    correctAnswer: 'Willa Mae "Big Mama" Thornton',
    
}, {

    question: 'Who was marketed by her record company as the &quot;Female Elvis&quot;?',
    answers: ['Wanda Jackson', 'Janis Martin', 'Patsy Cline', 'Diana Ross', 'Miley Cyrus'],
    correctAnswer: 'Janis Martin',
    
}, {

    question: 'Who sang the 1957 song &quot;Whole Lotta Shakin Goin On&quot;?',
    answers: ['Elvis Presley', 'Jerry Lee Lewis', 'Gene Vincent', 'Buddy Holly', 'Miley Cyrus'],
    correctAnswer: 'Jerry Lee Lewis',
   
}, {

    question: '&quot;Rebel-Rouser&quot;, &quot;Cannonball&quot;, and &quot;Because They Are Young&quot; were all hits by which artist?',
    answers: ['The Big Bopper', 'Jerry Lee Lewis', 'Gene Vincent', 'Duane Eddy', 'Miley Cyrus'],
    correctAnswer: 'Duane Eddy',
    
},

{

    question: 'Who spent three weeks at No.1 in 1957 with &quot;That’ll be the Day&quot;?',
    answers: ['Buddy Holly', 'June Carter', 'Little Richard', 'Fats Domino', 'Miley Cyrus'],
    correctAnswer: 'Buddy Holly',
    
}];


// Needed functions--


//start game (start the timer, get it to decrement, load first question) -- on click

// first question -- don't do a random one!!

function firstQuestion() {
    for (var i =0; i < questionArray.length; i++) {
        var currentQuestion = questionArray[i].question
        // console.log(currentQuestion);
        $("#question-display").html(JSON.stringify(currentQuestion));
    }

}

firstQuestion();

//render the buttons 

function renderButtons(currentQuestion) {
    // clear button div of any newly created buttons
    $("#answer-display").empty();

 
    //pull the current answer from array$
    for (var j =0; j < questionArray.length; j++) {
        var currentAnswer = questionArray[j].correctAnswer;
        console.log(currentAnswer);
//    //access correct answer on click handler
//    $("#answer-display").data("answer", currentAnswer);
       
   //dynamically generate button for each answer
        var a = $("<button>");
        $("#answer-display").append(a);



    }

}

renderButtons();

// Grab the users answer - if correct, do this, if incorrect, do this


// load next question

//check score function

