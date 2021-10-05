import React from 'react';
import {View, Text, Image} from "react-native";



const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Cuisine',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    price: '$$',
    reviews: '1500',
    rating: 5,
    categories: [{title: 'Thai'}, {title: 'Comfort Food'}, {title: 'Ice Cream'}],
}


const About = (props) => {

    const {name, image, price, reviews, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(' • ');
    const description = `${formattedCategories} ${price ? ' • ' + price : ' '} • 🎫 • ${rating} ⭐ (${reviews}+)`;



    return (
        <View style={{}}>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
};

export default About;

const RestaurantImage = (props) => (
    <Image source={{uri: props?.image}}  style={{width: '100%', height: 180}} />
)

const RestaurantName = (props) => (
    <Text style={{
        fontWeight: '600',
        fontSize: 29,
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props?.name}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={{marginTop: 10, marginHorizontal: 15, fontWeight: '400', fontSize: 15.5 }}>
        {props?.description}
    </Text>
)
