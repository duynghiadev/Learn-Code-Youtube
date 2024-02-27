var upload = document.querySelector("#input-img");
var preview = document.querySelector(".preview");
var error = document.querySelector(".error");

upload.addEventListener("change", function (e) {
  var file = upload.files[0];

  if (!file) {
    return;
  }

  if (!file.name.endsWith(".jpg")) {
    error.innerHTML = `Hinh anh phai duoc dinh dang jpeg`;
    return;
  } else {
    error.innerHTML = ``;
  }

  if (file.size / (1024 * 1024) > 5) {
    error.innerHTML = `Chi duoc upload anh < 5 MB`;
    return;
  } else {
    error.innerHTML = ``;
  }

  var img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  preview.appendChild(img);
});
