import * as actionType from '../actions/actionType'

const initialState = {
  cartAr: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BUY_PRODUCT:
      const productInCart = state.cartAr.find((p) => p.id === action.payload.id)

      if (!productInCart) {
        return {
          cartAr: [...state.cartAr, action.payload]
        }
      } else {
        let newcart = state.cartAr

        const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id)
        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1
        }

        return { cartAr: [...newcart] }
      }

    case actionType.DELETE_PRODUCT:
      let newcart = state.cartAr
      const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id)
      newcart.splice(objIndex, 1)
      console.log('>>newcart', newcart)

      return { cartAr: [...newcart], totalprice: 0 }

    default:
      return state
  }
}

export default cartReducer
