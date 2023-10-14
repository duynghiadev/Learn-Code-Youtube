function FooterCart(props) {
  
  const { cartAmount, onClearAllCart } = props
  
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
      <button
        onClick={handleClearAllCart}
        className='btn clear-btn'
      >
        clear cart
      </button>
    </footer>
  )
}

export default FooterCart
