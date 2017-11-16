import {
  SIGN_IN_CONFIRM,
  MARK_ASSISTANCE
} from '../actions/types'

/* Deberíamos traer la data del json y almacenarlo en una variable (USERS) */


const INITIAL_STATE = {
  // Hacer algo similar
  /*originalProducts: PRODUCTS, // lista original de productos
  filterText: '', // texto que ingresa el usuario para buscar
  inStockOnly: false, // valor del checkbox de stock only
  filteredProducts: PRODUCTS, // inicialmente no hay ningun filtro*/
}

export default (state = INITIAL_STATE, action) => {
  let newState = {}
  switch (action.type) {
    case SIGN_IN_CONFIRM:
      newState = {
        ...state,
        filterText: action.payload
      }
      break
      case MARK_ASSISTANCE:
      newState = {
        ...state,
        inStockOnly: action.payload
      }
      break
      default:
      return state
  }
  // Usar esta parte, adaptar a nuestra aplicación
  /*if (action.type === FILTER_TEXT_CHANGED || action.type === IN_STOCK_ONLY_CHANGED) {
    const filteredProducts = state.originalProducts.filter((product) => {
      const filterText =
            action.type === FILTER_TEXT_CHANGED ?
            action.payload.trim() :
      state.filterText.trim()
      const inStockOnly =
            action.type === IN_STOCK_ONLY_CHANGED ?
            action.payload :
      state.inStockOnly

      return (
        (inStockOnly ? product.stocked : true) &&
        product.name.match(new RegExp(filterText, 'ig'))
      )
    })

    newState = {
      ...newState,
      filteredProducts
    }
  }
*/
  return newState
}
