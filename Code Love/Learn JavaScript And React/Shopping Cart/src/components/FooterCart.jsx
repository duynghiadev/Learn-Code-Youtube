function FooterCart(props) {
  const { cartAmount } = props

  return (
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>{cartAmount}</span>
        </h4>
      </div>
      <button className='btn clear-btn'>clear cart</button>
    </footer>
  )
}

export default FooterCart
