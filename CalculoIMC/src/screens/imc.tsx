import { View, TextInput, Text, Button } from "react-native"
import ImcResult from "../components/imc-result";
import { useImc } from "../hooks/use-imc";
import imcStyles from "./styles"

const Imc = () => {

        const {setPesoBoi, setAlturaBoi, calculate, imcBoi} = useImc();

    return(
        <View style={imcStyles.containerMain}>
            <Text style={imcStyles.textMain}>Peso</Text>
            <TextInput style={imcStyles.input} onChangeText={setPesoBoi} keyboardType="decimal-pad"/>
            <Text style={imcStyles.textMain}>Altura</Text>
            <TextInput style={imcStyles.input} onChangeText={setAlturaBoi} keyboardType="decimal-pad"/>

            <ImcResult imcBoi={imcBoi}/>

            <Button title="Calcular" onPress={calculate}></Button>
        </View>
    )
}

export default Imc