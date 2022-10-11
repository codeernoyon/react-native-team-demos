import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const CommentHeder = () => {
  return (
    <View style={tw`px-5 flex-row justify-between py-2`}>
      <Text style={tw`text-[16px] font-semibold`}>Comments</Text>
      <TouchableOpacity style={tw`flex-row items-center justify-center`}>
        <Text style={tw`mr-1 text-[16px] font-semibold`}>New</Text>
        <Text>
          <AntDesign name="down" size={18} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentHeder;
