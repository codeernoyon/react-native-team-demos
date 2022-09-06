import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import tw from 'twrnc';

const Button = ({title = 'Button', onPress}) => {
  return (
    <TouchableOpacity
      style={tw`bg-[#F50057] w-full rounded-full px-4 py-3`}
      onPress={onPress}>
      <Text style={tw`text-white text-base font-semibold text-center`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
