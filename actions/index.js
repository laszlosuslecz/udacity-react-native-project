export const FETCH_DECKS = 'FETCH_DECKS'
export const CREATE_DECK = 'CREATE_DECK'

export function fetchDecks (decks) {
  return {
    type: 'FETCH_DECKS',
    decks,
  }
}

export function createDeck (deck) {
  return {
    type: 'CREATE_DECK',
    deck,
  }
}