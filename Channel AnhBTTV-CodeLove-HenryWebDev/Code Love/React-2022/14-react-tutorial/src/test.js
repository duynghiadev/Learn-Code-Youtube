// truyền data từ parent đến child
console.log('duynghiadev')

// follow chạy của code trong project này
// index.html => chứa App.jsx => render content App Component to div #root

function app() {
  let app_variable = 'parent to child'
  const handleDelete = function (dataFromChild) {
    console.log('dataFromChild', dataFromChild)
  }
  child(handleDelete)
}

function child(callback) {
  const childData = 'child data'
  callback(childData)
}

app()

// truyền data từ child -> parent
