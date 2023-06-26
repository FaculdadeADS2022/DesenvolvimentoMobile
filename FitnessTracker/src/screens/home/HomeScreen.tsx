import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { AppNavigatorProps } from "../../navigation"
import { AddIcon, Fab, FlatList, useTheme } from "native-base"
import { Container } from "../styles"
import { useCallback, useState } from "react"
import { findAll } from "../../data/repository/FitnessRepository"
import { RegisterFitnessEntryDto } from "../../domain"
import { ListRenderItemInfo } from "react-native"
import { ExercisesItem } from "./components/item"

const HomeScreen = () => {
   const [allExercises, setAllExercises] = useState<RegisterFitnessEntryDto[]>([]);
   const navigation = useNavigation<AppNavigatorProps>()
   const { colors } = useTheme();

   useFocusEffect(
      useCallback(() => {
         const fetchExercises = async () => {
            const exercises = await findAll();
            setAllExercises(exercises);
         };

         fetchExercises();
         }, [])
      );

   const exerciseKeyExtractor = (_: RegisterFitnessEntryDto, index: number) => index.toString()

   const renderArticle = useCallback(({ item}: ListRenderItemInfo<RegisterFitnessEntryDto> ) =>
   <ExercisesItem exercises={item}/>, [])

   const openRegisterScreen = () => {
      navigation.navigate("Register", { message: "Tiudo na paiz?!" })
   }

   return(
      <Container>
         <FlatList
            data={allExercises}
            renderItem={renderArticle}
            keyExtractor={exerciseKeyExtractor}
         />
         <Fab icon={<AddIcon/>} backgroundColor={colors.secondary[200]} 
         onPress={openRegisterScreen}
         renderInPortal={false}/>
      </Container>
   )
}

export default HomeScreen