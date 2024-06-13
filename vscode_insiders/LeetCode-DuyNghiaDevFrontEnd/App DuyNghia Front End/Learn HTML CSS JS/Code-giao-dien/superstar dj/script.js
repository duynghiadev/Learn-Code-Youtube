const {
  gsap,
  ScrollTrigger,
  gsap: { timeline, set, to, delayedCall },
} = window;

gsap.registerPlugin(ScrollTrigger);

// Utility function - h/t to https://www.trysmudford.com/blog/linear-interpolation-functions/
const LERP = (x, y, a) => x * (1 - a) + y * a;
const CLAMP = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const INVLERP = (x, y, a) => CLAMP((a - x) / (y - x));
const RANGE = (x1, y1, x2, y2, a) => LERP(x2, y2, INVLERP(x1, y1, a));

const VOLUME_TOGGLE = document.querySelector("input");
const EYES = document.querySelector(".eyes--open");
const LIMIT = 0.2;

const TRACKS = {
  CLASSICAL: {
    TRACK: new Audio(
      "https://assets.codepen.io/605876/yakov-golman-forest-classic.mp3"
    ),

    HUE: 40,
  },

  INSTRUMENTAL: {
    TRACK: new Audio(
      "https://assets.codepen.io/605876/flex-vector-bord-ready-instrumental.mp3"
    ),

    HUE: 160,
  },

  BLUES: {
    TRACK: new Audio(
      "https://assets.codepen.io/605876/lobo-loco-spencer-bluegrass-blues.mp3"
    ),

    HUE: 190,
  },

  POP: {
    TRACK: new Audio(
      "https://assets.codepen.io/605876/chad-crouch-rainbow-pop.mp3"
    ),

    HUE: 320,
  },

  HIPHOP: {
    TRACK: new Audio(
      "https://assets.codepen.io/605876/yung-kartz-magic-hiphop.mp3"
    ),

    HUE: 280,
  },

  JAZZ: {
    TRACK: new Audio(
      "https://assets.codepen.io/605876/kielokaz-story-has-begun-jazz.mp3"
    ),

    HUE: 220,
  },
};

let currentTrack = TRACKS.INSTRUMENTAL.TRACK;

const faceSwap = (spinning) => {
  set(".face", { display: spinning ? "none" : "block" });
  set(".face--nauseous", { display: spinning ? "block" : "none" });
};
let timer;

for (let genre of Object.keys(TRACKS)) {
  TRACKS[genre].TRACK.loop = true;
  TRACKS[genre].TRACK.muted = true;
  TRACKS[genre].TRACK.volume = 1;
}

const toggleMute = () => {
  const MUTE = !TRACKS.CLASSICAL.TRACK.muted;
  for (let genre of Object.keys(TRACKS)) {
    TRACKS[genre].TRACK.muted = MUTE;
  }
};

const genRate = (s) => {
  let rate = 1;
  const val = CLAMP(s, -LIMIT, LIMIT);
  // if (val < 0) rate = RANGE(-5, 0, 0.5, 1, val)
  // else rate = RANGE(0, 5, 1, 4, val)
  rate = RANGE(-LIMIT, LIMIT, -LIMIT, LIMIT, val);
  return rate;
};

set(".record", { transformOrigin: "50% 50%" });
set(".player-arm", { transformOrigin: "25% 15%", rotate: 25 });
to(".player-arm", { duration: 0.5, rotate: 26, repeat: -1, yoyo: true });

const TL = timeline({ repeat: -1 })
  .to(
    ".record",
    {
      rotate: 360,
      duration: 1,
      ease: "none",
    },

    0
  )
  .to(
    ".record",
    {
      transformOrigin: "49.5% 50%",
      repeat: 1,
      yoyo: true,
      duration: 0.5,
    },

    0
  )
  .to(
    ".record__shine",
    {
      transformOrigin: "49.5% 50%",
      repeat: 1,
      yoyo: true,
      duration: 0.5,
    },

    0
  )
  .to(
    ".record__shine",
    {
      rotate: "+=4",
      repeat: 1,
      yoyo: true,
      duration: 0.5,
      ease: "none",
    },

    0
  );

set(".record__shine", { transformOrigin: "50% 50%", rotate: 55 });
set([".record-player", ".genre-switch"], { display: "block" });

document.documentElement.scrollTop = 2;
ScrollTrigger.create({
  trigger: "body",
  start: 1,
  end: "bottom bottom",
  onLeaveBack: () =>
    (document.documentElement.scrollTop = document.body.scrollHeight - 2),
  onLeave: () => (document.documentElement.scrollTop = 2),
  onUpdate: (self) => {
    faceSwap(true);
    const speed = self.getVelocity() / 1000;
    const rate = genRate(speed);
    new timeline()
      .fromTo(
        currentTrack,
        {
          currentTime:
            currentTrack.currentTime < rate
              ? currentTrack.duration - (rate - currentTrack.currentTime)
              : currentTrack.currentTime + rate,
        },
        { playbackRate: 1 },
        0
      )
      .fromTo(TL, { timeScale: speed }, { timeScale: 1 }, 0);
    if (timer) timer.kill();
    timer = delayedCall(0.2, () => faceSwap(false));
  },
});

const blink = (EYES) => {
  gsap.set(EYES, { scaleY: 1 });
  if (EYES.BLINK_TL) EYES.BLINK_TL.kill();
  EYES.BLINK_TL = timeline({
    delay: Math.floor(Math.random() * 5) + 1,
    onComplete: () => blink(EYES),
  });

  EYES.BLINK_TL.to(EYES, {
    duration: 0.05,
    transformOrigin: "50% 50%",
    scaleY: 0,
    yoyo: true,
    repeat: 1,
  });
};
blink(EYES);

VOLUME_TOGGLE.addEventListener("input", () => {
  toggleMute();
  currentTrack.play();
  // currentTrack = TRACKS.CLASSIC.TRACK
});
const GENRE_SWITCH = document.querySelector("select");
GENRE_SWITCH.addEventListener("change", () => {
  currentTrack.pause();
  document.documentElement.style.setProperty(
    "--hue",
    TRACKS[GENRE_SWITCH.value].HUE
  );

  currentTrack = TRACKS[GENRE_SWITCH.value].TRACK;
  currentTrack.play();
});
