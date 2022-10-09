import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

import { ManageMyStoreData } from "../../data/ManageMyStoreData";

const ManageMyStoreItems = () => {
  const { items } = ManageMyStoreData;
  return (
    <View>
      {items?.map((item, index) => (
        <View
          style={tw`px-7 pl-15 border-b-[1px]  border[#2FC8B3] border-opacity-60 pt-5 pb-2`}
        >
          <View key={index * 2} style={tw`flex-row justify-between my-2 `}>
            <Text style={tw`text-[18px]`}>{item.id}</Text>
            <Text style={tw`text-[18px] text-center w-36`}>{item.title}</Text>
            <Text style={tw`text-[18px]`}>{item.quantity}</Text>
            <TouchableOpacity
              style={tw`w-[28px] h-[28px] rounded-full items-center justify-center bg-black`}
            >
              <Text>
                <Icon name="plus" size={20} color="#fff" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ManageMyStoreItems;
