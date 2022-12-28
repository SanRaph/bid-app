import React, { useState } from 'react';

import {View, Text, TextInput, Pressable, } from "react-native";

import Styles from "../utils/styles";

const Modal = ({ visible, setVisible }) => {
    const [ newPrice, setNewPrice ] = useState(0);
        
    return (
        <View style={ Styles.modalContainer }>
        <Text style={Styles.modalHeader}>Update Bid</Text>
        <Text style={{ marginBottom: 10 }}>Price</Text>
        <TextInput keyboardType='number-pad' 
                   style={Styles.modalPrice}
                   onChange={ (value) => setNewPrice(value) }
                   />
        <View style={{ width: '100%', alignItems: 'center' }}>
        <Pressable style={Styles.updateBidBtn}
                   onPress={ () => {
                                   console.log({ newPrice });
                                   setVisible(!visible);
                   } }>
        <View>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>PLACE BID</Text>
        </View>
        </Pressable>
        </View>


    </View>
    );
};

export default Modal;