/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button
} from 'react-native';
import Pupper from './pupper.js';
import Greetings from './greetings.js';
import Squares from './squares.js';
import FlexBoxes from './flexboxes.js';
import FlexDirections from './flexdirections.js';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// <Text style={styles.welcome}>
//   Welcome to React Native!
// </Text>
// <Text style={styles.instructions}>
//   To get started, edit App.js
// </Text>
// <Text style={styles.instructions}>
//   {instructions}
// </Text>

// <Greetings />
// <Text style={styles.bigblue}>
//   I am doggo.
// </Text>
// <Pupper />
// <FlexBoxes />

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex:1}}>
        <FlexDirections />
        <Button onPress={() => {Alert.alert('Hello')}}
          title="Press Button"
          color="purple" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
