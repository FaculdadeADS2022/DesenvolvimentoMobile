import { useState } from "react"
import { View, TextInput, Text, Button } from "react-native"
import calculomediaStyles from "./styles"

const Imc = () => {
    const [kmPercorido, setkmPercorido] = useState('')
    const [qtdAbastecida, setqtdAbastecida] = useState('')
    const [mediaCalculada, setmediaCalculada] = useState<number>()

    const calculate = () => {
        const fqtdAbastecida = parseFloat(qtdAbastecida)
        const fkmPercorido = parseFloat(kmPercorido)
        const cmedia = fkmPercorido / (50 - fqtdAbastecida)
        setmediaCalculada(cmedia)
    }

    const formatNumber = (value: number): string => {
        const fmt = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 1, 
            maximumFractionDigits: 1
        })
        return fmt.format(value)
    }

    return(
        <View style={calculomediaStyles.containerMain}>
            <Text style={calculomediaStyles.textMain}>Peso</Text>
            <TextInput style={calculomediaStyles.input} onChangeText={setkmPercorido} keyboardType="decimal-pad"/>
            <Text style={calculomediaStyles.textMain}>Altura</Text>
            <TextInput style={calculomediaStyles.input} onChangeText={setqtdAbastecida} keyboardType="decimal-pad"/>

            <View style={calculomediaStyles.containerSecundary}>
                {mediaCalculada ?
                <View style={calculomediaStyles.resultado}>
                <Text style={calculomediaStyles.cmediaText}>A média de KM é:</Text>
                <Text style={calculomediaStyles.cmediaResult}>{formatNumber(mediaCalculada)}</Text>
                <Text style={calculomediaStyles.cmediaText}>KM/L:</Text>
                </View>
                :null
                }
            </View>

            <Button title="Calcular" onPress={calculate}></Button>
        </View>
    )
}

export default Imc