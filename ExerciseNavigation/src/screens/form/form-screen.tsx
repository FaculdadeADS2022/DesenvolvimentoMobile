import { Button, Text, TextInput, View } from "react-native"
import useForm from "./hook/useForm";

const FormScreen = () => {

   const { setName, setEmail, openResumeScreen } = useForm()

   return(
      <View>
         <Text>Nome</Text>
         <TextInput placeholder="Username" onChangeText={setName}/>
         <Text>Email</Text>
         <TextInput placeholder="Email" onChangeText={setEmail}/>
         <Button title="Enviar" onPress={openResumeScreen}/>
      </View>
   )
}

export default FormScreen