import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#eee', flexGrow: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}} >
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 120}}>
                <Categories />
                <RestaurantItems />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
