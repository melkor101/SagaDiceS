import * as React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [dices, setDices] = React.useState<number[]>([]);

  const randomDice = () => {
    let arr = Array.apply(null, Array(8)).map(function () {});

    const randomDices = arr.map(() => {
      return Math.floor(6 * Math.random()) + 1;
    });
    setDices(randomDices);
  };

  console.log("dices", dices);
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      {dices.length > 0 &&
        dices.map((d: number, index) => <Text key={"key" + index}>{d}</Text>)}
      <Button title="Click" onPress={() => randomDice()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});
