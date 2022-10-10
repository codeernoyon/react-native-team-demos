import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../configs/colors';

const AppHeader = ({title}) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    let canGoBack = navigation.canGoBack();
    if (canGoBack) return navigation.goBack();
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={tw`py-2 flex-row items-center justify-center`}>
      <TouchableOpacity
        style={tw`absolute left-3 z-50 p-2 rounded-full`}
        onPress={onPressHandler}>
        <AntDesign name="arrowleft" size={21} color={COLORS.title}/>
      </TouchableOpacity>
      <Text style={[tw`text-center font-medium text-lg`, { color: COLORS.title }]}>
        {title}
      </Text>
    </View>
  );
};

export default AppHeader;
