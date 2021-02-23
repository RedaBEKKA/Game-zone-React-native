import {createStackNavigator} from 'react-navigation-stack';
import React from "react"
import Header from "../shared/Header"
import About from "../Screen/About"
import ReviewDetail from "../Screen/ReviewDetail"

const screens = {
    About:{
        screen:About,
        navigationOptions:({navigation})=>{
            return{
                    headerTitle:()=><Header navigation={navigation} title='A propos'/>
                    
                }
            
        }
    },
   
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:"#333", //couleur du text
        headerStyle:{backgroundColor:"pink",height:90}
    }
});

export default AboutStack;