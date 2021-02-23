
import { createDrawerNavigator } from "react-navigation-drawer"
import {createAppContainer} from 'react-navigation'
import HomeSTack from "./Homestack"
import AboutStack from "./AboutSTack"

const routDrawNavigator = createDrawerNavigator({
    Home:{
        screen:HomeSTack
    },
    About:{
        screen:AboutStack
    }
})


export default createAppContainer(routDrawNavigator);