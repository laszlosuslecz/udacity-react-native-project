import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

export default class DeckView extends React.Component {
  render() {
    return(
      <View>
        <Text>Deck View</Text>
        <TouchableOpacity>
          <Text>Create a deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}