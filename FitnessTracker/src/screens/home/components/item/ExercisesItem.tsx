import { Pressable, Text } from "react-native"

import styles from "./Style";
import { memo } from "react";
import { ExercisesItemProps } from "./interface";

const ExercisesItem = ({exercises}: ExercisesItemProps) => {

   return(
      <Pressable style={styles.container}>

         <Text style={styles.title}> Data do exercício: </Text>
         <Text style={styles.label}> {exercises.date.toString()} </Text>

         <Text style={styles.title}> Tempo do exercício:</Text>
         <Text style={styles.label}> {exercises.exerciseTime} </Text>

         <Text style={styles.title}> Seu peso: </Text>
         <Text style={styles.label}> {exercises.weight} </Text>

         <Text style={styles.title}> Quantidade de água consumida: </Text>
         <Text style={styles.label}> {exercises.waterConsumption} Litros </Text>

         <Text style={styles.title}> Avaliação do exercício realizado: </Text>
         <Text style={styles.label}> Nota {exercises.mood} de 5 </Text>

      </Pressable>
   )
}

export default memo(ExercisesItem);