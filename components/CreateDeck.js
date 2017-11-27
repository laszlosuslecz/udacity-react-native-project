import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import { connect } from 'react-redux'

import { createDeck } from '../actions'

export default class CreateDeck extends Component {

  state = {
    title: ''
  }

  onSubmit = () => {
    const { title } = this.state
    this.setState({title: ''})
		this.props.navigation.navigate('Deck')
  }
 
  render() {
    return(
      <View>
        <Text>Create Deck</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please give a title for the new deck!"
          onChangeText={(title) => this.setState({title})}    
        ></TextInput>
        <TouchableOpacity
          onPress={this.onSubmit.bind(this)}
        >
          <Text>Add to the deck list</Text>
        </TouchableOpacity>
      </View>
    )
  }
}