import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native";
import type { SecondScreenRouteProp } from "./interface";

const SecondScreen = () => {
   const { params } = useRoute<SecondScreenRouteProp>()

   return(
      <View>
         <Text> This is the second screen! Congratulations, it's work! :D </Text>
         <Text>{params.message}</Text>
      </View>
   )
}

export default SecondScreen;