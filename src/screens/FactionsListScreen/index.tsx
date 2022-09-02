import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Faction } from "../../context/AppProvider";
import FactionItem from "./FactionItem";

const fractions = [
  Faction.vikings,
  Faction.angloDanish,
  Faction.normans,
  Faction.welsh,
  Faction.angloSaxons,
  Faction.bretons,
  Faction.jomsviking,
  Faction.scots,
  Faction.skraelings,
];

const FractionsListScreen = () => {
  return (
    <ScrollView style={styles.epoch}>
      {fractions.map(f => (
        <FactionItem key={f} label={f} />
      ))}
    </ScrollView>
  );
};

export default FractionsListScreen;

const styles = StyleSheet.create({
  epoch: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
