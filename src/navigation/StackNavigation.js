import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Home from "../pages/Home";
import CourseDetails from "../pages/CourseDetails";
import CourseChapter from "../pages/CourseChapter";

const Stack = createStackNavigator();
const StackNavigation = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="course-details" component={CourseDetails} />
            <Stack.Screen name="course-chapter" component={CourseChapter} />
        </Stack.Navigator>
    )
}

export default StackNavigation;