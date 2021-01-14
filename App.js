import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput  
          placeholder="Enter Todo Item"
            style={ styles.textInput }
          />
        <Button
          title="Add Todo"
          onPress={() => console.log("Button Clicked")}
        />
      </View>
      <View>
        <Text>List of Todos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },

  textInput: {
    padding: 10,
    borderColor: 'black',
    marginBottom: 10,
    borderWidth: 1
  }

});
