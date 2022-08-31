import * as React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { images } from "../../assets/images";

type OrderType = {
  item: {
    label: string;
    text: string;
    rule: string;
    price: string[];
  };
};

const Order = ({ item }: OrderType) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>
      {item.price.map(image => (
        <Image source={images.vikingsBigIcon} style={styles.icons} />
      ))}
    </View>
    <Text style={styles.label}>{item.label}</Text>
    <Text style={styles.order} numberOfLines={2}>
      {item.rule}
    </Text>
    <Text style={styles.text} numberOfLines={3}>
      {item.text}
    </Text>
  </View>
);

export default Order;

const styles = StyleSheet.create({
  epoch: {
    flex: 1,
    paddingHorizontal: 24,
  },
  label: { fontSize: 10, textAlign: "center" },
  text: { fontSize: 10, textAlign: "center" },
  iconContainer: { flexDirection: "row", marginBottom: 6 },
  icons: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 4,
  },
  order: {
    fontSize: 8,
    textAlign: "center",
    color: "red",
    marginVertical: 2,
  },
  card: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 6,
    flex: 1,
    minWidth: 80,
    maxWidth: 100,
  },
});
