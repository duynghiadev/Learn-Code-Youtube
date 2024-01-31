var questions = [
  {
    question: "Which one of the following is a java keyword?",
    choices: ["switch", "while", "public", "void", "all of the above"],
    correctAnswer: 2,
  },
  {
    question: "Java declaration statement must end with?",
    choices: ["A comma", "a semicolon", "a colon", "fullstop"],
    correctAnswer: 1,
  },
  {
    question: "The loop keyword of java is?",
    choices: ["Byte", "While", "Double", "FLoat"],
    correctAnswer: 1,
  },
  {
    question: "Java does not define which type modifier?",
    choices: ["Auto", "Extern", "Register", "all of the above"],
    correctAnswer: 3,
  },
  {
    question: "	Which one of the following is access keyword?",
    choices: ["public", "private", "protected", "all of the above"],
    correctAnswer: 3,
  },
  {
    question:
      "Which one of the following languages is pure object oriented language?",
    choices: ["java", "c++", "object pascal", "c"],
    correctAnswer: 0,
  },
  {
    question: "	Which one of the following is not a java keyword?",
    choices: ["break", "class", "static", "study"],
    correctAnswer: 3,
  },
  {
    question: "POP is a/an",
    choices: [
      "Object oriented programming",
      "Object optional programming",
      "Optional object programming",
      "None of these",
    ],
    correctAnswer: 0,
  },
];
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();
  $(this)
    .find(".nextButton")
    .on("click", function () {
      if (!quizOver) {
        value = $("input[type='radio']:checked").val();
        if (value == undefined) {
          $(document).find(".quizMessage").text("please select an answer");
          $(document).find(".quizMessage").show();
        } else {
          $(document).find(".quizMessage").hide();
          if (value == questions[currentQuestion].correctAnswer) {
            correctAnswers++;
          }
          currentQuestion++;
          if (currentQuestion < questions.length) {
            displayCurrentQuestion();
          } else {
            displayScore();
            $(document).find(".nextButton").text("Play Again?");
            quizOver = true;
          }
        }
      } else {
        quizOver = false;
        $(document).find(".nextButton").text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
      }
    });
});

function displayCurrentQuestion() {
  console.log("In display current question");

  var question = questions[currentQuestion].question;
  var questionClass = $(document).find(".quizContainer > .question");
  var choiceList = $(document).find(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  $(questionClass).text(question);

  $(choiceList).find("li").remove();

  var choice;
  for (i = 0; i < numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    $(
      '<li><input type ="radio" value= ' +
        i +
        ' name="dynradio" />' +
        choice +
        "</li>"
    ).appendTo(choiceList);
  }
}
function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  hideScore();
}
function displayScore() {
  $(document)
    .find(".quizContainer > .result")
    .text("You scored. " + correctAnswers + "out of : " + questions.length);
  $(document).find(".quizContainer > .result").show();
}

function hideScore() {
  $(document).find(".result").hide();
}
