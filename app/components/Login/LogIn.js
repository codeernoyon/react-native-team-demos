import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import * as yup from "yup";
import { AppForm, AppFormFeilds, AppSubmitButton } from "../forms";

const validationSchema = yup.object().shape({
  user: yup.string().required().label("user").nullable(),
});

const LogIn = () => {
  const navigation = useNavigation();

  const handleSubmit = (values) => {
    console.log(values);
    navigation.navigate("FoundDonorScreen");
  };
  return (
    <SafeAreaView style={tw`bg-white h-full px-6 pt-20`}>
      <View>
        <View>
          <Text style={tw`text-[36px] font-semibold`}>Welcome back!</Text>
          <Text style={tw`text-[36px] font-semibold text-[#F50057]`}>
            Login
          </Text>
        </View>
        <View style={tw``}>
          <AppForm
            initialValues={{ user: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppFormFeilds name="user" placeholder="Login" />
            <View style={tw`mt-5`}>
              <AppSubmitButton title="Login" />
            </View>
          </AppForm>
        </View>
        <View style={tw`flex-row justify-center mt-8`}>
          <Text>Dont't have account? </Text>
          <Text style={tw`text-[#F50057]`}>Sing up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
