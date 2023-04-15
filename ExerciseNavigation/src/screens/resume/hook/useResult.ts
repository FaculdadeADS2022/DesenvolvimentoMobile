import { useRoute } from "@react-navigation/native";
import { ResumeScreenRouteProp } from "../interface";
import { UseResumeResult } from "./interface";

const useResult = (): UseResumeResult => {
   const { params } = useRoute<ResumeScreenRouteProp>()

   return{
      name: params.name,
      email: params.email
   }
}

export default useResult;