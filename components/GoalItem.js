import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={ props.onDelete.bind(this, props.id) }>
      <View style={ styles.listitem } >
        <Text>{ props.title }</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listitem: { marginVertical: 10, padding: 10, borderColor: '#51abc2',
              backgroundColor: '#39ce97', color: 'white' }
});

export default GoalItem;