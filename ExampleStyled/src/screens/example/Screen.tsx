import { StyleSheet } from "react-native";
import { Text, View } from "react-native"
import styled from "styled-components/native";
import MyButton from "../../components/button/MyButton";

const styles = StyleSheet.create({
   message:{
      fontSize: 24,
      color: 'blue',
      fontStyle: 'italic'
   }
})

const Message = styled.Text`
   font-size: 22px;
   color: #370076;
   text-decoration: underline;
`

const ExampleScreen = () =>{
   return(
      <View>
         <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold'}}>
            Olá, meu chapa....
         </Text>

         <Text style={styles.message}>
            Ao clicar neste botão
         </Text>

         <Message>Você falecerá em instantes...</Message>

         <MyButton title="Salvar" onPress={() => null} variant="action"/>
      </View>
   )
}

export default ExampleScreen;