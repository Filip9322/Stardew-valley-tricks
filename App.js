import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <Text>Stardew Valley Tricks and Calculator</Text>
      <View>
        <TextInput placeholder="Set Goal..." style={{borderBottomWidth: 1, borderBottomColor: 'black', padding: 10}}/>
        <Button title="ADD"/>
      </View>
      <View>
      
      </View>
    </View>
  );
}