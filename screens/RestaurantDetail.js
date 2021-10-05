import React from 'react';
import {View, Text} from "react-native";
import {Divider} from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const RestaurantDetail = ({route, navigation}) => {
    return (
        <View style={{}}>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItems />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    );
};

export default RestaurantDetail;
