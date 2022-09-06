import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import tw from "twrnc";
import * as yup from "yup";
import { AppForm, AppFormFeilds, AppPicker, AppSubmitButton } from "../forms";

const BLOOD_GROUPS = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

const validationSchema = yup.object().shape({
  blood: yup.string().required().label("Blood Group"),
  location: yup.string().required().label("Location").nullable(),
});

const FindDonnerForm = () => {
  const navigation = useNavigation();

  const handleSubmit = (values) => {
    console.log(values);
    navigation.navigate("FoundDonorScreen");
  };

  return (
    <View style={tw``}>
      <AppForm
        initialValues={{ blood: "", location: null }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppPicker
          name="blood"
          placeholder="Blood Groups"
          items={BLOOD_GROUPS}
        />
        <AppFormFeilds name="location" placeholder="Location" />
        <View style={tw`mt-5`}>
          <AppSubmitButton title="Search Donors" />
        </View>
      </AppForm>
    </View>
  );
};

export default FindDonnerForm;
