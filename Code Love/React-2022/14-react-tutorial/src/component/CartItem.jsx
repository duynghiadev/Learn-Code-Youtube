function CartItem() {
  return (
    <article className='cart-item'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSddr6Hhm_qWP1q6YnqYm0dg8ccyN-Efno2-bwF9EJ8cHOGyjRXYt2G0EjUi9hImQyRw&usqp=CAU'
        alt=''
      />
      <div>
        <h4>iphone</h4>
        <h4 className='item-price'>10</h4>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>

        <p className='amount'>2</p>

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
