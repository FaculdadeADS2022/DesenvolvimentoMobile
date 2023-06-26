import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AppNavigatorProps } from "../../navigation"
import { Slider, Input, Box, Button } from "native-base";
import { Title, Label } from "../styles"
import { useState } from "react";
import { save } from "../../data/repository/FitnessRepository";
import moment from 'moment';

const RegisterScreen = () => {
   const [exerciseTime, setExerciseTime] = useState(0);
   const [weight, setWeight] = useState(0);
   const [waterConsumption, setWaterConsumption] = useState(0);
   const [mood, setMood] = useState(0);
   const navigation = useNavigation<AppNavigatorProps>()

   const exerciseAvaliation = (value: number) => {
      const avaliation = Math.round(value);
      if (avaliation > 0 && avaliation < 26) {
         setMood(2);
         } else if (avaliation > 25 && avaliation < 51) {
         setMood(3);
         } else if (avaliation > 50 && avaliation < 76) {
         setMood(4);
         } else if (avaliation > 75) {
         setMood(5);
         } else {
         setMood(0);
         }
      };

      const exerciseRegister = () => {
         const date = moment().toDate();
         save({
            exerciseTime: parseInt(exerciseTime.toString()),
            weight: parseFloat(weight.toString()),
            waterConsumption: parseFloat(waterConsumption.toString()),
            mood,
            date,
            });
         navigation.navigate("Home")
      };

   return(
      <View>
         <Box alignItems="center" w="100%">

            <Title>Registre seu exercicio!</Title>

            <Label style={{marginTop:60}}>Tempo de exercício:</Label>
            <Input mx="3" 
                  placeholder="Informe em Minutos" 
                  w="50%" 
                  marginBottom={7} 
                  borderColor={"blue.400"} 
                  onChangeText={(value) => setExerciseTime(parseFloat(value))}
            />

            <Label>Peso:</Label>
            <Input mx="3" 
                  placeholder="Informe em KG"
                  w="50%" 
                  marginBottom={7} 
                  borderColor={"blue.400"}
                  onChangeText={(value) => setWeight(parseFloat(value))}
            />

            <Label>Água consumida:</Label>
            <Input mx="3" 
                  placeholder="Informe em Litros" 
                  w="50%" 
                  marginBottom={10} 
                  borderColor={"blue.400"}
                  onChangeText={(value) => setWaterConsumption(parseFloat(value))}
            />

            <Label>Qual seu nível de satisfação?</Label>
            <Slider w="50%" 
                  maxW="300" 
                  defaultValue={50} 
                  minValue={0} 
                  maxValue={100} 
                  step={25}
                  onChange={(value) => exerciseAvaliation(value)}
            >

               <Slider.Track>
                  <Slider.FilledTrack />
               </Slider.Track>
               <Slider.Thumb />
            </Slider>

            <Label>1                 2                3                 4                 5</Label>
            <Button size="lg" marginTop={10} onPress={exerciseRegister}>Registrar</Button>

         </Box>
      </View>
   )
}

export default RegisterScreen