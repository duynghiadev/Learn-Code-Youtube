const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

// select button question
function showAnswer() {
  const Answer = document.querySelector(`.${this.id}-answer`);
  const questionIcon = document.querySelector(`.${this.id}-icon`);
  // Answer.classList.toggle('show')

  console.log(questionIcon);
  console.log(`.${this.id}-answer`);
  if (Answer.classList.contains("show")) {
    Answer.classList.remove("show");
    questionIcon.classList.add("fa-plus");
    questionIcon.classList.remove("fa-x");
  } else {
    removeAnswerShow();
    questionIcon.classList.remove("fa-plus");
    questionIcon.classList.add("fa-x");
    Answer.classList.add("show");
  }
}

function removeAnswerShow() {
  answers.forEach((answer) => answer.classList.remove("show"));
}

questions.forEach((ques) => ques.addEventListener("click", showAnswer));

// select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();

  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(tabContentItem);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
