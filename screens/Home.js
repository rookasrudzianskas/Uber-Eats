import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {localRestaurants} from "../components/RestaurantItems";

const YELP_API_KEY = 'mwmvzvgLFJAd6HbU0PNNepE3D8p18HFrNgv7Lks87zZgch52en03pB68hTVu3T2NCER7Vc7Yp6IvrWn6T0qIlEFv_oVD7lk0gnAtlqt357Uc6SSDn2y6EHMReCxcYXYx';

const Home = () => {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('San Francisco');

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(json.businesses)
            );

    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city]);

    return (
        <SafeAreaView style={{backgroundColor: '#eee', flexGrow: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}} >
                <HeaderTabs />
                <SearchBar  cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 120}}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
