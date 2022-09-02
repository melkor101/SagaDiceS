import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, StyleSheet } from "react-native";
import * as React from "react";

import PriceIcons, { OrderItemType } from "./PriceIcons";
import { useApp } from "../../context/AppProvider";
import vikings from "../../data/darkAge/vikings";

type OrderType = {
  item: OrderItemType;
  onClick: (label: string) => void;
};
const color = vikings.iconBackgroundColor;

const Order = ({ item, onClick }: OrderType) => {
  const { availableDices } = useApp();
  const isAvailable = item.plus
    ? availableDices.some(d => d === item.price[0]) &&
      availableDices.some(d => d === item.price[1])
    : item.price.some(p => availableDices.find(d => d === p));
  console.log(item.label, isAvailable);
  console.log(item.label, isAvailable);

  return (
    <TouchableOpacity
      onPress={() => onClick(item.label)}
      style={[styles.card, , isAvailable ? styles.shine : {}]}>
      <PriceIcons item={item} />

      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.order} numberOfLines={2}>
        {item.rule}
      </Text>
      <Text style={styles.text} numberOfLines={3}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Order;

const styles = StyleSheet.create({
  epoch: {
    flex: 1,
    paddingHorizontal: 24,
  },
  shine: {
    shadowColor: "blue",

    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  label: { fontSize: 10, textAlign: "center" },
  text: { fontSize: 10, textAlign: "center" },
  order: {
    fontSize: 8,
    textAlign: "center",
    color: "red",
    marginVertical: 2,
  },
  card: {
    backgroundColor: "#fff",
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
