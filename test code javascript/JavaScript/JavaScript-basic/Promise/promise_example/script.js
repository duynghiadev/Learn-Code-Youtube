// Promise
function httpGetAsync(theUrl, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

const promise2 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});



// chaining
currentPromise
  .then((data) => {
    document.getElementById("img_1").setAttribute("src", data.responseURL);
    return promise2;
  })
  .then((data) => {
    document.getElementById("img_2").setAttribute("src", data.responseURL);
    return promise3;
  })
  .then((data) => {
    document.getElementById("img_3").setAttribute("src", data.responseURL);
  })
  .catch((err) => {
    console.log(err);
  });
