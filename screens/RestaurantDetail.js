import React from 'react';
import {View, Text} from "react-native";
import {Divider} from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";

const RestaurantDetail = () => {
    return (
        <View style={{}}>
            <About />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItems />
        </View>
    );
};

export default RestaurantDetail;
