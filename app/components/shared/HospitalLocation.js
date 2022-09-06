import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../configs/colors';
import getDirections from 'react-native-google-maps-directions'

const HospitalLocation = ({ title, name, distance }) => {

    const getDirection = () => {
        const data = {
            destination: {
                latitude: 23.72623173587334, 
                longitude: 90.39755365525656
            }
        }
        getDirections(data)
    }

    return (
        <View style={tw``}>
            <Text style={tw`text-gray-500 text-xs pb-1`}>{title || "Hospital location"}</Text>
            <TouchableOpacity onPress={getDirection}>
                <Text style={tw`text-gray-600 text-lg font-semibold pb-1`} numberOfLines={1}>
                    {name}
                </Text>
                <View style={tw`flex-row items-center`}>
                    <Feather name="map" size={12} color={COLORS.primary} />
                    <Text style={tw`text-gray-500 ml-2 text-[10px]`}>
                        {distance} km far from you
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default HospitalLocation;