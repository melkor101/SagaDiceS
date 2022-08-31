import { useNavigation } from "@react-navigation/native";
import * as React from "react";

import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Routes } from "../../../App";
import { images } from "../../assets/images";

const cardWidth = Dimensions.get("screen").width;

const FactionItem = ({ label }: { label: string }) => {
  const { navigate } = useNavigation();
  const offsetX = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.View
      style={[styles.epoch, { transform: [{ translateX: offsetX }] }]}>
      <TouchableOpacity
        onPress={() => navigate(Routes.board)}
        style={[styles.card]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <Image source={images.arrow} style={styles.arrow} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FactionItem;

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
  },

  epoch: {
    flex: 1,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderColor: "#000",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
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
