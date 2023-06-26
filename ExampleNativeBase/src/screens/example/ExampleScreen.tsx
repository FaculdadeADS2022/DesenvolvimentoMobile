import { VStack, Button, FormControl, Input } from "native-base";

const ExampleScreen = () => {
   return(
      <VStack>
         <FormControl>
            <FormControl.Label> informe seu nome:</FormControl.Label>
            <Input/>
            <Button> Clica ni mim bb </Button>
         </FormControl>
      </VStack>
   )
}

export default ExampleScreen;