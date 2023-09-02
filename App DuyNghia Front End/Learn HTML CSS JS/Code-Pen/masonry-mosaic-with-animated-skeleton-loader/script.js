/*
 @codespud

 masonry/mosaic grid using display:grid
 with skeleton loader


 #masonry #grid #vanillajs
 #animated

*/
const data = [
  {
    image: "https://loremflickr.com/300/300",
    text: "happy"
  },
  {
    image: "https://loremflickr.com/600/300",
    text: "snow"
  },
  {
    image: "https://loremflickr.com/600/300",
    text: "tiger"
  },
  {
    image: "https://loremflickr.com/300/300",
    text: "butter"
  },
  {
    image: "https://loremflickr.com/600/300",
    text: "bored"
  }
];

document.querySelector("button").addEventListener("click", function () {
  reload();
});

const template = document.querySelector(".grid-item");
const container = document.querySelector(".grid");
const rowHeight = 15;
const rowGap = 30;
let counter = 0;

function loadImages() {
  data.forEach((item, i) => {
    let gridItem = template.cloneNode(true);
    let imageNode = gridItem.querySelector(".grid-image");
    let textNode = gridItem.querySelector(".grid-text");

    counter++;

    imageNode.innerHTML = `<img src="${item.image + "?" + i + counter}"/>`;
    textNode.innerHTML = item.text;

    container.append(gridItem);

    gridItem.querySelector("img").addEventListener("load", onImageLoad);
  });
}
function onImageLoad(e) {
  const image = e.currentTarget;
  const nodeParent = image.parentNode.parentNode;
  const imageHeight = image.height + 40;
  const rowSpan = Math.ceil(imageHeight / (rowHeight + rowGap));

  nodeParent.style.gridRowEnd = `span ${rowSpan}`;
  nodeParent.classList.remove("grid-item-loading");
}

function reload() {
  container.innerHTML = "";
  loadImages();
  setTimeout(loadImages, 2000);
  setTimeout(loadImages, 4000);
}

reload();