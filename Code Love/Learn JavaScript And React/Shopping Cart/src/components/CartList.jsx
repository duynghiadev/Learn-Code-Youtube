import CartItem from './CartItem'

function CartList(props) {
  const { carts, onClickRemove, onClickIncrement } = props

  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      return (
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          onClickRemove={onClickRemove}
          onClickIncrement={onClickIncrement}
        />
      )
    })
    return cartListRender
  }

  return <div>{cartRenderList()}</div>
}
export default CartList
