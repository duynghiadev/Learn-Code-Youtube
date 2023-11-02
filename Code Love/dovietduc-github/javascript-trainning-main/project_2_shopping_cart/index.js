let carts = [
  {
    id: 1,
    title: 'Samsung Galaxy S7',
    price: 10,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
    amount: 2
  },

  {
    id: 2,
    title: 'google pixel ',
    price: 20,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
    amount: 1
  },

  {
    id: 3,
    title: 'Xiaomi Redmi Note 2',
    price: 50,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png',
    amount: 1
  }
]
const cartContainer = document.querySelector('.cart_container')
const spanElementTotalMoney = document.querySelector('.cart-total span')
const totalCartElement = document.querySelector('.total-amount')

function renderElement(product) {
  return `<article class="cart-item" data-id="${product.id}">
        <img src="${product.img}"
            alt="" />
        <div>
            <h4>${product.title}</h4>
            <h4 class="item-price">${product.price}</h4>
            <!-- {/* remove button */} -->
            <button class="remove-btn">remove</button>
        </div>
        <div>

            <!-- {/* increase amount */} -->
            <button class="amount-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                </svg>
            </button>

            <!-- {/* amount */} -->
            <p class="amount">${product.amount}</p>

            <!-- {/* decrease amount */} -->

            <button class="amount-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>

        </div>
    </article>`
}

function totalMoney(carts) {
  let totalMoney = 0

  for (const element of carts) {
    totalMoney += element.price * element.amount
  }

  return totalMoney
}

function totalCart(carts) {
  let totalCart = 0

  for (const element of carts) {
    totalCart += element.amount
  }

  return totalCart
}

function renderListProduct() {
  let htmlProduct = ''
  carts.map(function (product) {
    htmlProduct += renderElement(product)
  })
  cartContainer.insertAdjacentHTML('beforeend', htmlProduct)
}
function renderTotalMoney() {
  spanElementTotalMoney.textContent = totalMoney(carts)
}
function renderTotalCart() {
  totalCartElement.textContent = totalCart(carts)
}

function handleRemoveItemCart(event) {
  const clicked = event.target
  if (clicked.classList.contains('remove-btn')) {
    // remove dom
    const article = clicked.closest('.cart-item')
    article.remove()
    const id = article.dataset.id

    // cart
    carts = carts.filter(function (element) {
      return element.id !== +id
    })
    renderTotalMoney()
    renderTotalCart()
  }
}

// init data
renderListProduct()
renderTotalMoney()
renderTotalCart()

// init event
cartContainer.addEventListener('click', handleRemoveItemCart)
