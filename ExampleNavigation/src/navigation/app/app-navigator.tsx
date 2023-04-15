import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../../screens/home"
import { SecondScreen } from "../../screens/second"
import { AppStackParamList } from "./interface"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
   return(
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="Second" component={SecondScreen}/>
      </Stack.Navigator>
   )
}

export default AppNavigator