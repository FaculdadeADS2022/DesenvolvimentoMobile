import { RouteProp } from "@react-navigation/native"
import { AppStackParamList } from "../../navigation/interface"

export type RegisterScreenParams = {
   message: string
}

export type RegisterScreenRouteProp = RouteProp<AppStackParamList, 'Register'>