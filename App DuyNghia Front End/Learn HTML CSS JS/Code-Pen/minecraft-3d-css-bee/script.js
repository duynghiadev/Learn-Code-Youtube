let windowHeight = window.innerHeight;
const adjust = () => {
  windowHeight = window.innerHeight;
  if (windowHeight < 800) {
    document.documentElement.style.setProperty("--bee-scale", 0.2);
    document.documentElement.style.setProperty("--cube-scale", 0.2);
  } else {
    document.documentElement.style.setProperty("--bee-scale", 0.5);
    document.documentElement.style.setProperty("--cube-scale", 0.5);
  }
};
window.addEventListener("resize", adjust);
adjust();