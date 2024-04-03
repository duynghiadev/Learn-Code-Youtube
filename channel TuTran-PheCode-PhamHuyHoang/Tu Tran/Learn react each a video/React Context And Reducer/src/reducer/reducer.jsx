export const initialState = {
  reservations: [],
  tables: []
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_CUSTOMER_TO_RESERVATION_LIST':
      return {
        ...state,
        reservations: [...state.reservations, payload]
      }

    case 'ADD_CUSTOMER_TO_TABLE_LIST':
      return {
        ...state,
        tables: [...state.tables, payload]
      }

    case 'REMOVE_CUSTOMER_FROM_RESERVATION_LIST':
      // const customerId = payload.customerId
      const { customerId } = payload
      const reservations = state.reservations.filter(
        (customer) => customer.customerId !== customerId
      )
      return {
        ...state,
        reservations
      }

    default:
      return state
  }
}
