import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import GlobalAPI from "../shared/GlobalAPI";

const VideoCourseList = () => {
  const [videolist, setVideolist] = useState([]);
  // const navigation = useNaviga
  useEffect(() => {
    getVideoCourse();
  }, []);

  const getVideoCourse = async () => {
    const resp = (await GlobalAPI.getVideoCourse()).data;
    const result = resp.data.map((item) => ({
      id: item.id,
      name: item.attributes.title,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes.url,
      Topic: item.attributes.VideoTopic,
    }));
    setVideolist(result);
    // console.log(result);
  };
  return (
    <View style={{marginTop: 15}}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 3 }}>
        Video Course
      </Text>
      <FlatList
        data={videolist}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 210,
                height: 120,
                marginRight: 10,
                borderRadius: 7,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default VideoCourseList;
