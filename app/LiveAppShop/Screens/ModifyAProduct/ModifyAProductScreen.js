import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../component/utils/Button";
import { AppHeader } from "../../shared";
// import ManageMyStoreBer from "./ManageMyStoreBer";
import { SparklesIcon } from "react-native-heroicons/solid";
import tw from "twrnc";
import COLORS from "../../configs/colors";
const ManageMyStoreScreen = () => {
  return (
    <SafeAreaView>
      {/* ----==== App Header ----==== */}
      <AppHeader title={"Manage My Store"} />
      {/* -----==== Screen title ====----- */}
      <Text style={tw`mt-5 px-5 text-[18px] font-semibold`}>Printed Shirt</Text>
      {/* <ManageMyStoreBer /> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        className="bg-gray-100 mt-10"
      >
        {/* ----==== Right Arrow ====---- */}
        <View>
          <SparklesIcon />
        </View>
        <View
          style={tw`rounded-2xl overflow-hidden w-[170px] h-[139px] border-2 border-[${COLORS.primary}] mx-2`}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            }}
            style={{ width: 170, height: 139 }}
          />
        </View>
        <View
          style={tw`rounded-2xl overflow-hidden w-[170px] h-[139px] border-2 border-[${COLORS.primary}] mx-2`}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            }}
            style={{ width: 170, height: 139 }}
          />
        </View>
      </ScrollView>
      {/* -----==== Stores ====----- */}
      <Button title="done" h="50px" w="168px" border />
      <Button title="done" h="50px" w="168px" />
    </SafeAreaView>
  );
};

export default ManageMyStoreScreen;
