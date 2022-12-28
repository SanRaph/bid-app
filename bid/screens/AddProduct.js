import React, { useState, useLayoutEffect } from "react";

import { SafeAreaView, View, Text, TextInput, Pressable, Alert, } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";


import Styles from "../utils/styles";


const AddProduct = () => {
    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ url, setURL ] = useState("");

    //👇🏻 Fetch the saved username from AsyncStorage
    const getUserName = () => {
        try {
            const value = AsyncStorage.getItem("username");
            if (value !== null){
                setUser(value);
            }
        } catch (error) {
            console.error("Error while loading...");
        }
    };

    //👇🏻 Fetch the username when the screen loads
    useLayoutEffect(() => { getUserName() }, []);

    //This function runs when you click ADD PRODUCT button
    const addProduct = () => {
        //check if the input fields are not empty
        if(name.trim() && price.trim() && url.trim()){
            //console.log({name, price, url});
            //sends the product details to the node.js server
            socket.emit("addProduct", {name, price, url, user});
            navigation.navigate("BidPage");
        }
    };




    return (
        <SafeAreaView>
            <View style={Styles.productForm}>
            <Text>Product Name</Text>
            <TextInput style={Styles.formInput}
                       onChangeText={ (value) => setName(value) } 
                       />

            <Text>Product Price</Text>
            <TextInput style={Styles.formInput}
                       onChangeText={ (value) => setPrice(value) } 
                       />

            <Text>Product Image URL</Text>
            <TextInput style={Styles.formInput}
                       keyboardType="url" 
                       autoCapitalize="none"
                       autoCorrect={false}
                       onChangeText={ (value) => setURL(value) }
                       />
            <Pressable style={Styles.addProductBtn}
                       onPress={ addProduct }>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>ADD PRODUCT</Text>

            </Pressable>

            </View>
        </SafeAreaView>
    );
};

export default AddProduct;