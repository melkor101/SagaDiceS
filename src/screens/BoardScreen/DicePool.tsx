import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useApp } from "../../context/AppProvider";
import AlertModal, { Dices } from "./AlertModal";

const DicePool = () => {
  const { availableDices, onRollDices } = useApp();
  const [modalVisible, setModalVisible] = useState(false);
  console.log("availableDices", availableDices);

  const isDicesPoolFree = availableDices.length === 0;
  return (
    <View style={styles.pool}>
      {isDicesPoolFree ? <Text>Press "Roll" to roll dices</Text> : <Dices />}

      <TouchableOpacity
        onPress={() =>
          isDicesPoolFree ? onRollDices() : setModalVisible(true)
        }
        style={styles.rollButton}>
        <Text>Roll</Text>
      </TouchableOpacity>

      <AlertModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default DicePool;

const styles = StyleSheet.create({
  pool: {
    height: 140,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: "#000",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  rollButton: {
    backgroundColor: "#fff",
    width: 60,
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 2,
    elevation: 8,
    zIndex: 11,
  },
});
