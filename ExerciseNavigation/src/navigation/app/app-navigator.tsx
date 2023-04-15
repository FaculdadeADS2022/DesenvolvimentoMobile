import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FormScreen } from "../../screens/form"
import ResumeScreen from "../../screens/resume/resume-screen"

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
   return(
      <Stack.Navigator initialRouteName="Form" 
         screenOptions={{statusBarColor:'green', headerTintColor: 'blue', headerStyle: {backgroundColor: 'gray'}}}>
         <Stack.Screen name="Form" component={FormScreen}
            options={{title: 'Dados do usuário'}}/>
         <Stack.Screen name="Resume" component={ResumeScreen}
            options={{title: 'Resultado'}}/>
      </Stack.Navigator>
   )
}

export default AppNavigator