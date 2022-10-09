import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import COLORS from "../../configs/colors";
import { ManageMyStoreData } from "../../data/ManageMyStoreData";

const PurchaseSummaryBer = () => {
  const { ber } = ManageMyStoreData;
  return (
    <View
      style={[
        tw`px-10 h-[65px] my-5 w-full shadow-xl`,
        { backgroundColor: COLORS.primary },
      ]}
    >
      <View
        style={tw`h-full flex-row justify-between items-center first:text-2xl `}
      >
        {ber?.map((item, index) => (
          <Text
            key={item.id}
            style={tw`text-white text-[16px] ${index === 2 ? "pr-10" : "p-0"}`}
          >
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PurchaseSummaryBer;
