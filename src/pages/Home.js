import React from "react";
import { Text, View } from "react-native";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import VideoCourseList from "../components/VideoCourseList";
import Courselist from "../components/Courselist";

const Home = () =>{
    return(
        <View style={{padding: 10,}}>
            <WelcomeHeader />
            <SearchBar />
            <Slider />
            <VideoCourseList />
            <Courselist type={'basic'} />
        </View>
    )
}

export default Home;