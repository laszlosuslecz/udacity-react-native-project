import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

export default class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  render() {

    const { deck } = this.props

    return(
      <Text>Single Deck View - {this.props.navigation.state.params.title}</Text>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { title } = navigation.state.params

  return {
    title,
    deck: decks[title]
  }

}

//export default connect(mapStateToProps, nil)(Deck)