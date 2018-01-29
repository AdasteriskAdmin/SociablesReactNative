import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartGame from './components/StartGame';

export default class App extends React.Component {

  startGameHandler = () => {

  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StartGame startGame={this.startGameHandler} />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
