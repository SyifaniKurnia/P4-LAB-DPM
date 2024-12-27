import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const ModalPopup = ({ visible, winner, onClose }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>{winner} Menang!</Text>
        <TouchableOpacity style={styles.modalButton} onPress={onClose}>
          <Text style={styles.modalButtonText}>Tutup</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default ModalPopup;
