import React from 'react';
import {View, Text} from "react-native";
import {Divider} from "react-native-elements";
import About from "../components/restaurantDetail/About";

const RestaurantDetail = () => {
    return (
        <View style={{}}>
            <About />
            <Divider width={1.8} style={{marginVertical: 20}} />
        </View>
    );
};

export default RestaurantDetail;
