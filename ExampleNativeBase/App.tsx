import ExampleScreen from "./src/screens/example/ExampleScreen";
import AppThemeProvider from "./src/theme/AppThemeProvider";

const App = () => {

  return(
    <AppThemeProvider>
      <ExampleScreen/>
    </AppThemeProvider>
  )
}

export default App;
