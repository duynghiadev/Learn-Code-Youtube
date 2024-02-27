const submit = document.getElementById("submit");
const BauCua = document.getElementById("BauCua");
const Audio = document.getElementById("audio");

const IMG = document.querySelectorAll("img");

console.log(IMG);

const XiNgau = ["Nai.png", "Bau.png", "Ga.png", "Ca.png", "Cua.png", "Tom.png"];

var Count = 35;

var CanSub = true;

submit.addEventListener("click", () => {
  if (CanSub) {
    CanSub = false;
    Audio.load();
    Audio.play();
    IMG.forEach(function (userItem) {
      userItem.classList.add("shake");
    });
    BauCua.classList.add("shake");
    submit.classList.add("block");
    RandomBauCua();
  }
});

function RandomBauCua() {
  if (Count > 0) {
    setTimeout(RandomBauCua, 50);
    Count--;
    IMG.forEach(function (userItem) {
      userItem.src = "BauCua/" + XiNgau[Math.floor(Math.random() * 6)];
    });
  } else {
    Count = 35;
    Audio.pause();
    IMG.forEach(function (userItem) {
      userItem.classList.remove("shake");
    });
    BauCua.classList.remove("shake");
    submit.classList.remove("block");
    CanSub = true;
  }
}
