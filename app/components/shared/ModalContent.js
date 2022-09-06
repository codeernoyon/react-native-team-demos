import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ModalContent = ({onPress}) => {
  return (
    <View
      style={[
        tw`items-center justify-center`,
        {zIndex: 1000, position: 'relative'},
      ]}>
      <View style={tw`justify-center items-center`}>
        <View
          style={tw`bg-white justify-center items-center p-5 rounded-2xl shadow-lg`}>
          <View style={tw`w-full flex items-center mb-5`}>
            <Image
              source={require('../../assets/images/undraw_handcrafts_document_1.png')}
              style={tw`w-[140px] h-[173px]`}
            />
          </View>
          <Text style={tw`text-black text-xl font-bold text-center mb-3`}>
            Blood is successfully requested!
          </Text>
          <Text style={tw`text-xs text-gray-500 text-center`}>
            We will notify all the potential donors
          </Text>
          <TouchableOpacity
            style={tw`flex items-center mt-6`}
            onPress={onPress}>
            <View
              style={tw`bg-[#F50057] text-white text-4xl font-extrabold w-10 h-10 rounded-full flex items-center justify-center`}>
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalContent;
