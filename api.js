import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'Flashcards:Decks'

export function getAll () {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((res) => JSON.parse(res))
}

export function saveDeck ({ deck, key }) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [key]: deck, 
    })
  )
}