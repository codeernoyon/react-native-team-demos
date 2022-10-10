import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import COLORS from "../../configs/colors";
import { ModifyAProductData } from "../../data/ModifyAProductData";

const Products = () => {
  const { products } = ModifyAProductData;
  return (
    <View>
      {/* ----===== Scroll area =====----- */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingRight: 30,
        }}
        className="bg-gray-100 mt-10"
      >
        {/* ----==== Right Arrow ====---- */}
        {products?.map((product, index) => (
          <TouchableOpacity
            key={index}
            style={tw`rounded-2xl overflow-hidden w-[170px] h-[139px] border-2 border-[${COLORS.primary}] mx-2`}
          >
            <Image
              source={{
                uri: product.img,
              }}
              style={{ width: 170, height: 139 }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* ----==== Right Arrow =====----- */}
      <View
        style={tw`absolute right-0 top-0 z-10 h-full w-8 bg-gray-100 items-center justify-center pr-1`}
      >
        <TouchableOpacity>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Products;
