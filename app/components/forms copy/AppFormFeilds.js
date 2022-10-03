import React, {useState} from 'react';
import {useFormikContext} from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppErrorMessage from './AppErrorMessage';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import COLORS from '../../configs/colors';

export default function AppFormFeilds({
  name,
  password = false,
  numberOfLines,
  ...otherProps
}) {
  const [showPassword, setShowPassword] = useState(password);
  const {setFieldTouched, handleChange, errors, touched, values} =
    useFormikContext();

  return (
    <View style={styles.container}>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        style={[
          styles.input,
          touched[name] &&
            errors[name] && {
              borderColor: COLORS?.primary,
              height: numberOfLines ? 110 : null,
              textAlignVertical: numberOfLines ? 'top' : null,
            },
        ]}
        secureTextEntry={showPassword}
        value={values[name]}
      />
      {password && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <AntDesign name="eye" size={24} color={COLORS?.black} />
          ) : (
            <AntDesign name="eyeo" size={24} color={COLORS?.black} />
          )}
        </TouchableOpacity>
      )}
      <AppErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    borderColor: '#EDEDED',
    backgroundColor: COLORS?.white,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  inputError: {
    borderColor: COLORS?.denger,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 32,
  },
});
