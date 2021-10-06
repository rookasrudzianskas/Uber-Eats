import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from "react-native";
import {useSelector} from "react-redux";
import {StyleSheet} from "react-native";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";
import LottieView from 'lottie-react-native';

const ViewCart = ({navigation}) => {
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    // $232.32 -> 232.32 -> Number['232.32'] -> ['232.32', '34.43', '54'] -> reduce ['232.32', '34.43', '54'] -> 232.32 + 34.43 + 54 -> sum total
    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });
    const [loading, setLoading] = useState(false);

    const addOrderToFirebase = () => {
        setLoading(true);
        const db = firebase.firestore();
        db.collection('orders').add({
            items: items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            setTimeout(() => {
                setLoading(false);
                setModalVisible(false);
                navigation.navigate('OrderCompleted');
            }, 2500);
        });
    }

    const [modalVisible, setModalVisible] = useState(false);

    const checkOutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}

                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => {
                                addOrderToFirebase();
                                setModalVisible(false);
                            }} style={{marginTop: 20, backgroundColor: 'black', alignItems: 'center', padding:  13, borderRadius: 30, width: 300, position: 'relative'}} activeOpacity={0.8}>
                                <Text style={{color: 'white', fontSize: 20,}}>Checkout</Text>
                                <Text style={{position: 'absolute', color: 'white', right: 20, fontSize: 15, top: 17}}>{total ? totalUSD : ''}</Text>
                            </TouchableOpacity>
                        </View>
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
            {
                loading && (
                    <View style={{
                        backgroundColor: 'black',
                        position: 'absolute',
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}>
                        <LottieView
                            style={{ height: 200 }}
                            source={require("../../assets/animations/scanner.json")}
                            autoPlay
                            speed={3}
                        />
                    </View>
                )
            }
            </>
    );
};

export default ViewCart;

// firebase
