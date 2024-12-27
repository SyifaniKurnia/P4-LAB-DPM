import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";

const ResetButton = ({ onPress }) => (
  <TouchableOpacity style={styles.resetButton} onPress={onPress}>
    <Text style={styles.resetButtonText}>Reset</Text>
  </TouchableOpacity>
);

export default ResetButton;
