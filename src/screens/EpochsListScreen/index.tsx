import * as React from "react";

import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Epochs } from "../../../context/AppProvider";
import EpochItem from "./EpochItem";

const epochs = [
  {
    label: Epochs.darkAges,
    isAvailable: true,
  },
  {
    label: Epochs.ageOfHannibal,
    isAvailable: false,
  },
  {
    label: Epochs.ageOfInvasions,
    isAvailable: false,
  },
  {
    label: Epochs.ageOfMagic,
    isAvailable: false,
  },
];

const EpochsListScreen = () => {
  return (
    <ScrollView style={styles.epoch}>
      {epochs.map(({ label, isAvailable }) => (
        <EpochItem key={label} label={label} isAvailable={isAvailable} />
      ))}
    </ScrollView>
  );
};

export default EpochsListScreen;

const styles = StyleSheet.create({
  epoch: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
