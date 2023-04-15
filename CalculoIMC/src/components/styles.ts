import { StyleSheet } from "react-native";

const imcResultStyles = StyleSheet.create({
    containerSecundary: {
        backgroundColor: 'white', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textMain: {
        fontSize: 20, 
        color: 'black'
    },
    imcText: {
        fontSize: 24, 
        color: 'black', 
        fontFamily: 'Prompt'
    },
    imcResult: {
        fontSize: 128, 
        includeFontPadding: false, 
        color: 'black', 
        fontFamily: 'Prompt'
    },
    resultado:{
        alignItems: 'center'
    }
})

export default imcResultStyles