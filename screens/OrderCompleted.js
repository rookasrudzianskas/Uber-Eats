import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {useSelector} from "react-redux";
import LottieView from 'lottie-react-native';
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

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

    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
        ]
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                });
            });

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {/* green checkmark */}
            <View
                style={{
                    margin: 15,
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <LottieView
                    style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Your order at {restaurantName} has been placed for {totalUSD}
                </Text>
                <ScrollView>
                    <MenuItems
                        foods={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <LottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default OrderCompleted;

