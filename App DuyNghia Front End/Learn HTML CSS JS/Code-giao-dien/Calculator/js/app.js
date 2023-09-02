//variables
//to display num and operators that user clicked on and result
let displayResult = document.querySelector(".result");
//to display live result
let displayLiveResult = document.querySelector(".live-result");
//to check users num and operators to have . and (- only once
let check = "";

//event listeners
//the buttons have a btn class
document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("click", checkEntered);
});

//functions
// this function first check users clicked button kind
// class mustShow is for buttons that should be displayed and only numbers and . and operators contain mustShow

function checkEntered(e) {
  //to check that if the tags class list contain mustShow class
  if (e.target.classList.contains("mustShow")) {
    //to check button with mustShow class we use display function
    display(e.target);
    //to check that if the button contain equal class
  } else if (
    e.target.classList.contains("equal") &&
    displayResult.textContent != "Error"
  ) {
    /* if user clicks on equal button, the result will be replaced in users entered num and ops
        and user can use that result for next calculation */
    showResult(displayResult.textContent);
    //check that if the btn contain backspace class
  } else if (
    e.target.classList.contains("backspace") ||
    e.target.parentElement.classList.contains("backspace")
  ) {
    /* we have two btn that their classlist contain backspace
        one for remove just one char, and one for remove all the string in result section */
    // check if the button text content is C
    if (e.target.textContent == "C") {
      //remove all string in result section and live result section
      displayResult.textContent = "";
      displayLiveResult.textContent = "";
    } else {
      //this condition is for an other backSpace button that removes only one char from last of string
      //if result sections text content is Error, all string in result and live result section and check will be remove
      if (displayResult.textContent == "Error") {
        displayResult.textContent = "";
        displayLiveResult.textContent = "";
        check = "";
      } else {
        //else only one char from last of string will be removed
        displayResult.textContent = displayResult.textContent.substr(
          0,
          displayResult.textContent.length - 1
        );
        check = check.substr(0, check.length - 1);
        /*show live result we send results to show live result function after each click
                on operators and numbers and backspace*/
        showLiveResult(displayResult.textContent);
      }
    }
  }
}

// a function to add clicked number or operators to result section
function display(target) {
  // check that if target contain operator class
  if (target.classList.contains("operator")) {
    // check if result section is not an Error or empty string
    if (
      displayResult.textContent != "" &&
      displayResult.textContent != "Error"
    ) {
      // check that if the last char of result screen is an operator
      if (/(×|÷|\+|-|%)$/.test(displayResult.textContent)) {
        displayResult.textContent = displayResult.textContent.replace(
          /(×|÷|\+|-|%)$/,
          target.textContent
        );
      } else {
        displayResult.textContent += target.textContent;
      }
      //show live result
      showLiveResult(displayResult.textContent);
    } //if users entered button was a number, it will be added to the last of the result string
  } else if (
    target.classList.contains("number") &&
    displayResult.textContent != "Error"
  ) {
    if (target.textContent == "+/-") {
      //let user use (- only once in numbers before an operator
      if (check.indexOf("(-") != -1) {
      } else {
        displayResult.textContent += "(-";
        check += "(-";
      }
      //if users button wasnt (- , the number will be added to the result
    } else {
      displayResult.textContent += target.textContent;
      check += target.textContent;
      showLiveResult(displayResult.textContent);
    } //user can use . in numbers before operator once
  } else if (
    target.classList.contains("dot") &&
    displayResult.textContent != "Error"
  ) {
    if (check.indexOf(".") != -1) {
    } else {
      displayResult.textContent += ".";
      check += ".";
    }
  }
}

//this function is for displaying live result
function showLiveResult(numbers) {
  //catch error if it couldnt be calculate
  try {
    //replace × and ÷ and (- with *, / and - so it can be calculate with eval function
    numbers = numbers.replace(/\×/g, "*");
    numbers = numbers.replace(/\÷/g, "/");
    numbers = numbers.replace(/\(-/g, "-");
    displayLiveResult.textContent = eval(numbers);
  } catch (error) {
    //error for live result section is an empty string
    displayLiveResult.textContent = "";
  }
}

//to replace result with entered numbers and operators
function showResult(numbers) {
  try {
    numbers = numbers.replace(/\×/g, "*");
    numbers = numbers.replace(/\÷/g, "/");
    numbers = numbers.replace(/\(-/g, "-");
    displayResult.textContent = eval(numbers);
    displayLiveResult.textContent = "";
  } catch (error) {
    //if the calculation had an error, "Error" will be replaced with the entered numbers and operators
    displayResult.textContent = "Error";
  }
}
