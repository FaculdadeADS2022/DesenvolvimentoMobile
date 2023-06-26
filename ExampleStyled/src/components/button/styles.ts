import styled from "styled-components/native";
import { MyButtonBaseProps, MyButtonContainerProps } from "./interface";

const backgroundsCollors = {
   'action': 'green',
   'error': 'red',
   'default': '#cdcdcd'
}

const textCollors = {
   'action': 'white',
   'error': 'blue',
   'default': 'black',
}

export const ButtonContainer = styled.Pressable<MyButtonContainerProps>`
   padding: 8px;
   align-items: center;
   background-color: ${props => backgroundsCollors[props.variant ?? 'default']};
   border-radius: 10px;
`

export const ButtonText = styled.Text<MyButtonBaseProps>`
   color: ${props => textCollors[props.variant ?? 'default']};
   font-size: 20px;
`