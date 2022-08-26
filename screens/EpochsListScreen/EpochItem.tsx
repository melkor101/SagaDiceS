import * as React from "react";

import { View, Text, StyleSheet } from "react-native";

const EpochItem = ({
  label,
  isAvailable,
}: {
  label: string;
  isAvailable: boolean;
}) => {
  return (
    <View
      style={[
        styles.epoch,
        { backgroundColor: isAvailable ? "#fff" : "#c1c1c1" },
      ]}>
      <Text>{label}</Text>
    </View>
  );
};

export default EpochItem;

const styles = StyleSheet.create({
  epoch: {
    flex: 1,
    height: 60,

    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dedede",
    marginVertical: 12,
    paddingHorizontal: 12,
  },
});
