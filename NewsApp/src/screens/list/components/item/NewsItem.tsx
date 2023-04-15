import { Image, Pressable, Text, View } from "react-native"

import { NewsItemProps } from "./interface";
import styles from "./Style";
import { dateUtils } from "../../../../utils/date";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "../../../../navigation/app";
import { memo } from "react";

const NewsItem = ({ article }: NewsItemProps) => {

   const navigator = useNavigation<AppNavigatorProps>()

   const openDetails = () => {
      navigator.navigate('Details', { article })
   }

   return(
      <Pressable style={styles.container} onPress={openDetails}>

         { article.urlToImage ? 
            <Image source={{uri: article.urlToImage }} style={styles.cover}/> 
            : null
         }

         <Text style={styles.title}> {article.title} </Text>
         <View style={styles.detailsContainer}>
               <Text style={styles.source}> {article.source.name} </Text>
               <Text style={styles.data}> {dateUtils.formatDate(article.publishedAt)} </Text>
         </View>
      </Pressable>
   )
}

export default memo(NewsItem);