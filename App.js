import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [ todoItem, setTodoItem ] = useState('');
  const [ todoList, setTodoList ] = useState([]);

  const addTodoList = () => {
    setTodoList([ ...todoList, todoItem ])
    console.log(todoList)
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput  
          placeholder="Enter Todo Item"
          style={ styles.textInput }
          // onChangeText={ text => console.log(text) }
          onChangeText={ text => setTodoItem(text)}
          value={ todoItem }
          />
        <Button
          title="Add Todo"
          // onPress={() => console.log("Button Clicked")}
          onPress={ addTodoList }
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
