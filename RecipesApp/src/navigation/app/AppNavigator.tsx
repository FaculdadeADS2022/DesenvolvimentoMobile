import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";
import { RecipesCategory } from "../../screens/categoryList";
import { RecipesList } from "../../screens/recipesList";
import { RecipesDetails } from "../../screens/details";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
   return(
      <Stack.Navigator initialRouteName="Category">
         <Stack.Screen name="Category" component={RecipesCategory}/>
         <Stack.Screen name="RecipeList" component={RecipesList}/>
         <Stack.Screen name="RecipeDetail" component={RecipesDetails}/>
      </Stack.Navigator>
   )
}

export default AppNavigator;