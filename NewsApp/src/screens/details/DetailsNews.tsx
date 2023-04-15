import { Button, Image, Linking, ScrollView, Text, View } from "react-native"
import styles from "./Styles"
import { useRoute } from "@react-navigation/native"
import { DetailsNewsRouteProp } from "./interface"
import { dateUtils } from "../../utils/date"

const DetailsNews = () => {
   const { params: { article }} = useRoute<DetailsNewsRouteProp>()

   const openArticle = () => {
      Linking.openURL(article.url)
   }
   return (
      <ScrollView contentContainerStyle={styles.container}>
         <View style={styles.container}>
            { article.urlToImage ? 
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
            : null
            }

            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.source}>
               {`${article.source.name} - ${dateUtils.formatDate(article.publishedAt)}`}
            </Text>
            <Text style={styles.content}>{article.content}</Text>

               <Button onPress={openArticle} title="Continue lendo"/>
         </View>
      </ScrollView>
   )
}

export default DetailsNews