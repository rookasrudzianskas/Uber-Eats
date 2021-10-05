import React from 'react';
import {View, Text} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({cityHandler}) => {
    return (
        <View style={{marginTop: 15, flexDirection: 'row'}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    const city = data.description.split(',')[0];
                    cityHandler(city);
                }}
                query={{
                    key: 'AIzaSyC1CSh5mZFE6sw-2gjZoP3b7KjS3iXGysI',
                    language: 'en',
                }}
                enablePoweredByContainer={false}
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
                    <View style={{flexDirection: 'row', marginRight: 8, backgroundColor: 'white', padding: 9, borderRadius: 30, alignItems: 'center', }}>
                        <AntDesign name="clockcircle" size={11} color="black" style={{marginRight: 6,}}/>
                        <Text style={{}}>Search</Text>

                    </View>
                )}

            />
        </View>
    );
};

export default SearchBar;
