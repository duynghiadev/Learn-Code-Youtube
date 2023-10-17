/**
 * - Các bước truyền data từ component con lên component cha (thường cái này là truyền dưới dạng event)
 * 1. Kiểm tra xem event đã chạy ở component con chưa
 * 2. Truyền callback function từ cha cần thay đổi state dựa vào data con truyền lên đến component có event thành công
 * từ bước 1
 * 3. Chạy function callback từ con
 * 4. Kiểm tra xem function cha đã chạy chưa
 * 5. Dựa vào data truyền lên, thay đổi state làm app re-render dẫn đến => con, cháu re-render => hoàn thành đồng bộ
 * data
 */

function CartItem(props) {
  const { cartItem, onClickRemove, onClickIncrement } = props

  console.log('cartItem:', cartItem)
  console.log('onClickRemove:', onClickRemove)
  console.log('onClickIncrement:', onClickIncrement)

  const handleClickRemove = (id) => {
    onClickRemove(id)
  }

  const handleClickIncrement = (cartItem) => {
    onClickIncrement(cartItem)
  }

  return (
    <article className='cart-item'>
      <img src={cartItem.img} alt='' />
      <div>
        <h4>{cartItem.title}</h4>
        <h4 className='item-price'>{cartItem.price}</h4>
        <button className='remove-btn' onClick={() => handleClickRemove(cartItem.id)}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => handleClickIncrement(cartItem)}>
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
