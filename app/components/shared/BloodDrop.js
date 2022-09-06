import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import COLORS from '../../configs/colors';

const BloodDrop = ({ group, style }) => {
  return (
    <View style={[tw`relative w-16 h-16`, style]}>
      <Text
        style={[
          tw`text-sm font-bold self-center absolute z-10 top-4`,
          { color: COLORS.primary },
        ]}>
        {group || "A+"}
      </Text>
      <Image
        source={require('../../assets/images/Blood_drop.png')}
        style={tw`w-16 h-16`}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default BloodDrop;
