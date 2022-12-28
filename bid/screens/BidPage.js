import React, { useState, useEffect, useLayoutEffect } from "react";

import { SafeAreaView, Text, View, Image, Button, FlatList,  } from "react-native";
import Modal from "./Modal";

import Styles from "../utils/styles";

import Icon from "react-native-vector-icons/FontAwesome";

import socket from "../utils/socket";






const BidPage = ({ navigation }) => {
    const [ visible, setVisible ] = useState(false);

    useLayoutEffect(()=>{
        function fetchProducts() {
            fetch("http://localhost:4000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
        }
        fetchProducts();
    }, []);

    useEffect(()=>{
        socket.on("getProducts", (data) => setProducts(data)) 
    }, []);

    const toggleModal = () => setVisible(!visible);
    return (
        <SafeAreaView style={Styles.bidContainer}>
            <View style={Styles.headerContainer}>
                <Text style={Styles.header}>Place Bids</Text>
                <Icon name="circle-with-plus" size={30} color="green" onPress={ navigation.navigate("AddProduct") }></Icon>
            </View>


            <View style={Styles.mainContainer}>
                /*<View style={Styles.productContainer}>
                    <Image style={Styles.image} resizeMode="contain" source={ {uri: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg?tr=w-375",} } />
                    <View style={Styles.productDetails}> 
                    <Text style={Styles.productName}> Tesla Model S </Text> 

                    <View><Text style={Styles.productPrice}> Current Price: $40,000 </Text></View>
                    
                    <Button title="Place Bid" onPress={ toggleModal }/>
                    </View>
                </View>*/

                <FlatList 
                    data={products}
                    key={(item) => item.id}
                    renderItem={({item}) => (<ProductUI name={item.name} image_url={item.image_url} price={item.price} toggleModal={toggleModal} id={item.id} />)}
                />

            </View>

            { visible ? <Modal visible={visible} setVisible={setVisible} /> : null };
        </SafeAreaView>
    );
};

export default BidPage;