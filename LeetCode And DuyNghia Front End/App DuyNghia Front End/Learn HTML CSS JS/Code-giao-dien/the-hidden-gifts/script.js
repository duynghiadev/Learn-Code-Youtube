(() => {
  // constants
  const timeEl = document.querySelector(".timer");

  const start = document.querySelector(".js_scr_start");
  const startOverlay = document.querySelector(".overlay_name_start");
  const endOverlay = document.querySelector(".overlay_name_end");

  const arrow = document.querySelector(".obj_name_arrow");
  const loco = document.querySelector(".obj_name_loco");
  const wagon = document.querySelector(".obj_name_wagon");
  const gifts = document.querySelector(".obj_name_gifts");
  const snowman = document.querySelector(".obj_name_snowman");
  const snowmanDec = document.querySelector(".obj_name_snowman-dec");

  const song = document.querySelector("#song");
  const toggleSong = document.querySelector(".toggle-song__btn");

  // sequence of events
  start.addEventListener("click", () => {
    startOverlay.classList.add("overlay_state_disabled");
  });

  arrow.addEventListener("click", () => {
    arrow.classList.add("obj_state_active");
    loco.classList.add("obj_state_run");
    wagon.classList.add("obj_state_run");
  });

  wagon.addEventListener("click", () => {
    loco.classList.add("obj_state_active");
    wagon.classList.add("obj_state_active");
    gifts.classList.add("obj_state_run");
  });

  gifts.addEventListener("click", () => {
    gifts.classList.add("obj_state_active");
    endOverlay.classList.remove("overlay_state_disabled");
  });

  snowman.addEventListener("click", () => {
    snowman.classList.add("obj_state_active");
    snowmanDec.classList.add("obj_state_active");
  });

  // countdown
  const countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

  let x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    timeEl.innerHTML = ` in ${days}d ${hours}h ${minutes}m`;

    if (distance < 0) {
      clearInterval(x);
      timeEl.innerHTML = " right now";
    }
  }, 1000);

  // song
  song.volume = 0.1;
  song.loop = true;

  toggleSong.addEventListener("click", () => {
    if (song.paused) {
      song.play();
      toggleSong.classList.remove("gg-play-button-o");
      toggleSong.classList.add("gg-play-pause-o");
    } else {
      song.pause();
      toggleSong.classList.remove("gg-play-pause-o");
      toggleSong.classList.add("gg-play-button-o");
    }
  });
})();
