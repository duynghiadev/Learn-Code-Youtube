// Lấy API từ website này: 
// https://developers.giphy.com/explorer/?

function findRandomImgPromise(tag) {
  const apiKey = "l8x81B6EwjSRn6frZ5P1ib9Bh6E9EPEv";
  const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
  return fetch(endpoint)
    .then((rs) => rs.json())
    .then((data) => data.data.fixed_width_small_url);
}

function setTimeoutPromise(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

$("#request").click(async () => {
  // Asynchronous + Sequential
  console.log("Begin run");
  const firstLoop = randomImg("dog");
  console.log("Dog run");
  const secondLoop = randomImg("cat");
  console.log("Cat run");

  await Promise.all([firstLoop, secondLoop]);
  alert("All loop finished.");
});

async function randomImg(tag) {
  for (let i = 0; i < 5; i++) {
    const imgUrl = await findRandomImgPromise(tag);
    $("#" + tag).attr("src", imgUrl);
    await setTimeoutPromise(2 * 1000);
  }
}
