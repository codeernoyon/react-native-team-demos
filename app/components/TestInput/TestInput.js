import { Formik } from "formik";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";

const TestInput = () => {
  const [change, setChange] = useState("");
  return (
    <View>
      <Formik
        initialValues={{ title: "Test input" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View style={tw`bg-white py-3 px-4 rounded-full`}>
            <TextInput
              placeholder={props.title}
              onChange={props.handleChange("title")}
              value={props.values.title}
              style={{
                fontSize: 16,
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default TestInput;
