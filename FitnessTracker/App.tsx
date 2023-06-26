import { NavigationContainer } from "@react-navigation/native"
import AppThemeProvider from "./src/theme/AppThemeProvider";
import { AppNavigator } from "./src/navigation";

const App = () => {
  return(
    <AppThemeProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </AppThemeProvider>
  )
}

export default App;