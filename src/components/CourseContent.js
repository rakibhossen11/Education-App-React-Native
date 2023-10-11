import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Colors from "../shared/Colors";
import { Ionicons } from "@expo/vector-icons";

const CourseContent = ({ course, userProgress, courseType }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Course Content</Text>
      <FlatList
        data={course?.Topic}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: Colors.gray,
                marginRight: 20,
              }}
            >
              {index + 1}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.Topic ? item.Topic : item.name}
            </Text>
            <Ionicons name="play-circle" size={24} color={Colors.primary} style={{
                position: "absolute",
                right: 10
            }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseContent;
