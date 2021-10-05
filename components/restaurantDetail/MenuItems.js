import React from 'react';
import {Image, Text, View} from "react-native";
import {StyleSheet} from "react-native";

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
        title: "contain",
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },
    {
        title: "sit",
        description: "disappearance",
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },
    {
        title: "smooth",
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },
    {
        title: "spot",
        description: 'Hello this is an awesome pizza, oh hey, lasagna',
        price: '$14.53',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',

    }
});

const MenuItems = () => {

    console.log(foods[0].image)
    return (
        <View>
            <View style={styles.menuItemStyle}>
                <FoodInfo food={foods[0]} />
                <FoodImage food={foods[0]} />
            </View>
        </View>
    );
};

export default MenuItems;

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={styles.titleStyle}>{props?.food?.title}</Text>
        <Text>{props?.food?.description}</Text>
        <Text>{props?.food?.price}</Text>
    </View>
);


const FoodImage = (props) => (
    <View>
        <Image source={{uri: props?.food?.image}}  style={{width: 100, height: 100, borderRadius: 8}}/>
    </View>
)
