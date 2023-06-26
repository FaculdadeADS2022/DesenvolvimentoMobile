import { MyButtonProps } from "./interface";
import { ButtonContainer, ButtonText } from "./styles";

const MyButton = ({title, onPress, variant = 'default'}: MyButtonProps) => {
   return(
      <ButtonContainer onPress={onPress} variant={variant}>
         <ButtonText variant={variant}>{title}</ButtonText>
      </ButtonContainer>
   )
}

export default MyButton;