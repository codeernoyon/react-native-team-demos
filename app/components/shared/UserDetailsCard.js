import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import SaveShare from './SaveShare';

const UserDetailsCard = () => {
  return (
    <View style={tw`flex flex-row bg-white rounded-xl`}>
      {/* Left View */}
      <View style={tw`border-r border-[#B7B7B7] pr-5`}>
        <View style={tw`flex flex-col justify-center items-center`}>
          <View style={tw`border-[#FF9BBF] border-2 p-[2px] rounded-full`}>
            <Image
              source={require('../../assets/images/user_image.png')}
              style={tw`w-[56.33px] h-[56.33px]`}
            />
          </View>
          <Text
            style={tw`font-bold text-[15px] text-gray-800 mt-[13px] mb-[18px]`}>
            Khalid Saifullah
          </Text>
        </View>
        <View style={[tw`flex-row items-center justify-center`]}>
          <SaveShare />
        </View>
      </View>

      {/* Right View */}
      <View style={tw`border-l border-gray-50 pl-5`}>
        <View style={tw`flex flex-row justify-between items-center mb-5`}>
          <View style={tw`flex-row items-center mt-4`}>
            <Image
              source={require('../../assets/icons/blood_give.png')}
              style={tw`w-7 h-7`}
            />
            <View style={tw`ml-3`}>
              <Text style={tw`text-[#F50057] text-xl font-bold mr-1`}>5</Text>
              <Text style={tw`text-gray-500 text-[11px]`}>Times donated</Text>
            </View>
          </View>

          <View style={tw`mr-4 relative`}>
            <Image
              source={require('../../assets/images/Blood_drop.png')}
              style={tw`w-[42px] h-[61px]`}
            />
            <Text style={tw`absolute top-5 left-4 font-bold`}>A+</Text>
          </View>
        </View>

        <View style={tw``}>
          <Text style={tw`text-gray-500 text-xs pb-1`}>User Location</Text>
          <Text style={tw`text-gray-600 text-[16px] mb-1 font-semibold`}>
            Sher e bangla medical collage
          </Text>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require('../../assets/icons/distance.png')}
              style={tw`w-4`}
              resizeMode="contain"
            />
            <Text style={tw`text-gray-500 ml-2 text-[10px]`}>
              4 km far from you
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserDetailsCard;
