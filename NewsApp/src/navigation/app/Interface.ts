import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DetailsNewsScreenParams } from "../../screens/details/interface"

export type AppStackParamList = {
   List: undefined,
   Details: DetailsNewsScreenParams,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>