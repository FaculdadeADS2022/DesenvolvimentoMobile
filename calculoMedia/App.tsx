import { Button, Text, TextInput, View } from "react-native"

const App = () => {
  return(
    <View style={{flex: 1, padding: 16, justifyContent: 'center'}}>
      <Text style={{fontSize: 16, color: 'black'}}>Km Percorrida</Text>
      <TextInput/>

      <Text style={{fontSize: 16, color: 'black'}}>Quantidade Abastecida</Text>
      <TextInput/>

      <Text style={{fontSize: 16, color: 'black'}}>A Média de KM é</Text>
      <Text style={{fontSize: 16, color: 'black'}}>99,9</Text>
      <Text style={{fontSize: 16, color: 'black'}}>km/l</Text>

      <Button title="calcular" onPress={() => null}></Button>
    </View>
  )
}

export default App