import React from 'react'
import { SafeAreaView } from 'react-native';
// import { HomeScreen } from './src/screens/HomeScreen';
// import RegistroScreen from './src/screens/RegistroScreen';
import { InterfazBusquedaScreen } from './src/screens/InterfazBusquedaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1,}}>
      {/* <HomeScreen/> */}
      {/* <RegistroScreen/> */}
      <InterfazBusquedaScreen/>
    </SafeAreaView>
  )
}

export default App;