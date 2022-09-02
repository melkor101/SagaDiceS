import vikings from "../../data/darkAge/vikings";
import * as React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useApp } from "../../context/AppProvider";
import PriceIcons from "./PriceIcons";
import { useState } from "react";
import SelectCardDices from "./SelectCardDices";

type ModalType = {
  selectedCard: string;
  onClose: () => void;
};

const CardModal = ({ selectedCard, onClose }: ModalType) => {
  const { removeDice } = useApp();
  const [selectedDice, setSelected] = useState();
  const modalItem =
    vikings.activation.find(a => a.label === selectedCard) ||
    vikings.skills.find(s => s.label === selectedCard);

  const onActivateSkill = () => {};

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!selectedCard}
      onRequestClose={() => {}}>
      <View style={styles.modal}>
        <View style={styles.footer}>
          <Text style={styles.headerText}>{modalItem?.label}</Text>
          <Text style={styles.headerText}>{modalItem?.rule}</Text>
          <Text style={styles.headerText}>{modalItem?.text}</Text>

          {modalItem && (
            <SelectCardDices
              selectedDice={selectedDice}
              item={modalItem}
              onSelect={setSelected}
            />
          )}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.addButton} onPress={onClose}>
            <Text style={styles.addButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={onActivateSkill}>
            <Text style={styles.addButtonText}>Activate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CardModal;

const styles = StyleSheet.create({
  headerText: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 11,
    bottom: 90,
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    backgroundColor: "#ddd",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "black",
    padding: 20,
    backgroundColor: "#ddd",
    borderTopWidth: 2,
    borderTopColor: "#ddd",
  },
  modal: {
    height: "40%",
    marginTop: "auto",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "blue",
  },
  addButton: {
    backgroundColor: "#98B3B7",
    width: 160,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
