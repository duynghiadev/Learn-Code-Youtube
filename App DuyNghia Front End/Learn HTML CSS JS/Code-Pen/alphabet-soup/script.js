const bowl = document.querySelector(".bowl");
const text = document.querySelector(".text");
const addNoodlesBtn = document.getElementById("add-noodles");
const chars = new SplitText(text, { type: "chars", charsClass: "char" });
const alphabet = "abcdefghijklmnopqrstuvwxyz";

gsap.defaults({ overwrite: true });

function getRandomInt(val) {
  return Math.ceil(Math.random() * val) * (Math.round(Math.random()) ? 1 : -1);
}

function addLetter() {
  const el = document.createElement("div");
  const char = alphabet[Math.floor(Math.random() * alphabet.length)];
  const pos = 40;
  const translate = 30;
  const rotate = 60;

  el.innerText = char;
  el.classList.add("char");
  el.style.top = `${getRandomInt(pos)}%`;
  el.style.left = `${getRandomInt(pos)}%`;

  bowl.appendChild(el);
  gsap.to(el, {
    xPercent: () => getRandomInt(translate),
    yPercent: () => getRandomInt(translate),
    rotation: () => getRandomInt(rotate),
    ease: "expo.out",
    duration: 2,
  });
}

function moveChars(obj) {
  const { event, deltaX, deltaY } = obj;
  const el = event.target;
  const r = el.getBoundingClientRect();
  const y = event.clientY - (r.top + Math.floor(r.height / 2));
  const t = 5;

  gsap.to(obj.event.target, {
    xPercent: `+=${deltaX * t}`,
    yPercent: `+=${deltaY * t}`,
    rotation: `-=${deltaX * t * Math.sign(y)}`,
    duration: 3,
    ease: "expo.out",
  });
}

Observer.create({
  target: bowl,
  onMove: (self) => self.event.target.matches(".char") && moveChars(self),
});

gsap.to(".char", {
  xPercent: () => getRandomInt(10),
  yPercent: () => getRandomInt(10),
  rotation: () => getRandomInt(20),
  duration: 5,
});

addNoodlesBtn.addEventListener("click", addLetter);
