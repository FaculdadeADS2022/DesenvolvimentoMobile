import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexGrow: 1,
   },
   image: {
      height: '50%'
   },
   title: {
      margin: 10,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   content: {
      margin: 10,
      textAlign: 'justify',
   },
   source: { 
      fontSize: 12,
      fontStyle: 'italic',
      margin: 10,
      textAlign: 'center',
   },
})

export default styles