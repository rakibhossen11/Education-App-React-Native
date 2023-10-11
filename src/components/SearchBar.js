import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, View } from "react-native";
import Colors from "../shared/Colors";

const SearchBar = () =>{
    return(
        <View style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FFF",
            padding: 10,
            borderRadius: 10,
            elevation: 2,
            marginTop: 10,
            alignItems: "center",
        }}>
                <Ionicons name="search" size={24} color={Colors.gray} style={{marginRight: 10}} />
                <TextInput placeholder="Search" />
        </View>
    )
}

export default SearchBar;