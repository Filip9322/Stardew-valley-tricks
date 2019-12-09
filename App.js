import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ courseGoals, setCourseGoals ] = useState([]);

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  }
  const addGoalHandler   = () => {
    //setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals( currentGoals => [...currentGoals,
        { key: Math.random().toString(), value: enteredGoal }]
    );
  }

  return (
    <View style={ styles.screen }>
      <Text>Stardew Valley Tricks and Calculator</Text>
      <View style={ styles.contRow }>
        <TextInput
          placeholder="Set Goal..."
          style={ styles.txtInput }
          onChangeText= { goalInputHandler }
          value = { enteredGoal }
        />
        <Button style={ styles.bt } title="ADD" onPress={ addGoalHandler } />
      </View>
      <FlatList
       data={courseGoals}
       renderItem={ itemData => (
         <View>
           <Text>{ itemData.item.key } { itemData.item.value }</Text>
         </View>
         )}
      />
    </View>
  );
}

const styles  = StyleSheet.create({
  contRow : { flexDirection: 'row' , alignItems: 'flex-end'},
  screen  : { padding: 30 },
  txtInput: { borderBottomWidth: 1, borderBottomColor: 'black',
              padding: 10, width: '80%'
            },
  bt      : { padding:'10 0' }
});