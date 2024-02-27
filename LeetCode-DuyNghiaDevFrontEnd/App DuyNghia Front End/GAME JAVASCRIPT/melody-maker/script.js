let CANVAS;
let MARGIN_RIGHT;
let MARGIN_LEFT;
let SPACING; //vertical

let MOUSE = {
  x: 0,
  y: 0,
  isDown: false,
};
let HOLD_DURATION = 300;

let MOVING_NOTES = [];
let SPEED = 0.005;

let BLUE = "rgb(0,176,240)";
let PURPLE = "rgb(204,0,153)";

// AUDIO
let AUDIO_CONTEXT;

let FREQ = [
  1318.51, 1174.66, 1046.5, 987.767, 880, 783.991, 698.456, 659.255, 587.33,
  523.251, 493.883, 436.04, 392.44, 349.228, 329.628, 293.665, 261.626, 246.942,
  220, 195.998, 174.614,
];

let NOTES = [
  "E6",
  "D6",
  "C6",
  "B5",
  "A5",
  "G5",
  "F5",
  "E5",
  "D5",
  "C5",
  "B4",
  "A4",
  "G4",
  "F4",
  "E4",
  "D4",
  "C4",
  "B3",
  "A3",
  "G3",
  "F3",
];

let CLEF;

function main() {
  CANVAS = document.getElementById("myCanvas");
  fitToScreen();

  addEventListeners();

  CLEF = new Clef();
  animate();
}

function addEventListeners() {
  window.addEventListener("resize", fitToScreen);

  // LATER
  CANVAS.addEventListener("mousemove", onMouseMove);
  CANVAS.addEventListener("mousedown", onMouseDown);
  CANVAS.addEventListener("mouseup", onMouseUp);
}

function fitToScreen() {
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  MARGIN_RIGHT = CANVAS.width * 0.75;
  MARGIN_LEFT = CANVAS.width * 0.2;
  SPACING = CANVAS.height / 20;
}

function onMouseMove(event) {
  MOUSE.x = event.x;
  MOUSE.y = event.y;
}

function onMouseDown(event) {
  MOUSE.isDown = true;
  let prop = getNoteAtLocation(MOUSE);
  MOVING_NOTES.push(new MovingNote(prop));
}

function onMouseUp(event) {
  MOUSE.isDown = false;
}

function getNoteAtLocation(location) {
  let index = Math.round(location.y / SPACING);
  return {
    x: MARGIN_RIGHT,
    y: index * SPACING,
    freq: FREQ[index],
    dur: 0.5,
  };
}

function animate() {
  updateMovingNotes();
  drawScene();

  if (!autoNotesExist()) {
    document.getElementById("autoPlayButton").style.backgroundColor = PURPLE;
  }
  window.requestAnimationFrame(animate);
}

function drawNote(ctx, location, duration = 0.5, color = "black") {
  ctx.globalAlpha = Math.min(
    1,
    Math.abs(location.x - MARGIN_LEFT) / MARGIN_LEFT
  );

  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = CANVAS.height * 0.01;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (duration <= 2) {
    ctx.beginPath();
    ctx.moveTo(location.x + SPACING, location.y);
    ctx.lineTo(location.x + SPACING, location.y - SPACING * 5);
    ctx.stroke();
  }

  if (duration == 0.5) {
    ctx.beginPath();
    ctx.moveTo(location.x + SPACING, location.y - SPACING * 5);
    ctx.bezierCurveTo(
      location.x + SPACING * 2,
      location.y - SPACING * 3,
      location.x + SPACING * 2.5,
      location.y - SPACING * 3,
      location.x + SPACING * 2.5,
      location.y - SPACING * 1
    );

    ctx.bezierCurveTo(
      location.x + SPACING * 2.5,
      location.y - SPACING * 2.7,
      location.x + SPACING * 2,
      location.y - SPACING * 2.7,
      location.x + SPACING,
      location.y - SPACING * 4.5
    );
    ctx.stroke();
    ctx.fill();
  }

  if (duration >= 2) {
    ctx.fillStyle = "white";
  }

  ctx.beginPath();
  ctx.save();
  ctx.translate(location.x, location.y);
  ctx.rotate(-0.2);
  ctx.scale(1.05, 0.8);
  ctx.arc(0, 0, SPACING, 0, Math.PI * 2);

  ctx.stroke();
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawScene() {
  let ctx = CANVAS.getContext("2d");
  ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);

  // Show Note
  if (MOUSE != null && MOUSE.isDown == false) {
    drawNote(ctx, getNoteAtLocation(MOUSE));
  }

  for (let i = 0; i < MOVING_NOTES.length; i++) {
    MOVING_NOTES[i].draw(ctx);
  }

  CLEF.draw(ctx);

  // Draw Stave
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  for (let i = -2; i <= 2; i++) {
    let y = CANVAS.height / 2 + i * SPACING * 2;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(CANVAS.width, y);
    ctx.stroke();
  }
}

function autoNotesExist() {
  for (let i = 0; i < MOVING_NOTES.length; i++) {
    if (MOVING_NOTES[i].isAuto == true) {
      return true;
    }
  }
  return false;
}

function updateMovingNotes() {
  for (let i = 0; i < MOVING_NOTES.length; i++) {
    MOVING_NOTES[i].location.x -= SPEED * CANVAS.width;
    if (MOVING_NOTES[i].location.x <= MARGIN_LEFT) {
      MOVING_NOTES[i].play();

      highlightClef(MOVING_NOTES[i].duration, MOVING_NOTES[i].isAuto);

      MOVING_NOTES.splice(i, 1);
      i--;
    }
  }
  if (MOUSE.isDown == true && MOVING_NOTES.length > 0) {
    MOVING_NOTES[MOVING_NOTES.length - 1].update();
  }
}

function highlightClef(duration, isAuto) {
  CLEF.start = new Date().getTime();
  CLEF.dur = duration * 1000;
  CLEF.isAuto = isAuto;
}

class Clef {
  constructor() {
    this.assets = {
      normalImage: new Image(),
      autoImage: new Image(),
      activeImage: new Image(),
    };
    this.assets.normalImage.src =
      "https://radufromfinland.com/projects/melodymaker/clef_glow_white.png";
    this.assets.autoImage.src =
      "https://radufromfinland.com/projects/melodymaker/clef_glow_purple.png";
    this.assets.activeImage.src =
      "https://radufromfinland.com/projects/melodymaker/clef_glow_blue.png";

    this.start = 0;
    this.dur = 0;
    this.isAuto = false;
  }
  draw(ctx) {
    let aspectRatio =
      this.assets.normalImage.width / this.assets.normalImage.height;
    let newHeight = CANVAS.height * 0.65;
    let newWidth = aspectRatio * newHeight;
    ctx.drawImage(
      this.assets.normalImage,
      MARGIN_LEFT - newWidth / 2,
      CANVAS.height / 2 - newHeight / 2,
      newWidth,
      newHeight
    );

    // LATER
    if (this.start + this.dur > new Date().getTime()) {
      let highlightImage;
      if (this.isAuto == true) {
        highlightImage = this.assets.autoImage;
      } else {
        highlightImage = this.assets.activeImage;
      }
      ctx.globalAlpha = 1 - (new Date().getTime() - this.start) / this.dur;
      ctx.drawImage(
        highlightImage,
        MARGIN_LEFT - newWidth / 2,
        CANVAS.height / 2 - newHeight / 2,
        newWidth,
        newHeight
      );
      ctx.globalAlpha = 1;
    }
  }
}

class MovingNote {
  constructor(prop, isAuto = false) {
    this.location = {
      x: prop.x,
      y: prop.y,
    };
    this.born = new Date().getTime();
    this.duration = prop.dur;
    this.frequency = prop.freq;
    this.isAuto = isAuto;
  }

  draw(ctx) {
    let color = this.isAuto ? PURPLE : BLUE;
    drawNote(ctx, this.location, this.duration, color);
  }

  play() {
    playNote(this.frequency, this.duration);
  }

  update() {
    let timeDiff = new Date().getTime() - this.born;
    let noteType = Math.floor(timeDiff / HOLD_DURATION);
    switch (noteType) {
      case 0:
        this.duration = 0.5;
        break;
      case 1:
        this.duration = 1;
        break;
      case 2:
        this.duration = 2;
        break;
      case 3:
        this.duration = 4;
        break;
    }
  }
}

function playNote(freq, duration) {
  if (AUDIO_CONTEXT == null) {
    AUDIO_CONTEXT = new (AudioContext ||
      webkitAudioContext ||
      window.webkitAudioContext)();
  }

  var osc = AUDIO_CONTEXT.createOscillator();
  var gainNode = AUDIO_CONTEXT.createGain();
  gainNode.gain.setValueAtTime(0, AUDIO_CONTEXT.currentTime);

  gainNode.gain.linearRampToValueAtTime(0.4, AUDIO_CONTEXT.currentTime + 0.05);
  gainNode.gain.linearRampToValueAtTime(
    0,
    AUDIO_CONTEXT.currentTime + duration
  );

  osc.type = "triangle";

  osc.frequency.value = freq;
  osc.start(AUDIO_CONTEXT.currentTime);

  osc.stop(AUDIO_CONTEXT.currentTime + duration);

  osc.connect(gainNode);
  gainNode.connect(AUDIO_CONTEXT.destination);
}

function addAutoNote(note, dur, offset) {
  let fr = FREQ[NOTES.indexOf(note)];
  let y = FREQ.indexOf(fr) * SPACING;

  let prop = {
    x: CANVAS.width + offset,
    y: y,
    freq: fr,
    dur: dur,
  };

  MOVING_NOTES.push(new MovingNote(prop, true));
}

function autoPlay() {
  if (!autoNotesExist()) {
    addAutoNote("F4", 0.5, 0 * CANVAS.width * SPEED);
    addAutoNote("G4", 0.5, 20 * CANVAS.width * SPEED);
    addAutoNote("G4", 0.5, 40 * CANVAS.width * SPEED);
    addAutoNote("A4", 2, 60 * CANVAS.width * SPEED);
    addAutoNote("G4", 0.5, 140 * CANVAS.width * SPEED);
    addAutoNote("F4", 0.5, 160 * CANVAS.width * SPEED);
    addAutoNote("G4", 0.5, 180 * CANVAS.width * SPEED);
    addAutoNote("C5", 2, 200 * CANVAS.width * SPEED);
    addAutoNote("A4", 0.5, 280 * CANVAS.width * SPEED);
    addAutoNote("G4", 0.5, 300 * CANVAS.width * SPEED);
    addAutoNote("F4", 1, 320 * CANVAS.width * SPEED);
    addAutoNote("D4", 2, 380 * CANVAS.width * SPEED);
    addAutoNote("C4", 2, 460 * CANVAS.width * SPEED);

    document.getElementById("autoPlayButton").style.backgroundColor = "gray";
  }
}

main();
