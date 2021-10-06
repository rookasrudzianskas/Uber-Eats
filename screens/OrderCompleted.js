import React from 'react';
import {Text, View} from "react-native";

const OrderCompleted = () => {
    return (
        <View>
            <Text>Your order at {restaurantName} has been placed for {totalUSD}</Text>
        </View>
    );
};

export default OrderCompleted;
