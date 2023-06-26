import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RegisterScreenParams } from "../screens/register/interface"

export type AppStackParamList = {
   Home: undefined,
   Register: RegisterScreenParams
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>