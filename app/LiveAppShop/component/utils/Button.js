import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import COLORS from "../../configs/colors";

const Button = ({ title, border, w, h, r = "full" }) => {
  return (
    <View style={tw`my-4 items-center`}>
      <TouchableOpacity
        style={[
          tw`h-[${h}] w-[${w}] justify-center items-center rounded-${r} ${
            border
              ? `bg-none border-2 border-[${COLORS.primary}]`
              : `border-none border-none bg-[${COLORS.primary}]`
          } `,
        ]}
      >
        <Text
          style={tw`text-[18px] text-white ${
            border && `text-[${COLORS.primary}]`
          }`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
