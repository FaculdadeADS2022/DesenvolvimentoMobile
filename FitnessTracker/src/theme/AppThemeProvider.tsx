import { extendTheme, NativeBaseProvider } from "native-base"
import { PropsWithChildren } from 'react'

const AppThemeProvider = ({children}: PropsWithChildren) =>{

   const {colors} = extendTheme({})

   const customTheme = extendTheme({
      colors: {
         primary: colors.darkBlue,
         secondary: colors.dark,
      },
   })

   return(
      <NativeBaseProvider theme={customTheme}>
         {children}
      </NativeBaseProvider>)
}

export default AppThemeProvider