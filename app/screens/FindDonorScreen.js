import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { FindDonnerForm } from "../components/FindDonner";
import { AppHeader } from "../components/shared";
import FormScreenHeader from "../components/shared/FormScreenHeader";

const FindDonorScreen = () => {
  return (
    <>
      <AppHeader title="Search" />
      <View style={tw`px-5 mt-5`}>
        <FormScreenHeader />
      </View>
      <View style={tw`px-5 mt-5`}>
        <FindDonnerForm />
      </View>
    </>
  );
};

export default FindDonorScreen;
