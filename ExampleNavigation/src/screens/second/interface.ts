import { RouteProp } from "@react-navigation/native"
import { AppStackParamList } from "../../navigation/app/interface"

export type SecondScreenParams = {
   message: string
}

export type SecondScreenRouteProp = RouteProp<AppStackParamList, 'Second'>