import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import useResult from "./hook/useResult"

const ResumeScreen = () => {
   const { name, email } = useResult()

   return(
      <View>
         <Text>Seja Bem Vindo</Text>
         <Text>{name}</Text>
         <Text>{email}</Text>
      </View>
   )
}

export default ResumeScreen