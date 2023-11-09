const products = [
  {
    id: 1,
    name: 'New Balance 237 Classic',
    image:
      'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/WS237VB-1_360x.jpg?v=1667460153',
    price: '3,400,000'
  },
  {
    id: 2,
    name: 'New Balance Nb Fw 327',
    image:
      'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/MS327DT-1_360x.jpg?v=1679998777',
    price: '2,500,000'
  },
  {
    id: 3,
    name: 'New Balance Roav Fresh',
    image:
      'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/WROVXCW2-1_360x.jpg?v=1667460148',
    price: '1,600,000'
  },
  {
    id: 4,
    name: 'New Balance 200 Lifestyle',
    image:
      'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/SMF200N1-1_540x.jpg?v=1678435029',
    price: '470,000'
  }
]

let productInCart = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : []

function saveToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(productInCart))
}

//Index page
function renderProducts() {
  let data = ``
  products.map((value) => {
    data += `
      <div class='col-3'>
        <div class='card'>
          <img src='${value.image}' class='card-img-top' alt=''>
          <div class='card-body'>
            <h5 class='card-title'>${value.name}</h5>
            <p class='card-text'>${value.price}</p>
            <button onclick='addToCart(${value.id})' class='btn btn-primary'>Add to cart</button>
          </div>
        </div>
      </div>
    `
  })
  document.getElementById('products').innerHTML = data
}

function addToCart(id) {
  let checkProduct = productInCart.some((value) => value.id === id)
  console.log('>>> checkProduct', checkProduct)
  if (!checkProduct) {
    let product = products.find((value) => value.id === id)
    productInCart.unshift({
      ...product,
      quantity: 1
    })
    saveToLocalStorage()
    calculatorTotal()
  } else {
    let getIndex = productInCart.findIndex((value) => value.id === id)
    console.log('>>> getIndex', getIndex)
    let product = productInCart.find((value) => value.id === id)
    console.log('>>> product', product)
    productInCart[getIndex] = {
      ...product,
      quantity: ++product.quantity
    }
    saveToLocalStorage()
    calculatorTotal()
  }
}

function calculatorTotal() {
  document.getElementById('total').innerHTML = productInCart.length
}

function indexLoadPage() {
  renderProducts()
  calculatorTotal()
}
