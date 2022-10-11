import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import CommentHeder from "./CommentHeder";
import MainComment from "./MainComment";
import SubComment from "./SubComment";

const CommentScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`mt-10 border-t-2 border-gray-300`}>
        {/* =====---- comment section header -----======= */}
        <CommentHeder />
        {/* =====----- Main Comment -----====== */}
        <MainComment />
        {/* =====----- sub Comment -----====== */}
        <SubComment />
      </View>
    </SafeAreaView>
  );
};

export default CommentScreen;
