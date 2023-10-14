function CartItem(props) {
  const { cartItem } = props

  return (
    <article className='cart-item'>
      <img src={cartItem.img} alt='' />
      <div>
        <h4>{cartItem.title}</h4>
        <h4 className='item-price'>{cartItem.price}</h4>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        <p className='amount'>{cartItem.amount}</p>
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default CartItem
