import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from "react-native";
import {useSelector} from "react-redux";
import {StyleSheet} from "react-native";

const ViewCart = () => {
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    // $232.32 -> 232.32 -> Number['232.32'] -> ['232.32', '34.43', '54'] -> reduce ['232.32', '34.43', '54'] -> 232.32 + 34.43 + 54 -> sum total
    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });

    const [modalVisible, setModalVisible] = useState(false);
    const checkOutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>
                </View>
            </>
        )
    };

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 10,
        },
        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
        },
        subtotalText: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10,
        }
    });

    // console.log(totalUSD);
    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                {checkOutModalContent()}
            </Modal>

            {total ? (


            <View style={{
                flex: 1,
                alignItems: "center",
                flexDirection: 'row',
                position: 'absolute',
                bottom: 150,
                zIndex: 999
            }}>
                <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                    <TouchableOpacity activeOpacity={0.8} style={{
                        marginTop: 20,
                        backgroundColor: 'black',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: 15,
                        borderRadius: 30,
                        width: 300,
                        position: 'relative',
                    }}
                    onPress={() => setModalVisible(true)}
                    >
                        <Text style={{color: 'white', fontSize: 20, marginRight: 10}}>View Cart</Text>
                        <Text style={{color: 'white', fontSize: 20}}>{totalUSD}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            ) : (
                <>
                </>
            )}
            </>
    );
};

export default ViewCart;
