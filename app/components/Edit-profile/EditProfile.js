import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import * as yup from "yup";
import {
  AppForm,
  AppFormFeilds,
  AppPicker,
  AppSubmitButton,
} from "../../components/forms";
import COLORS from "../../configs/colors";

const gender = [
  {
    title: "Male",
    url: `${require("../../assets/images/Frame.png")}`,
  },
  {
    title: "Female",
    url: `${require("../../assets/images/Frame.png")}`,
  },
];

const bloodDonors = [
  {
    title: "Yes, of course",
    url: `${require("../../assets/images/undraw_1.png")}`,
  },
  {
    title: "Yes, but later",
    url: `${require("../../assets/images/undraw_2.png")}`,
  },
  {
    title: "Never",
    url: `${require("../../assets/images/undraw_3.png")}`,
  },
];

const BLOOD_BEG = [
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];
const BLOOD_GROUP = [
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
  name: yup.string().required().min(2).max(10).label("Patient name"),
  blood: yup.string().required().label("Patient blood"),
  // country: yup.string().required().label('country'),
});

const EditScreenForm = () => {
  const [activeBg, setActiveBg] = useState("Male");
  const [activeBgBlood, setActiveBgBlood] = useState("Yes, of course");
  const navigation = useNavigation();

  const handleSubmit = (values) => {
    console.log(values);
    navigation.navigate("PhoneNumberScreen");
  };

  return (
    <>
      <AppForm
        initialValues={{
          name: "",
          blood: "",
          // country: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View style={tw`flex-1`}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flexGrow: 1 }}
          >
            {/* from here on */}
            <AppFormFeilds name="name" placeholder="Your name" />
            <AppPicker
              name="blood"
              placeholder="Blood group"
              items={BLOOD_GROUP}
            />
            <View style={tw`mt-10`}>
              <Text style={tw`text-black mb-4 text-center font-semibold`}>
                Your <Text style={tw`text-[${COLORS.primary}] `}>gender</Text>
              </Text>
              <View style={tw`flex-row items-center justify-center`}>
                {gender.map((gen) => (
                  <TouchableOpacity
                    onPress={() => setActiveBg(gen.title)}
                    key={gen.title}
                    style={tw`mx-2 border border-[${COLORS.primary}] ${
                      gen.title === activeBg ? "bg-[#F50057]" : null
                    } rounded-md justify-center pt-1 px-4 pb-2`}
                  >
                    <Image
                      source={gen.url}
                      style={tw`w-16 h-16 rounded-md`}
                      resizeMode="contain"
                    />
                    <Text
                      style={tw`text-[12px] font-medium text-center ${
                        gen.title === activeBg ? "text-white" : "text-[#F50057]"
                      }`}
                    >
                      {gen.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={tw`mt-10`}>
              <Text style={tw`text-black mb-4 text-center`}>
                You want to be a{" "}
                <Text style={tw`text-[${COLORS.primary}] `}>blood donor?</Text>
              </Text>
              <View style={tw`flex-row items-center justify-center`}>
                {bloodDonors.map((gen) => (
                  <TouchableOpacity
                    onPress={() => setActiveBgBlood(gen.title)}
                    key={gen.title}
                    style={tw`mx-2 border border-[${COLORS.primary}] ${
                      gen.title === activeBgBlood ? "bg-[#F50057]" : null
                    } rounded-md justify-center pt-1 px-4 pb-2`}
                  >
                    <Image
                      source={gen.url}
                      style={tw`w-16 h-16 rounded-md`}
                      resizeMode="contain"
                    />
                    <Text
                      style={tw`text-[12px] font-medium text-center ${
                        gen.title === activeBgBlood
                          ? "text-white"
                          : "text-[#F50057]"
                      }`}
                    >
                      {gen.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={tw`pt-4 justify-center items-center w-full`}>
              <Text style={tw`text-xs text-[${COLORS.gray}] font-semibold`}>
                {`If you can't donated blood, don't be sad!`}{" "}
              </Text>
              <Text style={tw`text-xs text-[${COLORS.gray}] font-semibold`}>
                you still can help to{" "}
                <Text
                  style={tw`text-xs text-[${COLORS.primary}] font-semibold`}
                >
                  save life{" "}
                </Text>
                by geing a member
              </Text>
            </View>
          </ScrollView>

          {/* button */}
          <View style={tw`py-3`}>
            <AppSubmitButton title="Update" />
          </View>
        </View>
      </AppForm>
    </>
  );
};

export default EditScreenForm;
