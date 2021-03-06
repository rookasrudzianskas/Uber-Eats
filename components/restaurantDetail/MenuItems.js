import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {StyleSheet} from "react-native";
import {Divider} from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ViewCart from "./ViewCart";
import {useDispatch, useSelector} from "react-redux";



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

const MenuItems = ({restaurantName, foods, hideCheckbox, marginLeft}) => {
    const dispatch = useDispatch();
    const selectItem = (item, checkBoxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: {...item, restaurantName: restaurantName, checkboxValue: checkBoxValue},
    });

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 29}}>
            {foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItemStyle}>

                            {hideCheckbox ? (
                                <>
                                </>) :
                                (
                                <BouncyCheckbox onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
                                             iconStyle={{borderColor: 'lightgray', borderRadius: 0}} fillColor={'green'}
                                             isChecked={isFoodInCart(food, cartItems)}/>
                                )}
                                             <FoodInfo food={food} />
                            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
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
