import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import COLORS from "../../configs/colors";
import { ModifyAProductData } from "../../data/ModifyAProductData";
const Category = () => {
  const [value, setValue] = useState("");
  const { variants } = ModifyAProductData;
  return (
    <View>
      {variants?.map((variant, index) => (
        <View
          key={index}
          style={tw`flex-row justify-between px-5 my-2 items-center`}
        >
          {/* size */}
          <View>
            <Text style={tw`text-[16px] pr-16`}>{variant.size}</Text>
          </View>
          {/* color */}
          <View style={tw`pr-10`}>
            <View style={tw`w-5 h-5 rounded-full bg-[${variant.color}]`}></View>
          </View>
          {/* input */}
          <View>
            <TextInput
              onChangeText={setValue}
              value={value}
              style={tw`border-[${COLORS.primary}] border-2 text-center w-[76px] px-5 py-[4pxm p] rounded-[10px]`}
            />
          </View>
          {/* edit icon */}
          <TouchableOpacity>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
          {/* delete icon */}
          <TouchableOpacity>
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Category;
