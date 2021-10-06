import React from "react";
import Home from "./screens/Home";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import RestaurantDetail from "./screens/RestaurantDetail";
import configureStore from "./redux/store";
import store from "./redux/store";
import {Provider} from "react-redux";



export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
