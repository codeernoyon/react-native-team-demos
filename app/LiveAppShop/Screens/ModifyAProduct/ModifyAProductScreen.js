import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../component/utils/Button";
// import ManageMyStoreBer from "./ManageMyStoreBer";
import tw from "twrnc";
import { AppHeader } from "../../component/shared";
import { ModifyAProductData } from "../../data/ModifyAProductData";
import Ber from "./Ber";
import Category from "./Category";
import DemandInputs from "./DemandInputs";
import Products from "./Products";
const ManageMyStoreScreen = () => {
  const { title } = ModifyAProductData;
  return (
    <SafeAreaView>
      {/* ----==== App Header ----==== */}
      <AppHeader title={"Manage My Store"} />

      {/* -----==== Screen title ====----- */}
      <Text style={tw`mt-5 px-5 text-[18px] font-semibold`}>{title}</Text>

      {/* <ManageMyStoreBer /> */}
      <Products />

      {/* ----==== demand input =====---- */}
      <DemandInputs />
      {/* ======----- Ber ------====== */}
      <Ber />
      {/* ------===== product Category ======----- */}
      <Category />

      {/* -----==== Stores ====----- */}
      <View style={tw`mt-5`}>
        <Button title="Validate" h="50px" w="168px" />
        <Button title="Add Product" h="50px" w="168px" border />
      </View>
    </SafeAreaView>
  );
};

export default ManageMyStoreScreen;
