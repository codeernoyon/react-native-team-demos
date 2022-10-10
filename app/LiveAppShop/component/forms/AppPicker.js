import { useFormikContext } from "formik";
import React, { useRef } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Feather from "react-native-vector-icons/Feather";
import tw from "twrnc";
import { default as colors, default as COLORS } from "../../configs/colors";
import { BloodDrop } from "../shared";
import AppErrorMessage from "./AppErrorMessage";

function AppPicker({ name, placeholder, items }) {
  const refRBSheet = useRef();
  const [open, setOpen] = React.useState(false);
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();

  const handlePress = () => {
    setFieldTouched(name);
    refRBSheet.current.open();
    setOpen(true);
  };

  const handleClose = (item) => {
    setFieldValue(name, item);
    refRBSheet.current.close();
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={open ? "#00000050" : COLORS.background}
        style={[tw`bg-red-200`, "dark-content"]}
      />
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.input,
          touched[name] && errors[name] && { borderColor: colors?.primary },
        ]}
      >
        {values[name] ? (
          <Text style={styles.value}>{values[name]}</Text>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        <Feather name="chevron-down" size={24} color={COLORS?.primary} />
      </TouchableOpacity>
      <AppErrorMessage visible={touched[name]} error={errors[name]} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="fade"
        openDuration={700}
        height={400}
        onClose={() => setOpen(false)}
        customStyles={{
          wrapper: {
            backgroundColor: "#00000050",
          },
          draggableIcon: {
            backgroundColor: "#ccc",
          },
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={[tw`bg-gray-300`, styles.title]}>{placeholder}</Text>
          <ScrollView>
            <View style={[tw`bg-gray-500`, styles.items]}>
              {items.map((item) => (
                <TouchableOpacity
                  key={item.value}
                  style={[tw`bg-gray-900`, styles.item]}
                  onPress={() => handleClose(item.value)}
                >
                  <BloodDrop group={item.label} style={styles.bloodDrop} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
  value: {
    color: colors?.black,
  },
  input: {
    borderColor: "#EDEDED",
    backgroundColor: COLORS?.white,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingRight: 15,
    paddingVertical: 17,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputError: {
    borderColor: colors?.primary,
  },
  placeholder: {
    color: colors?.gray,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 8,
    color: COLORS?.primary,
    fontWeight: "bold",
    backgroundColor: "red",
  },
  items: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "green",
  },
  item: {
    width: "22%",
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    backgroundColor: "blue",
  },
  itemText: {
    color: colors?.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "aqua",
  },
});

export default AppPicker;
