import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const TeamScore = ({ team, score, onAddScore, onSubtractScore }) => (
  <View style={styles.teamBox}>
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>Tim {team}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.subtractButton]}
          onPress={() => onSubtractScore(team)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={() => onAddScore(team)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default TeamScore;
