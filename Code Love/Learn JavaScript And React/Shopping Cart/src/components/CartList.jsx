import CartItem from './CartItem'

function CartList(props) {
  const { carts, onClickRemove, onClickIncrement, onClickDecrement } = props

  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      return (
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          onClickRemove={onClickRemove}
          onClickIncrement={onClickIncrement}
          onClickDecrement={onClickDecrement}
        />
      )
    })
    return cartListRender
  }

  return <div>{cartRenderList()}</div>
}
export default CartList
