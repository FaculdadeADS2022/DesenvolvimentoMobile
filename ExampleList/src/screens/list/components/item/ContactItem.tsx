import { Text, View } from "react-native"
import { ContactItemProps } from "./interface"
import Styles from "./style"

const ContactItem = ({ contact }: ContactItemProps) => {
   return(
      <View style={Styles.container}>
         <Text style={Styles.title}>{contact.name}</Text>
         <Text>{contact.email}</Text>
      </View>
   )
}

export default ContactItem