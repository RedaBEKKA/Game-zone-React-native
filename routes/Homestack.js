import {createStackNavigator} from 'react-navigation-stack';
//import {createAppContainer} from 'react-navigation'
import Home from "../Screen/Home"
import ReviewDetail from "../Screen/ReviewDetail"
import React from "react"
import Header from "../shared/Header"

const screens = {
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                //title:'GameZone',
                headerTitle:()=><Header navigation={navigation} title='Game Zone'/>,
                
            }
        }
    },
    ReviewDetail:{
        screen:ReviewDetail,
        navigationOptions:{
            title:'ReviewDetails',
            //headerStyle:{backgroundColor:"skyblue"}
        }
    } 
}

const HomeSTack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:"#333", //couleur du text
        headerStyle:{backgroundColor:"pink",height:90}
    }
});

//export default createAppContainer(HomeSTack);
export default HomeSTack;
