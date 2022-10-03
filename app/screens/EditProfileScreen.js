import { Image, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { EditProfile } from "../components/Edit-profile";
import { AppHeader, Screen } from "../components/shared";
import COLORS from "../configs copy/colors";

const BloodRequestScreen = () => {
  return (
    <Screen style={[tw`flex-1 pb-2`, { backgroundColor: "#F9F9F9" }]}>
      <AppHeader title={"Edit Profile"} />
      {/* Image */}
      <TouchableOpacity style={tw`justify-center flex-row mt-2`}>
        <View
          style={[
            tw`bg-white rounded-full border-4`,
            { padding: 1, borderColor: COLORS.redLight },
          ]}
        >
          <Image
            source={require("../assets/images/user_image.png")}
            style={{ width: 100, height: 100 }}
            resizeMode="cover"
          />
          <View
            style={tw`absolute h-full w-full bg-black rounded-full flex items-center justify-center bg-opacity-20`}
          >
            <Image
              source={require("../assets/icons/Vector.png")}
              style={{ width: 20, height: 20 }}
              resizeMode="cover"
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={tw`mt-5 px-5 flex-1`}>
        <EditProfile />
      </View>
    </Screen>
  );
};

export default BloodRequestScreen;
