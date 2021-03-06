import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {localRestaurants} from "../components/home/RestaurantItems";
import {Divider} from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY = 'mwmvzvgLFJAd6HbU0PNNepE3D8p18HFrNgv7Lks87zZgch52en03pB68hTVu3T2NCER7Vc7Yp6IvrWn6T0qIlEFv_oVD7lk0gnAtlqt357Uc6SSDn2y6EHMReCxcYXYx';

const Home = ({navigation}) => {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('San Francisco');
    const [activeTab, setActiveTab] = useState('Delivery');

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
                        setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );

    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{backgroundColor: '#eee', flexGrow: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}} >
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar  cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 120}}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
                {/*<View style={{position: 'absolute', bottom: 0}}>*/}
                <Divider width={1} />
                    <BottomTabs />
                {/*</View>*/}
            </ScrollView>



        </SafeAreaView>
    );
};

export default Home;
