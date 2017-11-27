//start page
$("#question-container").hide();
$("#last-page").hide();
$("#correct-page").hide();
$("#wrong-page").hide()

//create function to display a question
let currentQuestion = 0;
let questionsIndex = 0;

function displayQuestion(questionIdx) {
    $("#start-page").hide();
    $("#last-page").hide();   
    $("#question-container").show();
    if(questionIdx === 0){  
      score = 0;
      questionsIndex = 0;
      currentQuestion = 0;
    }
    questionNumber = questionsIndex + 1;
    document.getElementById("question").innerHTML = questions[questionIdx].question;
    document.getElementById("opt1").innerHTML = questions[questionIdx].option1;
    document.getElementById("opt2").innerHTML = questions[questionIdx].option2;
    document.getElementById("opt3").innerHTML = questions[questionIdx].option3;
    document.getElementById("opt4").innerHTML = questions[questionIdx].option4;
    document.getElementById("opt5").innerHTML = questions[questionIdx].option5; 
    document.getElementById("score").innerHTML = "Score: " + score + " out of 10";
    document.getElementById("page").innerHTML = "Question " + questionNumber + " out of 10";
}

//create function to submit and check if answer is correct
let correctOption = questions[questionsIndex].answer;
function checkAnswer() {
    correctOption = questions[questionsIndex].answer;
    questionA = questions[questionsIndex];
    correctAnswer = questionA["option"+correctOption];
    let selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption) {
        alert('Please Select An Answer');
        return;
    } else if ($('input[name="option"]:checked').val() == correctOption) {
        score += 1;
        $("#correct-page").show();
        $("#question-container").hide();
    } else {
        $("#wrong-page").show();
        $("#question-container").hide();
        document.getElementById("insert-answer").innerHTML = "Correct Answer: " + correctAnswer
    }
    questionsIndex += 1 
    $('input[name="option"]').prop('checked', false);   
}

//create function to load next page
function nextQuestion(questionNumber) {
    if (questionNumber == 9) {
       $("#last-page").show();
       document.getElementById("final-score").innerHTML = "Your score: " + score + " out of 10";
       $("#wrong-page").hide();
       $("#correct-page").hide();       
    } else {
        $("#wrong-page").hide();
        $("#correct-page").hide();
        currentQuestion += 1; 
        displayQuestion(currentQuestion)
    }
}



