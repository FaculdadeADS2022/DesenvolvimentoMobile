import { StyleSheet } from "react-native";

const imcStyles = StyleSheet.create({
    containerMain: {
        flex: 1, 
        padding: 25
    },
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
    input: { 
        borderWidth: 1, 
        borderColor: '#dedede', 
        borderRadius: 8,
        marginBottom: 16
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

export default imcStyles