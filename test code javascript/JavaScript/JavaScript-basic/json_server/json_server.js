var courseApi = "http://localhost:3000/courses";

function handleUpdateCourse(id) {
  fetch(postApis)
    .then((response) => response.json())
    .then(function (data) {
      return (result = data.find((element) => element.id === id));
    })
    .then(function (result) {
      var name = document.querySelector('input[name="name"]');
      var description = document.querySelector('input[name="description"]');
      var btnCreateCourse = document.querySelector(".create");
      name.value = result["name"];
      description.value = result["description"];
      btnCreateCourse.classList.remove("create");
      btnCreateCourse.innerHTML = "Save";
      btnCreateCourse.classList.add("save");
      var btnUpdateCourse = document.querySelector(".save");

      btnUpdateCourse.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector(
          'input[name="description"]'
        ).value;
        var dataUpdate = { name: name, description: description };
        handleUpdateCourse(id, dataUpdate);
      };
    });
  function handleUpdateCourse(id, data) {
    var options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(postApis + "/" + id, options)
      .then(function (response) {
        response.json();
      })
      .then(window.location.reload());
  }
}
