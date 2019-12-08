import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={ styles.screen }>
      <Text>Stardew Valley Tricks and Calculator</Text>
      <View style={ styles.contRow }>
        <TextInput style={ styles.txtInput } placeholder="Set Goal..."/>
        <Button style={ styles.bt } title="ADD"/>
      </View>
    </View>
  );
}

const styles  = StyleSheet.create({
  contRow : { flexDirection: 'row' , alignItems: 'flex-end'},
  screen: { padding: 30 },
  txtInput: { borderBottomWidth: 1, borderBottomColor: 'black',
              padding: 10, width: '80%'
            },
  bt : { padding:'10 0' }
});