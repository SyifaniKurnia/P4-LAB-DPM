import React, { useState } from "react";
import { View, Text } from "react-native";
import TeamScore from "./components/TeamScore";
import ModalPopup from "./components/ModalPopup";
import ResetButton from "./components/ResetButton";
import styles from "./styles/styles";

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [winner, setWinner] = useState("");

  const handleAddScore = (team) => {
    if (team === "A") {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        setWinner("Tim A");
        setModalVisible(true);
      }
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        setWinner("Tim B");
        setModalVisible(true);
      }
    }
  };

  const handleSubtractScore = (team) => {
    if (team === "A" && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === "B" && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
    setModalVisible(false); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>--- Live Futsal Score ---</Text>

      <TeamScore
        team="A"
        score={scoreA}
        onAddScore={handleAddScore}
        onSubtractScore={handleSubtractScore}
      />

      <Text style={styles.vsText}>VS</Text>

      <TeamScore
        team="B"
        score={scoreB}
        onAddScore={handleAddScore}
        onSubtractScore={handleSubtractScore}
      />

      <ResetButton onPress={handleReset} />

      <ModalPopup visible={modalVisible} winner={winner} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default App;
