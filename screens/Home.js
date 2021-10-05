import React from 'react';
import {View, Text, SafeAreaView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#eee', flexGrow: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}} >
                <HeaderTabs />
            </View>
        </SafeAreaView>
    );
};

export default Home;
