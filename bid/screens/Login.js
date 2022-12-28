import React, { useState } from "react";

import { SafeAreaView, Text, View, TextInput, Pressable, Alert } from "react-native";
import { Styles } from "../utils/styles";

import { AsyncStorage } from "@react-native-async-storage/async-storage";

const Login = () => {
    const [username, setUserName] = useState('');

    const storeUsername = async () => {
        try {
            await AsyncStorage.setItem("usernaem", username);
            navigation.navigate("BidPage");
        } catch (error) {
            Alert.alert("Error! While saving username");
        }
    };

    const handleLogin = () => {
        if(username.trim()) {
            storeUsername();
        } else {
            Alert.alert('Username is required.');
        }
    };


    return (
    <SafeAreaView style = { Styles.loginContainer }>
    <Text style = { Styles.heading }>Login</Text>
    <View style = { Styles.formContainer }></View>
    <Text style = { Styles.formLabel }>Username</Text>
    <TextInput placeholder="Enter your username"  style={Styles.input} autoCorrect={false} onChange={ (value) => {setUserName(value)} }></TextInput>
    <Pressable style={Styles.loginbutton} onPress={handleLogin}>
        <View>
            <Text style={Styles.loginbuttontText}>Get started</Text>
        </View>
    </Pressable>

    



    </SafeAreaView>
    );
};

export default Login;
