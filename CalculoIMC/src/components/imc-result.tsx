import { Text, View } from "react-native";
import { formatNumber } from "../utils/number-utils";
import { ImcResultProps } from "./interfaces";
import imcResultStyles from "./styles";

const ImcResult = ({ imcBoi }: ImcResultProps) => {
    return(
        <View style={imcResultStyles.containerSecundary}>
            {imcBoi ?
            <View style={imcResultStyles.resultado}>
            <Text style={imcResultStyles.imcText}>Seu IMC é:</Text>
            <Text style={imcResultStyles.imcResult}>{formatNumber(imcBoi)}</Text>
            </View>
            :null
            }
        </View>
    )
}

export default ImcResult;