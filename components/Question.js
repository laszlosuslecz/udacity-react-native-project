import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

import { getMockData } from '../utils/MockData'

class Question extends Component {
  state = {
    showAnswer: false
  }

  checkAnswer = () => {
    this.setState({ showAnswer: true })
  }

  render() {

    const MockData = getMockData()

//TODO: an onPress handler method for the buttons
    if (this.state.showAnswer) {
      return(
        <View style={styles.container}>
          <Text style={styles.qanda}>{Mockdata.React.questions.answer}</Text>
          <TouchableOpacity
            style={styles.button}
          >
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <Text style={styles.qanda}>{Mockdata.React.questions.question}</Text>
        <TouchableOpacity
          onPress={this.checkAnswer}
          style={styles.button}
        >
          <Text>Show Answer</Text>
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
  },
  qanda: {
    fontSize: 25,
  },
  button: {
    flexDirection: 'row',
    width: 150,
    height: 40, 
  }
})

export default Question