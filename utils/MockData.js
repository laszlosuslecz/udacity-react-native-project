import { AsyncStorage } from 'react-native'
import { STORAGE_KEY } from '../api'

export function getMockData () {

	const MockData = {
		React: {
			title: 'React',
			questions: [
				{
					question: 'What is React?',
					answer: 'A library for managing user interfaces'
				},
				{
					question: 'Where do you make Ajax requests in React?',
					answer: 'The componentDidMount lifecycle event'
				}
			]
		},
		JavaScript: {
			title: 'JavaScript',
			questions: [
				{
					question: 'What is a closure?',
					answer: 'The combination of a function and the lexical environment within which that function was declared.'
				}
			]
		}
	}

	AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(MockData));
	
	return MockData
}

export function setupInitialResults (results) {
  return results === null
    ? getMockDataData()
    : JSON.parse(results);
}