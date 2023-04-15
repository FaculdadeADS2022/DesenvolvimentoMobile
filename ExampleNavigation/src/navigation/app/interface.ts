import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { SecondScreenParams } from "../../screens/second"

export type AppStackParamList = {
   Home: undefined
   Second: SecondScreenParams
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>