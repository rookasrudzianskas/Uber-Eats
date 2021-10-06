import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {StyleSheet} from "react-native";
import {Divider} from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ViewCart from "./ViewCart";
import {useDispatch} from "react-redux";


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



const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',

    },

});

const MenuItems = () => {
    const dispatch = useDispatch();
    const selectItem = (item) => dispatch({
        type: 'ADD_TO_CART',
        payload: item,
    })
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 29}}>
            {foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItemStyle}>
                            <BouncyCheckbox onPress={() => console.log("Rokas")} iconStyle={{borderColor: 'lightgray', borderRadius: 0}} fillColor={'green'} />
                            <FoodInfo food={food} />
                            <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} orientation={'vertical'} style={{marginHorizontal: 20}} />
                    </View>
                ))}
        </ScrollView>
    );
};

export default MenuItems;

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft,
            }}
        />
    </View>
);
