import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantItem = () => {
    return (
        <View style={{}}>
            <RestaurantImage />
        </View>
    );
};

export default RestaurantItem;


const RestaurantImage = () => (
    <>
    <Image
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'}}
                style={{
                    width: '100%',
                    height: 180,
        }}
    />

        <TouchableOpacity activeOpacity={0.5} style={{position: 'absolute', top: 20, right: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
    </>

)
