import React from 'react';
import {View, Text, SafeAreaView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#eee', flexGrow: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}} >
                <HeaderTabs />
                <SearchBar />
            </View>

            <Categories />
        </SafeAreaView>
    );
};

export default Home;
