function render(html) {
  var addList = document.querySelector("ul");
  addList.innerHTML = html;
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`);
