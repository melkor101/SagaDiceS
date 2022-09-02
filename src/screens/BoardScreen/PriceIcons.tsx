import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import vikings from "../../data/darkAge/vikings";

export type OrderItemType = {
  label: string;
  text: string;
  rule: string;
  price: string[];
  plus?: boolean;
};

const color = vikings.iconBackgroundColor;

const PriceIcons = ({ item }: { item: OrderItemType }) => {
  return item.plus ? (
    <View style={styles.iconContainer}>
      <Image
        // @ts-ignore
        source={vikings.icons[item.price[0]]}
        style={[styles.icons, { backgroundColor: color }]}
      />
      <Text style={styles.plusIcon}>+</Text>
      <Image
        // @ts-ignore
        source={vikings.icons[item.price[0]]}
        style={[styles.icons, { backgroundColor: color }]}
      />
    </View>
  ) : (
    <View style={styles.iconContainer}>
      {item.price.map((image, index) => (
        <Image
          key={"image_" + index}
          // @ts-ignore
          source={vikings.icons[image]}
          style={[styles.icons, { backgroundColor: color }]}
        />
      ))}
    </View>
  );
};

export default PriceIcons;

const styles = StyleSheet.create({
  iconContainer: { flexDirection: "row", marginBottom: 6 },
  icons: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 4,
  },
  plusIcon: {
    color: "red",
    borderRadius: 10,
    fontWeight: "900",
    width: 20,
    height: 20,
    textAlign: "center",
  },
});
