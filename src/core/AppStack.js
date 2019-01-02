import React from "react";
import {
    createStackNavigator
} from "react-navigation";
import MainScreen from "../screen/MainScreen";
import LoginScreen from "../screen/LoginScreen";
import AboutUsScreen from "../screen/AboutUsScreen";
import {
    Routes
} from "./Constant";

const AppStack = createStackNavigator({
    [Routes.Main]: MainScreen,
    [Routes.Login]: LoginScreen,
    [Routes.AboutUs]: {
        screen: AboutUsScreen
    },
});

export default AppStack;