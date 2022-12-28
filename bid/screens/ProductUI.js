import react from "react";
import {View, Image,  } from "react-native";
import styles from "../utils/styles";





const ProductUI = (toggleModal, name, image_url, price, id,) => {
    return (
        <View style={styles.productContainer}>
        <Image 
            resizeMode="contain"
            style={styles.image}
            source={{uri: image_url}}
        />


        </View>
    );

};


export default ProductUI;