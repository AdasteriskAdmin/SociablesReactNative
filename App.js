import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartGame from './components/StartGame';
import RuleCard from './components/RuleCard';

export default class App extends React.Component {

  
  startGameHandler = () => {
    console.log("Starting Game...");
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>Get litty</Text>
        <StartGame onStartGame={this.startGameHandler} />
        <RuleCard />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
