import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import tw from "twrnc";
import COLORS from "../../configs/colors";

const DemandInputs = () => {
  const [number, onChangeNumber] = useState("2");
  const [price, onChangePrice] = useState("10$");
  return (
    <View>
      <View style={tw` pl-5 mt-3`}>
        <View style={tw`flex-row items-center shadow-xl`}>
          <Text style={tw`mr-1 w-15 text-[16px]`}>Number</Text>
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            style={tw`border-[${COLORS.primary}] border-2 text-center w-[76px] py-2 rounded-[10px]`}
          />
        </View>
        <View style={tw`flex-row items-center mt-4 shadow-xl`}>
          <Text style={tw`mr-1 w-15 text-[16px]`}>Price</Text>
          <TextInput
            onChangeText={onChangePrice}
            value={price}
            style={tw`border-[${COLORS.primary}] border-2 text-center w-[76px] px-5 py-2 rounded-[10px]`}
          />
        </View>
      </View>
    </View>
  );
};

export default DemandInputs;
