import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from "react-native";
import {useSelector} from "react-redux";

const ViewCart = () => {
    const items = useSelector((state) => state.cartReducer.selectedItems.items);
    // $232.32 -> 232.32 -> Number['232.32'] -> ['232.32', '34.43', '54'] -> reduce ['232.32', '34.43', '54'] -> 232.32 + 34.43 + 54 -> sum total
    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });

    const [modalVisible, setModalVisible] = useState(false);
    const checkOutModelContent = () => {
        return (
            <View style={{backgroundColor: 'black', padding: 10, borderRadius: 30, width: 150, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>

                        <Text style={{color: 'white'}}>Checkout</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // console.log(totalUSD);
    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                {checkOutModelContent()}
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
                    }}>
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
