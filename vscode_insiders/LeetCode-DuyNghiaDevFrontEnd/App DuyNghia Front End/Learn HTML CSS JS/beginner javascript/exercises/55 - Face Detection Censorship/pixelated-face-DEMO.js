// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const faceDetector = new window.FaceDetector();
const video = document.querySelector('video.webcam');
const canvas = document.querySelector('canvas.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('canvas.face');
const faceCtx = faceCanvas.getContext('2d');
const SCALE = 1.2;
const SIZE = 10;

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // paintFace(faces);
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // First draw it small
  faceCtx.drawImage(
    video, // Where should I grab the photo from?
    face.x, // from what x and y should I start capturing from?
    face.y,
    face.width, // how wide and high should I capture from?
    face.height,
    face.x, // now to draw it, where should I start x and y?
    face.y,
    SIZE, // how wide and high should it be?
    SIZE
  );

  const width = face.width * SCALE;
  const height = face.height * SCALE;

  // then draw it back on, but scaled up
  faceCtx.drawImage(
    faceCanvas, // Where should I grab the photo from?
    face.x, // from what x and y should I start capturing from?
    face.y, // from what x and y should I start capturing from?
    SIZE,
    SIZE,
    // Drawing
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}
function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 1;
  ctx.strokeRect(left, top, width, height);
  ctx.stroke();
}

populateVideo().then(detect);
