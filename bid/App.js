import React from "react";

//get screens
import Login from "./screens/Login";
import BidPage from "./screens/BidPage";
import AddPage from "./screens/AddProduct";


//get navigation
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
return (
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name = "Login" component = {Login}  options = {{headerShown: false}}/>

      <stack.Screen name = "BidPage" component = {BidPage}  options = {{headerShown: false}}/>

      <stack.Screen name = "AddPage" component = {AddPage}  options = {{title: "AddProduct", }}/>

      
    </stack.Navigator>
  </NavigationContainer>
);
}

export default App;