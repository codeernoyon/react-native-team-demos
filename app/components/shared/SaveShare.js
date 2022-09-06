import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../configs/colors';

const SaveShare = () => {
  const [isSaved, setIsSaved] = React.useState(false);

  return (
    <View style={[tw`flex-row items-center justify-center`]}>
      <View style={[tw`mr-10`]}>
        <TouchableOpacity style={tw`justify-center items-center`} onPress={() => setIsSaved(!isSaved)}>
          <AntDesign name={isSaved ? "heart" : "hearto"} size={18} color={COLORS.primary} />
          <Text style={tw`text-gray-400 font-semibold text-[9px] mt-1`}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={tw`justify-center items-center`}>
          <Feather name={"share-2"} size={18} color={COLORS.primary} />
          <Text style={tw`text-gray-400 font-semibold text-[9px] mt-1`}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default SaveShare;
