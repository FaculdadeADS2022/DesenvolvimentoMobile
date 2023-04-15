import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RecipesDetailsScreenParams } from "../../screens/details/interface"
import { RecipesScreenParams } from "../../screens/recipesList/interface"

export type AppStackParamList = {
   Category: undefined,
   RecipeList: RecipesScreenParams,
   RecipeDetail: RecipesDetailsScreenParams,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>