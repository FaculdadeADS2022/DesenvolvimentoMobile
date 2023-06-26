import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import {ActivityIndicator, View} from 'react-native'
import MapView, {enableLatestRenderer, Marker } from 'react-native-maps'

const App = () => {
  const[latitude, setLatitude] = useState(0)
  const[longitude, setLongitude] = useState(0)

  enableLatestRenderer();

  useEffect(() => {
    Geolocation.requestAuthorization(() => {
      console.log("Usuário autorizou!")
    }, 
    error => {
      console.log(`Usuário não autorizou! ${error.message}`)
    })

    Geolocation.getCurrentPosition(response => {
      setLatitude(response.coords.latitude)
      setLongitude(response.coords.longitude)
    }, error => {
      console.log(`Não foi possível de obter a sua localização atual: ${error.message}`)
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
    },)
  }, [])

  if (latitude === 0){
    return <ActivityIndicator style={{ flex: 1}} />;
  }

  return(
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider='google'
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5
        }}>
        <Marker coordinate={{ latitude, longitude }}/>
      </MapView>
    </View>
  )
}

export default App;