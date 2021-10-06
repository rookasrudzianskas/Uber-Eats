import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import {useSelector} from "react-redux";
import LottieView from 'lottie-react-native';

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
        <SafeAreaView style={{backgroundColor: 'white'}}>
            {/* green checkmark */}
            <LottieView autoPlay speed={0.5} loop={false} source={require('../assets/animations/check-mark.json')} style={{height: 100, alignSelf: 'center', marginBottom: 30}}/>
            <Text>Your order at {restaurantName} has been placed for {totalUSD}</Text>
            {/* salads making*/}
        </SafeAreaView>
    );
};

export default OrderCompleted;

