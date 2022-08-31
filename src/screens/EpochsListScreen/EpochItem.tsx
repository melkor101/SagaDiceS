import { useNavigation } from "@react-navigation/native";
import * as React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Routes } from "../../../App";
import { images } from "../../assets/images";
const EpochItem = ({
  label,
  isAvailable,
}: {
  label: string;
  isAvailable: boolean;
}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate(Routes.factionsList)}
      style={[
        styles.epoch,
        { backgroundColor: isAvailable ? "#fff" : "#c1c1c1" },
      ]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        {!isAvailable && <Text style={styles.status}>comming soon</Text>}
      </View>
      <Image source={images.arrow} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default EpochItem;

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
  },

  epoch: {
    flex: 1,
    height: 80,

    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    borderColor: "#000",
  },
  status: {
    fontSize: 20,
    color: "#D20A0A",
  },
  arrow: {
    width: 32,
    height: 32,
  },
});
