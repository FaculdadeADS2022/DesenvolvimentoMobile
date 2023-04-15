import { RouteProp } from "@react-navigation/native"
import { AppStackParamList } from "../../navigation/app/interface"

export type ResumeScreenParams = {
   name: string,
   email: string
}

export type ResumeScreenRouteProp = RouteProp<AppStackParamList, 'Resume'>