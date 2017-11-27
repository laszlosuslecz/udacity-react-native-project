import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'

import DeckList from './components/DeckList'
import CreateDeck from './components/CreateDeck'
import Deck from './components/Deck'


const Stack = StackNavigator({
  Main: {
    screen: DeckList,
  },
  CreateDeck: {
    screen: CreateDeck,
  }, 
  DeckView: {
    screen: Deck,
  },
})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
