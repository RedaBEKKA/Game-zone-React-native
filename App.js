
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screen/Home"
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"
import Navigator from "./routes/Drawer"


const getFont = () =>{
  return Font.loadAsync({
    'archivo-regular':require('./assets/fonts/ArchivoNarrow-Regular.ttf'),
    'archivo-bold':require('./assets/fonts/ArchivoNarrow-Bold.ttf')

  })
}

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false);
 
  
  if (fontLoaded) {
    return (
      
        <Navigator/>
      
    );
  }else{
    return(
      <AppLoading
      startAsync={getFont}
      onFinish={()=> setFontLoaded(true)} 
      onError={() => console.log('error')}
     />
    )
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
