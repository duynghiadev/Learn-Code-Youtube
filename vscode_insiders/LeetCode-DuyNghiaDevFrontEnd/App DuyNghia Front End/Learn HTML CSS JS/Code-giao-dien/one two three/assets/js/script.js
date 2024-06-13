$(document).ready(function () {
  $("#LoadingGame").css("display", "none");
  $("#mainGame").css("display", "");
  const modalSetting = document.getElementById("settingModal");
  const modalSettingContainer = document.getElementById("mainSetting");
  modalSetting.addEventListener("click", function () {
    $("#settingModal").css("display", "none");
    $("#showcontentSetting").css("display", "none");
    $("#showRobotAvatarSetting").css("display", "none");
  });
  modalSettingContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

let styleChoose = "";

function bua() {
  $("#giay").css("border-color", "orange");
  $("#keo").css("border-color", "orange");
  $("#bua").css("border-color", "#5EBA7D");
  styleChoose = "BuaStyle";
}

function giay() {
  $("#bua").css("border-color", "orange");
  $("#keo").css("border-color", "orange");
  $("#giay").css("border-color", "#5EBA7D");
  styleChoose = "GiayStyle";
}

function keo() {
  $("#giay").css("border-color", "orange");
  $("#bua").css("border-color", "orange");
  $("#keo").css("border-color", "#5EBA7D");
  styleChoose = "KeoStyle";
}

function mynoti(style, title, des) {
  $("#notifer").css("display", "");
  if (style == "fail") {
    $("#checkSUCCESS").css("display", "none");
    $("#checkFAIL").css("display", "");
  } else if (style == "success") {
    $("#checkFAIL").css("display", "none");
    $("#checkSUCCESS").css("display", "");
  }
  $("#notiText").text(title);
  $("#desNoti").text(des);
}

function closeNoti() {
  $("#notifer").css("display", "none");
}

function PlayNow() {
  if (styleChoose == "") {
    mynoti(
      "fail",
      "Please choose a battle type",
      "Choose your fighting style carefully, this is what determines your victory or defeat in this battle."
    );
  } else {
    $("#readyPlay").css("display", "none");
    $("#PlayButton").css("display", "none");
    $("#VSStart").css("display", "");
    $("#playerOri").css("display", "none");
    $("#robotReady").css("display", "none");
    let robotStyle = Math.floor(Math.random() * 3);
    if (styleChoose == "BuaStyle") {
      $("#player").attr("src", "assets/img/cayBUA.png");
    } else if (styleChoose == "GiayStyle") {
      $("#player").attr("src", "assets/img/paper.png");
    } else if (styleChoose == "KeoStyle") {
      $("#player").attr("src", "assets/img/cayKeo.png");
    }

    if (robotStyle == 0) {
      $("#robot").attr("src", "assets/img/cayBUA.png");
    } else if (robotStyle == 1) {
      $("#robot").attr("src", "assets/img/paper.png");
    } else if (robotStyle == 2) {
      $("#robot").attr("src", "assets/img/cayKeo.png");
    }

    //Win
    if (
      (styleChoose == "BuaStyle" && robotStyle == 2) ||
      (styleChoose == "GiayStyle" && robotStyle == 0) ||
      (styleChoose == "KeoStyle" && robotStyle == 1)
    ) {
      $("#StatusFight").css("background-color", "rgba(50,205,50,0.8)");
      $("#TextFight").text("You Win");
    }

    //Lose
    else if (
      (styleChoose == "BuaStyle" && robotStyle == 1) ||
      (styleChoose == "GiayStyle" && robotStyle == 2) ||
      (styleChoose == "KeoStyle" && robotStyle == 0)
    ) {
      $("#StatusFight").css("background-color", "red");
      $("#TextFight").text("You Lose");
    } else {
      $("#StatusFight").css("background-color", "orange");
      $("#TextFight").text("Draw");
    }

    setTimeout(
      "$('#player').css('display','');$('#robot').css('display','')",
      250
    );
    setTimeout("$('#playAgainDiv').css('display','')", 1500);
  }
}

function playAgain() {
  $("#playAgainDiv").css("display", "none");
  $("#readyPlay").css("display", "");
  $("#VSStart").css("display", "none");
  $("#PlayButton").css("display", "");
  $("#player").css("display", "none");
  $("#robot").css("display", "none");
  $("#playerOri").css("display", "");
  $("#robotReady").css("display", "");
}

function openSetting() {
  $("#settingModal").css("display", "");
  setTimeout(() => $("#showcontentSetting").css("display", ""), 500);
}

function closeSetting() {
  $("#settingModal").css("display", "none");
  $("#showcontentSetting").css("display", "none");
}

function AvatarRobot() {
  $("#showcontentSetting").css("display", "none");
  $("#showRobotAvatarSetting").css("display", "");
}

function returnAvatarRobot() {
  $("#showRobotAvatarSetting").css("display", "none");
  $("#showcontentSetting").css("display", "");
}

var idRobot = 1;
var pathRobot = "";

function changeRobot(index) {
  document
    .getElementById("robot" + idRobot)
    .classList.remove("changerobotchoose");
  document.getElementById("robot" + idRobot).classList.add("changerobothover");

  idRobot = index;

  var idRobotImg = "robot" + index;
  pathRobot = "assets/img/" + idRobotImg + ".jpg";

  document.getElementById(idRobotImg).classList.remove("changerobothover");
  document.getElementById(idRobotImg).classList.add("changerobotchoose");

  mynoti(
    "success",
    "Change Avatar SUccess",
    "Changed robot avatar successfully. Let's keep playing the game"
  );

  setTimeout("$('#robotReady').attr('src',pathRobot)", 1000);
}
