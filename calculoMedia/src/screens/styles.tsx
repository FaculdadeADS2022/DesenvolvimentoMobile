import { StyleSheet } from "react-native";

const calculomediaStyles = StyleSheet.create({
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
    cmediaText: {
        fontSize: 24, 
        color: 'black', 
        fontFamily: 'Prompt'
    },
    cmediaResult: {
        fontSize: 128, 
        includeFontPadding: false, 
        color: 'black', 
        fontFamily: 'Prompt'
    },
    resultado:{
        alignItems: 'center'
    }
})

export default calculomediaStyles