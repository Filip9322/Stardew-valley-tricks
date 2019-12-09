import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
  return (
    <View style={ styles.listitem } >
      <Text>{ props.title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listitem: { marginVertical: 10, padding: 10, borderColor: '#51abc2',
              backgroundColor: '#39ce97', color: 'white' }
});

export default GoalItem;