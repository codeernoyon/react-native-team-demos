import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import COLORS from "../../configs/colors";

const MainComment = () => {
  return (
    <View style={tw`px-5 mt-3 flex-row`}>
      {/* -----===== user img ======------ */}
      <TouchableOpacity
        style={tw`relative h-12 w-12 rounded-full overflow-hidden bg-black mr-2`}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1665418277654-3a3f18c7362d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
          style={tw`h-12 w-12 rounded-full`}
        />
      </TouchableOpacity>
      {/* ------======= comment box =========------ */}
      <View style={tw`flex-1`}>
        <View style={tw`bg-gray-200 rounded-md  px-4 py-5`}>
          <View style={tw`flex-row justify-between`}>
            {/* -----===== user name ======---- */}
            <View>
              <Text style={tw`text-[15px] font-bold`}>Nolan Curtis</Text>
              <Text style={tw`text-gray-500`}>username</Text>
            </View>
            {/* -----====== comment time ========------ */}
            <View style={tw`flex-row justify-center`}>
              <Text style={tw`mr-1 font-semibold text-gray-400`}>2 min</Text>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={24}
                  color=""
                  style={tw`text-gray-600`}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* -----====== Comment Text ======----- */}
          <View style={tw`mt-4`}>
            <Text style={tw`text-[19px] font-semibold`}>prefect!</Text>
          </View>
        </View>

        {/* ----===== Likes Comments =====-----*/}
        <View style={tw`flex-row my-3`}>
          {/* -----======= like =====------ */}
          <TouchableOpacity style={tw`flex-row mr-5`}>
            <Text style={tw`mr-1`}>Like</Text>
            <Text style={tw`text-[${COLORS.primary}]`}>(2)</Text>
          </TouchableOpacity>
          {/* -----======= comments =====------ */}

          <TouchableOpacity style={tw`flex-row `}>
            <Text style={tw`mr-1`}>Comment</Text>
            <Text style={tw`text-[${COLORS.primary}]`}>(22)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainComment;
