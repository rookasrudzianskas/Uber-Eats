import React from 'react';
import {View, Text} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
    return (
        <View style={{marginTop: 15, flexDirection: 'row'}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'YOUR API KEY',
                    language: 'en',
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    },
                }}
                renderLeftButton={() => (
                    <View style={{marginLeft: 10}}>
                        <Ionicons name="location-sharp" size={24} color={'black'} />
                    </View>
                    )
                }

                renderRightButton={()  => (
                    <View style={{flexDirection: 'row'}}>
                        <AntDesign name="clockcircle" size={11} color="black" />
                        <Text style={{}}>Search</Text>

                    </View>
                )}

            />
        </View>
    );
};

export default SearchBar;
