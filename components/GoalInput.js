import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  }

  return (
    <View style={ styles.contRow }>
        <TextInput
          placeholder="Set Goal..."
          style={ styles.txtInput }
          onChangeText= { goalInputHandler }
          value = { enteredGoal }
        />
        <Button style={ styles.bt } title="ADD" onPress={ props.onAddGoal.bind(this, enteredGoal) } />
    </View>
  );
}

const styles = StyleSheet.create({
  contRow : { flexDirection: 'row' , alignItems: 'flex-end'},
  txtInput: { borderBottomWidth: 1, borderBottomColor: 'black',
              padding: 10, width: '80%'
            },
  bt      : { padding:'10 0' }
});

export default GoalInput;