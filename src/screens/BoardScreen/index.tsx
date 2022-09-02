import * as React from "react";

import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useApp } from "../../context/AppProvider";
import vikings from "../../data/darkAge/vikings";
import Order from "./Order";
import CardModal from "./CardModal";
import DicePool from "./DicePool";

const BoardScreen = () => {
  const [selectedCard, setSelectedCard] = React.useState("");

  const { onRollDices } = useApp();
  const data = vikings;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Activation</Text>
        <View style={styles.wrapper}>
          {data.activation.map(item => (
            <Order onClick={setSelectedCard} key={item.label} item={item} />
          ))}
        </View>
        <Text style={styles.title}>SKILLS</Text>

        <View style={styles.wrapper}>
          {data.skills.map(item => (
            <Order onClick={setSelectedCard} key={item.label} item={item} />
          ))}
        </View>

        {selectedCard && (
          <CardModal
            selectedCard={selectedCard}
            onClose={() => setSelectedCard("")}
          />
        )}
      </ScrollView>
      <DicePool />
    </View>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  epoch: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: { textAlign: "center", fontSize: 16, paddingVertical: 4 },
  wrapper: { flexDirection: "row", flexWrap: "wrap" },
  container: {
    flex: 1,
    marginBottom: 140,
  },
});
