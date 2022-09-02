import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import vikings from "../../data/darkAge/vikings";
import { Dice } from "../../types";

export type OrderItemType = {
  label: string;
  text: string;
  rule: string;
  price: string[];
  plus?: boolean;
};

const color = vikings.iconBackgroundColor;

const SelectCardDices = ({
  item,
  selectedDice,
  onSelect,
}: {
  item: OrderItemType;
  selectedDice: Dice;
  onSelect: () => {};
}) => {
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
    <Pressable
      onPress={onSelect ? () => onSelect : null}
      style={styles.iconContainer}>
      {item.price.map((image, index) => (
        <Image
          key={"image_" + index}
          // @ts-ignore
          source={vikings.icons[image]}
          style={[
            styles.icons,
            selectedDice
              ? {
                  backgroundColor: color,
                  shadowColor: "green",
                  shadowOpacity: 0.8,
                  shadowRadius: 4,
                }
              : { backgroundColor: color },
          ]}
        />
      ))}
    </Pressable>
  );
};

export default SelectCardDices;

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
