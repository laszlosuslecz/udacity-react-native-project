import {
  FETCH_DECKS,
  CREATE_DECK
} from '../actions'

function deckReducer(state = {}, action) {
  switch(action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case CREATE_DECK:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}

export default deckReducer