import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { AppNavigatorProps } from "../../../navigation/app"
import { UseFormResult } from "./interface"

const useForm = (): UseFormResult => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const navigation = useNavigation<AppNavigatorProps>()

   const openResumeScreen = () => {
      navigation.navigate("Resume", {name, email})
   }

   return {
      setName,
      setEmail,
      openResumeScreen
   }
}

export default useForm;