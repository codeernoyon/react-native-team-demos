import {Text, View} from 'react-native';
import tw from 'twrnc';
import COLORS from '../../configs/colors';

const FormScreenHeader = () => {
  return (
    <View style={tw``}>
      <Text style={[tw`text-3xl font-semibold`, {color: COLORS.title}]}>
        Find a <Text style={{color: COLORS.primary}}>donor</Text>
      </Text>
      <Text style={[tw`text-sm font-medium mt-3`, {color: COLORS.text}]}>
        {
          'Search for blood donor around you.\nWe try to find best match for you'
        }
      </Text>
    </View>
  );
};

export default FormScreenHeader;
