import React from 'react';
import {Text, View} from "react-native";
import {useSelector} from "react-redux";

const OrderCompleted = () => {

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    // $232.32 -> 232.32 -> Number['232.32'] -> ['232.32', '34.43', '54'] -> reduce ['232.32', '34.43', '54'] -> 232.32 + 34.43 + 54 -> sum total
    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <View>
            <Text>Your order at {restaurantName} has been placed for {totalUSD}</Text>
        </View>
    );
};

export default OrderCompleted;

