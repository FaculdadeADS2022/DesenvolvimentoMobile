import { Contact } from "../model"

export const findAll = (): Contact[] => {
   const result: Contact[] = []

   for (let i = 1; i <= 100; i++){
      result.push({
         id: i,
         name: `Contato ${i}`,
         email: `contato${i}@gmail.com`
      })
   }

   return result

}