// Author: leviphil
// Created: 17th October, 2021
// Website: leviphil.com

var light = "red";
var start = 1;
var runner = 0;
var repeater = null;
var timeReducer = 10000;
var minusTime = 0;
var sing = new Audio("audio.mp3");
var kill = new Audio("end.mp3");
var winSong = new Audio("win.mp3");

// Countdown

var timeLeft = 35;
var elem = document.getElementById("timer_div");
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    clearInterval(repeater);
    $("#player456").stop();
    loseDisplay();
    return;
  } else {
    elem.innerHTML = timeLeft + " seconds remaining";
    timeLeft--;
  }
}

// sing Audio
function playAudio() {
  sing.play();
}

function pauseAudio() {
  sing.pause();
}

//kill Audio
function playAudio() {
  kill.play();
}

function pauseAudio() {
  kill.pause();
}

// timer for changing light

function startRepeater() {
  clearInterval(repeater);
  repeater = setInterval(changeLight, Math.random() * 1000 + 700);
}

function checkRed() {
  clearInterval(repeater);
  repeater = setInterval(checkLight, 500);
}

function checkLight() {
  if (light === "red" && runner === 1) {
    clearInterval(repeater);
    $("#player456").stop();
    loseDisplay();
    return;
  } else {
    startRepeater();
  }
}

// Display Losing card
function loseDisplay() {
  $("#container").hide();
  var lost = `<div id="box">
    <h1 style="line-height: 35px; background-color: #333;">So sad how you couldn't win a kids' game even though your life depended on it</h1>
    <p style="background-color: #333;">Refresh the page to play again.</p>
</div>`;
  //Method chaining, the 'lost' variable is created first, which is hidden
  //it is then appended to the body and faded in.
  $(lost).hide().appendTo("body").fadeIn(2000);
  kill.play();
}

// Display  winning card
function winDisplay() {
  clearInterval(repeater);
  $("#container").hide();
  var win = `<div id="box">
            <h1 style="line-height: 35px; background-color: #333;">Congratulations, you survived!</h1>
            <p style="background-color: #333;">Refresh the page to play again.</p>
    </div>`;
  $(win).hide().appendTo("body").fadeIn(2000);
  winSong.play();
  clearInterval(timerId);
}

function changeLight() {
  if (light === "red") {
    light = "green";
    $("#lightCenter").removeClass("red");
    $("#lightCenter").addClass("green");
    $("#killerRobot").removeClass("Looking");
    $("#killerRobot").addClass("notLooking");
    sing.play();
  } else {
    light = "red";
    $("#lightCenter").removeClass("green");
    $("#lightCenter").addClass("red");
    $("#killerRobot").removeClass("notLooking");
    $("#killerRobot").addClass("Looking");
    sing.pause();
    checkRed();
  }
}

$(document).ready(function () {
  // when move button is clicked
  $("#moveButton").click(function () {
    if (start === 1) {
      $("#lightCenter").removeClass("red");
      $("#lightCenter").addClass("green");
      light = "green";
      start = 0;
      sing.play();
    }
    $("#player456").animate(
      {
        left: 1000,
      },
      timeReducer,
      "linear",
      winDisplay
    );
    runner = 1;
    startRepeater();
    checkLight;
  });

  //when stop button is clicked
  $("#stopButton").click(function () {
    $("#player456").stop();
    //gets the position of the user
    minusTime = Math.floor($("#player456").position().left);

    timeReducer = ((1100 - minusTime) / 1100) * 10000;
    runner = 0;
  });
});
