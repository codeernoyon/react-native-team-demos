import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

const ModalWrapper = ({children, isModalVisible, setModalVisible}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      backdropOpacity={0.3}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {children}
      </View>
    </Modal>
  );
};

export default ModalWrapper;
