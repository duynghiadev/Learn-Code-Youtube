function FooterCart(props) {
  const { cartAmount, onClearAllCart } = props

  console.log('cartAmount:', cartAmount)
  console.log('onClearAllCart:', onClearAllCart)

  const handleClearAllCart = () => {
    onClearAllCart()
  }

  return (
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${cartAmount}</span>
        </h4>
      </div>
      <button className='btn clear-btn' onClick={handleClearAllCart}>
        clear cart
      </button>
    </footer>
  )
}

export default FooterCart
