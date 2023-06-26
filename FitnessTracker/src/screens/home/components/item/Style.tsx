import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 16,
      marginVertical: 8,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000000',
      shadowOpacity: 0.1,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 2 }
   },
   title: {
      margin: 10,
      fontSize: 18,
      fontWeight: 'bold',
   },
   data: {
      textAlign: 'right',
      fontSize: 12,
      flex: 0.5,
   },
   label: {
      textAlign: 'left',
      marginLeft: 15,
      fontSize: 13,
   }
})

export default styles;