import React from 'react';
import { Button } from 'react-native';

const startGame = props => {

    

    return (
      <Button title="Start Game" onPress={props.onStartGame} />

    );


};

export default startGame;
