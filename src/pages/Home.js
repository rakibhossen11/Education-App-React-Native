import React from "react";
import { Text, View } from "react-native";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";

const Home = () =>{
    return(
        <View style={{padding: 10,}}>
            <WelcomeHeader />
            <SearchBar />
        </View>
    )
}

export default Home;