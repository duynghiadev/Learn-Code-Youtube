import CartItem from './CartItem.jsx'

function CartList(props) {
  const { carts } = props
  // console.log(props)
  // console.log(props.carts)
  // console.log(props.carts[0])
  // console.log(props.carts[1])
  // console.log(props.carts[2])

  function cartRenderList() {
    const cartListRender = carts.map((cartItem) => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />
    })
    return cartListRender
  }

  return <div>{cartRenderList()}</div>
}

export default CartList
