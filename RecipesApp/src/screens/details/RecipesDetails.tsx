import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native"
import { RecipesDetailsRouteProp } from "./interface";
import styles from "./Styles";

const RecipesDetails = () => {

   const {params: { recipe }} = useRoute<RecipesDetailsRouteProp>()

   return(
      <View>
         { recipe.strMealThumb ? 
            <Image source={{uri: recipe.strMealThumb }} style={styles.cover}/> 
            : null
         }
         <Text style={styles.title}> {recipe.strMeal} </Text>
         <Text style={styles.content}> {recipe.strInstructions} </Text>
      </View>
   )
}

export default RecipesDetails;