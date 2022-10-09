import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import COLORS from "../../configs/colors";
import { PurchaseSummaryData } from "../../data/PurchaseSummaryData";

const PurchaseSummerStore = () => {
  const { stores } = PurchaseSummaryData;
  return (
    <View style={tw`mt-5`}>
      {stores.map((store, index) => (
        <View key={index} style={tw`my-5`}>
          {/* ----==== title ====---- */}
          <View
            style={[
              tw`absolute -top-5 h-[34px] w-[112px] bg-[] justify-center items-center rounded-r-lg  z-10`,
              { backgroundColor: COLORS.primary },
            ]}
          >
            <Text style={tw`text-white text-[12px]`}>{store.title}</Text>
          </View>
          {/* ----===== store details ====---- */}

          <View style={tw`px-5`}>
            <View
              style={tw`border-[1px] pb-5 pt-10 px-5 border-gray-300 rounded-xl`}
            >
              {store.items.map((item, index) => (
                <View
                  key={index}
                  style={tw`flex-row justify-between items-center my-2`}
                >
                  <Text style={tw`text-[12px] w-24`}>{item.title}</Text>
                  <Text style={tw`text-[14px] font-bold`}>{item.size}</Text>
                  <Text style={tw`text-[14px] font-bold`}>{item.quantity}</Text>
                  <View
                    style={tw`h-[14px] w-[14px] bg-[${item.color}] rounded-full`}
                  ></View>
                  <Text style={tw`text-[14px] font-bold w-8`}>
                    {item.price}
                  </Text>
                </View>
              ))}
              {/* ----==== under line ====---- */}
              <View
                style={[tw`h-[1px] my-1`, { backgroundColor: COLORS.primary }]}
              ></View>
              {/* ----===== total =====----- */}
              <View
                style={tw`relative right-0 mt-2 flex-row items-end justify-end`}
              >
                <View style={tw`flex-row w-28 justify-between`}>
                  <Text style={tw`font-bold text-[16px]`}>Total</Text>
                  <Text style={tw`font-bold text-[16px]`}>
                    {stores[0].totalPrice}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PurchaseSummerStore;
