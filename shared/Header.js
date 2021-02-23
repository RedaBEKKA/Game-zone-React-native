import React from "react"
import {Text,StyleSheet,View,Image,ImageBackground} from "react-native"
import {MaterialIcons} from '@expo/vector-icons'



export default function Header({navigation,title}){
    const openMenu = () =>{
        navigation.openDrawer();
    }

    return(
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')} >
            {/* Icon pour le menu */}
            <MaterialIcons name='menu' size={28} style={styles.Icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            
         </ImageBackground>
    )
   
}


const styles = StyleSheet.create({
    header: {
     width:'100%',
     height:'100%',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center'
    },

    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:"purple",
        letterSpacing:1
    },
    Icon:{
        position:'absolute',
        left:10
    },
    headerTitle:{
        flexDirection:'row'
    },
    headerImage:{
        height:26,
        width:26,
        marginHorizontal:12
    }
  });