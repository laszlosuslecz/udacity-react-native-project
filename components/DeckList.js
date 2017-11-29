import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

export default class DeckList extends React.Component {

  goToCreateDeck = () => this.props.navigation.navigate('CreateDeck')

  render() {
    return(
      <View>
        <Text>Decklist</Text>
        <TouchableOpacity onPress={this.goToCreateDeck}>
          <Text>Create a deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}