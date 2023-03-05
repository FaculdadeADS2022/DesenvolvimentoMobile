import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native/types';

  const App = () => {
    const [name, setName] = useState('')

    const sayHello = () => {
      Alert.alert('Hello', `Hello, $(name)!`)
    }

    return (
      <View>
        <Text> Hello, World!</Text>
        <TextInput onChangeText={setName}/>
        <Button title='Hello' onPress={sayHello}></Button>
      </View>
    )
  }

export default App;
