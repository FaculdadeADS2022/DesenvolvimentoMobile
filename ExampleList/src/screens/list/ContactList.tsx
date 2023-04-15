import { useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native"
import { Contact } from "../../data/model";
import { contactService } from "../../data/service";
import { Divider } from "./components/divider";
import { ContactItem } from "./components/item";

const ContactList = () => {
   const [contacts, setContacts] = useState<Contact[]>([]);

      useEffect(() => {
         const result = contactService.findAll()
         setContacts(result)
      }, [setContacts])

      const renderContact = useCallback(({ item }: ListRenderItemInfo<Contact>) => {
         return <ContactItem contact={item} />
      }, [])

      const contactKeyExtractor = useCallback((contact: Contact) => contact.id.toString(), [])

   return(
      <FlatList 
         data={contacts}
         renderItem={renderContact}
         keyExtractor={contactKeyExtractor}
         ItemSeparatorComponent={() => <Divider/>}
      />
   )
}

export default ContactList;