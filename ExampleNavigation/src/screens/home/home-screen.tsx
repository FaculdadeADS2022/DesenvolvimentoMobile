import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { AppNavigatorProps } from "../../navigation/app";

const HomeScreen = () => {
   const navigation = useNavigation<AppNavigatorProps>()

   const openSecondScreen = () => {
      navigation.navigate("Second", { message: "Message from Home!" })
   }

   return(
      <View>
         <Text> This is the home screen! </Text>
         <Button title="Go to Second" onPress={openSecondScreen}/>
      </View>
   )
}

export default HomeScreen;