export default (state, action) => {
  switch (action.type) {
    case 'SET_CUSTOMERS':
      return {
        ...state,
        customers: action.payload,
        loading: false,
      }
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      }
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
