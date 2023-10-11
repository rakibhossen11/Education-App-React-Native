import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CourseContent from "../components/CourseContent";

const CourseDetails = () =>{
    const param = useRoute().params;
    const [course,setCourse] = useState([]);
    const navigation = useNavigation();
    const [userProgress,setUserProgress] = useState([]);

    useEffect(()=>{
        setCourse(param?.courseData);
    },[])

    return(
        <View style={{padding:20,paddingTop:50}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={24} color={"black"} />
            </TouchableOpacity>
            <View>
                <Text style={{fontSize:20,
                    fontWeight:'bold'}}>{course.name}</Text>
                <Text style={{color:Colors.gray}}>by Rakib</Text>
                <Image source={{uri: course.image}} style={{height:150,marginTop:10,borderRadius:10}} />
                <Text style={{marginTop:10,
               fontSize:16, fontWeight:'bold'}}>About Course</Text>
                <Text 
                numberOfLines={4}
                 style={{color:Colors.gray}}>{course.description}</Text>
            </View>
            <CourseContent
            course={course}
            userProgress={userProgress}
            courseType={param.courseType}
            />
        </View>
    )
}

export default CourseDetails;