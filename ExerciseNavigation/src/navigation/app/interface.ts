import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ResumeScreenParams } from "../../screens/resume/interface"

export type AppStackParamList = {
   Form: undefined
   Resume: ResumeScreenParams
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>