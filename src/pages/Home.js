import React from "react";
import { ScrollView, Text, View } from "react-native";
import WelcomeHeader from "../components/WelcomeHeader";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import VideoCourseList from "../components/VideoCourseList";
import Courselist from "../components/Courselist";

const Home = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <VideoCourseList />
      <Courselist type={"basic"} />
      <Courselist type={"advance"} />
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

export default Home;
