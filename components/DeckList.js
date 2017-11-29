import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

export default class DeckList extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home'
    }
  }

  goToCreateDeck = () => this.props.navigation.navigate('CreateDeck')

  render() {
    return(
      <View style={styles.container}>
        <Text>Decklist</Text>
        <TouchableOpacity onPress={this.goToCreateDeck}>
          <Text>Create a deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  }
})