import React from 'react';
import {View, Text} from "react-native";
import {Divider} from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";


const foods = [
    {
        title: 'Lasagna',
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },
    {
        title: "sea",
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },
    {
        title: "sea",
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },
    {
        title: "sea",
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },

    {
        title: "sea",
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },

];


const RestaurantDetail = ({route, navigation}) => {
    return (
        <View style={{}}>
            <View>
                <About route={route} />
                <Divider width={1.8} style={{marginVertical: 20}} />
                <MenuItems restaurantName={route?.params?.name} foods={foods} />
            </View>
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    );
};

export default RestaurantDetail;
