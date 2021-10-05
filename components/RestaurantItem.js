import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantItem = () => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{marginBottom: 30}}>
            <View style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
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

);

const RestaurantInfo = () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
        <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Farmhouse Kitchen Thai Cuisine</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>30-45 • min</Text>
        </View>
        <View style={{backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center'}}>
            <Text>4.5</Text>
        </View>
    </View>
)
