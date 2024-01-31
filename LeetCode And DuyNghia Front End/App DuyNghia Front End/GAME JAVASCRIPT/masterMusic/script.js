var Music = [
  ["Ánh Nắng Của Anh", "music/AnhNangCuaAnh.mp4"],
  ["Chân Tình", "music/ChanTinh.mp4"],
  ["Tết Là Tết", "music/TetLaTet.mp4"],
  ["Nơi Này Có Anh", "music/NoiNayCoAnh.mp4"],
  ["Bỏ Em Vào Ba Lô", "music/BoEmVaoBaLo.mp4"],
  ["Đường Quyền Tình Yêu", "music/DuongQuyenTinhYeu.mp4"],
  ["Bánh Mì Không", "music/BanhMiKhong.mp4"],
  ["Người Lạ Thoáng Qua", "music/NguoiLaThoangQua.mp4"],
  ["Đừng Vì Cô Đơn Quá", "music/DungViCoDonQua.mp4"],
  ["Sai Người Sai Thời Điểm", "music/SaiNguoiSaiThoiDiem.mp4"],
  ["Vì Ai Vì Anh", "music/ViAiViAnh.mp4"],
];
var myAudio = document.getElementById("musicaudio");

init();

function init() {
  for (var i in Music) {
    $("#DivMusic").append(
      '<div class="cardMusic" id="Bai' +
        i +
        '" onclick="cardMusic(' +
        i +
        ')"><span id="play' +
        i +
        '" class="material-icons-outlined iconCard">play_circle_filled</span>' +
        Music[i][0] +
        "</div>"
    );
  }
  if (Music.length < 50 && $(window).width() > 500) {
    for (var i = 0; i < 50; i++) {
      $("#DivMusic").append('<div class="cardMusic2"></div>');
    }
  } else {
    $("#DivMusic").append('<div class="cardMusic2"></div>');
  }
}

var current_id = 0;
var StyleActive = 1;

function cardMusic(id) {
  current_id = id;
  $(".cardMusic").removeClass("activeCard");
  if ($("#play" + String(id)).text() == "play_circle_filled") {
    myAudio.src = Music[id][1];
    myAudio.load();
    myAudio.play();
    $(".iconCard").text("play_circle_filled");
    $("#play" + String(id)).text("pause_circle_filled");
    $("#Bai" + String(id)).addClass("activeCard");
  } else {
    myAudio.pause();
    $("#play" + id).text("play_circle_filled");
  }

  $("#NameMusic").text(Music[id][0]);
}

myAudio.onpause = function () {
  $("#play" + current_id).text("play_circle_filled");
};

myAudio.onplay = function () {
  $("#play" + current_id).text("pause_circle_filled");
};

myAudio.onended = function () {
  if (Music.length - 1 == current_id) current_id = -1;
  setTimeout(function () {
    cardMusic(current_id + 1);
  }, 1000);
};

function StyleCustom(string) {
  $("#Style" + String(StyleActive)).removeClass("active");
  StyleActive = string;
  $("#Style" + String(StyleActive)).addClass("active");
}

function Previous() {
  document.getElementById("StyleCard").scrollBy(-50, 0);
}

function Next() {
  document.getElementById("StyleCard").scrollBy(50, 0);
}
