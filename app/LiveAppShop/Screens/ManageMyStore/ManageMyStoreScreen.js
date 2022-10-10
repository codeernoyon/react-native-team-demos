import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { AppHeader } from "../../component/shared";
import COLORS from "../../configs/colors";
import ManageMyStoreBer from "./ManageMyStoreBer";
import ManageMyStoreItems from "./ManageMyStoreItems";

const ManageMyStoreScreen = () => {
  return (
    <SafeAreaView>
      {/* ----==== App Header ----==== */}
      <AppHeader title={"Manage My Store"} />
      {/* -----==== Ber ====----- */}
      <ManageMyStoreBer />
      {/* -----==== Stores ====----- */}
      <ManageMyStoreItems />

      {/* ----==== Button ====---- */}
      <View style={tw`mt-30 items-center`}>
        <TouchableOpacity
          style={[
            tw`h-[61px] w-[263px] justify-center items-center rounded-full `,
            { backgroundColor: COLORS.primary },
          ]}
        >
          <Text style={tw`text-[18px] text-white`}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManageMyStoreScreen;
