import { useState } from "react"
import { View, TextInput, Text, Button } from "react-native"
import imcStyles from "./styles"

const Imc = () => {
    const [pesoBoi, setPesoBoi] = useState('')
    const [alturaBoi, setAlturaBoi] = useState('')
    const [imcBoi, setImcBoi] = useState<number>()

    const calculate = () => {
        const fAlturaBoi = parseFloat(alturaBoi)
        const fPesoBoi = parseFloat(pesoBoi)
        const imc = fPesoBoi / (fAlturaBoi * fAlturaBoi)
        setImcBoi(imc)
    }

    const formatNumber = (value: number): string => {
        const fmt = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 1, 
            maximumFractionDigits: 1
        })
        return fmt.format(value)
    }

    return(
        <View style={imcStyles.containerMain}>
            <Text style={imcStyles.textMain}>Peso</Text>
            <TextInput style={imcStyles.input} onChangeText={setPesoBoi} keyboardType="decimal-pad"/>
            <Text style={imcStyles.textMain}>Altura</Text>
            <TextInput style={imcStyles.input} onChangeText={setAlturaBoi} keyboardType="decimal-pad"/>

            <View style={imcStyles.containerSecundary}>
                {imcBoi ?
                <View style={imcStyles.resultado}>
                <Text style={imcStyles.imcText}>Seu IMC é:</Text>
                <Text style={imcStyles.imcResult}>{formatNumber(imcBoi)}</Text>
                </View>
                :null
                }
            </View>

            <Button title="Calcular" onPress={calculate}></Button>
        </View>
    )
}

export default Imc