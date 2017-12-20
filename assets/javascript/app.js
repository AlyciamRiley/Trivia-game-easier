window.onload = function () {

//define global variables\
var correctCounter
var incorrectCounter
var unansweredCounter
var intervalId
var newQuestion = "";
var timer = 10;
var questions = [{
    question: 'Who recorded the original version of the song "Hound Dog"?',
    answers: ['Willa Mae "Big Mama" Thornton', 'Elvis Presley', 'Carl Perkins', 'Chuck Berry', 'Miley Cyrus'],
}];
   /* 'Who was marketed by her record company as the "female Elvis"?',
    'Who sang the 1957 song Whole Lotta Shakin Goin On?',
    '"Rebel-Rouser", "Cannonball", and "Because They Are Young" were all hits by which artist?',
    'Who spent three weeks at No.1 in 1957 with “That’ll be the Day”?',
];*/

/*
var answers = [
    'Willa Mae "Big Mama" Thornton', //0
    'Janis Martin',//1
    'Jerry Lee Lewis',//2
    'Duane Eddy',//3
    'Buddy Holly',//4
    'Elvis Presley', //5
    'Carl Perkins',//6
    'Chuck Berry',//7
    'Miley Cyrus',//8
    'Gene Vincent',//9
    'The Big Bopper',//10
    'June Carter',//11
    'Little Richard',//12
    'Fats Domino'//13
   
];
*/


//Start  button starts game
//clearing the content works.  Do not touch it. 
    $("#startGame").on("click", function(){
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
}




//Question constructor


function renderGame() {

//for (i=0; i < question1.answers.length; i++);

$("#question").text(questions.question);
//$("#answer").text(question1.answers[i]);

   console.log("render game is working");
    
}


    
}
    
//Questions and answers are displayed


    
    
    
    
    
    
    
    
    
    
    
    


