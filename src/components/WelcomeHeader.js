import React from "react";
import { Text, View } from "react-native";

const WelcomeHeader = () =>{
    return(
        <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <View>
                <Text>Hello</Text>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Rakib</Text>
            </View>
        </View>
    )
}

export default WelcomeHeader;