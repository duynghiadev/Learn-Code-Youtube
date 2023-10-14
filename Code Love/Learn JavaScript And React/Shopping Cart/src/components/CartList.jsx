import CartItem from './CartItem'

function CartList(props) {
  const { carts } = props

  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      return <CartItem cartItem={cartItem} key={cartItem.id} />
    })
    return cartListRender
  }

  return <div>{cartRenderList()}</div>
}
export default CartList
