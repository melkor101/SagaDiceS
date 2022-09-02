import * as React from "react";

import { View, Text, StyleSheet, Image, Modal, Pressable } from "react-native";
import { useApp } from "../../context/AppProvider";
import vikings from "../../data/darkAge/vikings";
import { Dice } from "../../types";

type AlertModalType = {
  modalVisible: boolean;
  onClose: () => void;
};
const color = vikings.iconBackgroundColor;

export const DiceIcon = ({ side }: { side: Dice }) => {
  const color = vikings.iconBackgroundColor;

  return (
    <Image
      source={vikings.icons[side]}
      style={[styles.dice, { backgroundColor: color }]}
    />
  );
};

export const Dices = () => {
  const { availableDices } = useApp();

  return (
    <View style={styles.container}>
      {availableDices.map((side, index) => (
        <DiceIcon key={"dice_" + index} side={side} />
      ))}
    </View>
  );
};

const AlertModal = ({ modalVisible, onClose }: AlertModalType) => {
  const { onRollDices } = useApp();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>
            {"Are you sure.\nYou have this dices in pool:"}
          </Text>

          <Dices />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onClose}>
              <Text>Close</Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => {
                onRollDices();
                onClose();
              }}>
              <Text>Roll</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  dice: {
    width: 40,
    height: 40,
    backgroundColor: "#dbd59c",
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  title: {
    marginBottom: 20,
    fontSize: 16,
    padding: 20,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "60%",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 20,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#cecece",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 20,
  },
});
