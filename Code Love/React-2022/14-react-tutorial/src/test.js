// truyền data từ parent đến child
console.log('duynghiadev')

// follow chạy của code trong project này
// index.html => chứa App.jsx => render content App Component to div #root

function app() {
  let app_variable = 'parent to child'
  child(app_variable)
}

function child(parentToChild) {
  console.log(parentToChild)
}

app()
