const CartItem = () => {
  return (
    <tr>
      <td>
        <img src='images/product1.jpg' className='img-fluid rounded' alt='product1' />
      </td>
      <td>
        <span className='item-name'>Lenovo ThinkPad</span>
      </td>
      <td>
        <span className='item-quantity'>Qty: 2</span>
        <button type='button' className='btn btn-sm btn-primary ms-4 me-1'>
          <strong>-</strong>
        </button>
        <button type='button' className='btn btn-sm btn-primary'>
          <strong>+</strong>
        </button>
      </td>
      <td>
        <span className='item-price'>$39.98</span>
      </td>
      <td>
        <button className='btn btn-sm btn-danger btn-remove'>
          <i className='fas fa-trash-alt'></i>
        </button>
      </td>
    </tr>
  )
}

export default CartItem
