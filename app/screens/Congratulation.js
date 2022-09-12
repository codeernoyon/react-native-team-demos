import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
import Button from "../components/shared/Button";

const Congratulation = () => {
  return (
    <SafeAreaView style={tw`p-5`}>
      <View>
        {/* --=== Icon ===--- */}
        <TouchableOpacity>
          <Icon name="close" size={30} color="#000" />
        </TouchableOpacity>
        <View style={tw`h-full justify-center items-center`}>
          {/* --== Image ==-- */}
          <View style={tw`rounded-full overflow-hidden h-[200px] w-[200px]`}>
            <Image
              source={require("../assets/images/congratulation.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          {/* --== content ==-- */}
          <View style={tw`mt-5`}>
            <Text style={tw`text-center text-xl font-semibold`}>
              Congratulation!!!
            </Text>
            <Text style={tw`mt-2`}>You are eligible to donate blood</Text>
          </View>
          {/* -== Button ==-- */}
          <View style={tw`w-full mt-48`}>
            <Button title="Continue" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Congratulation;
