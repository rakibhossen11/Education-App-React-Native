import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import GlobalAPI from "../shared/GlobalAPI";
import Colors from "../shared/Colors";
import { useNavigation } from '@react-navigation/native';

const Courselist = ({ type }) => {
  const [courselist, setCourselist] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCourselist();
  }, []);

  const getCourselist = async () => {
    const res = (await GlobalAPI.getCourseList(type)).data;
    const result = res.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes.url,
      Topic: item.attributes.Topic,
    }));
    setCourselist(result);
    console.log(result);
  };
  const onPressCourse = (course) =>{
    navigation.navigate('course-details',{courseData: course, courseType: 'text'})
  }

  return (
    <View style={{marginTop: 10,}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textTransform: "capitalize",
          marginBottom: 3,
        }}
      >
        {type} Course
      </Text>
      <FlatList 
      data={courselist}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity style={{backgroundColor:Colors.white,marginRight:10,
            borderRadius:10}} onPress={()=>onPressCourse(item)}>
            <Image source={{uri:item.image}}  
            style={{width:180,height:100,  
            borderTopLeftRadius:10,borderTopRightRadius:10,
            resizeMode:'cover'}} />
            <View style={{padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:15}}>{item.name}</Text>
            <Text style={{color:Colors.gray,fontWeight:'300'}}>{item.Topic?.length} Lessons</Text>
            </View>
        </TouchableOpacity>
      )}
      />
    </View>
  );
};

export default Courselist;
