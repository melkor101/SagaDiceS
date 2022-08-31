import * as React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EpochItem from "screens/EpochsListScreen/EpochItem";
import { useApp } from "../../../context/AppProvider";
import vikings from "../../data/darkAge/vikings";
import Order from "./Order";

const BoardScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const { faction } = useApp();
  const data = vikings;

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Activation</Text>
      <View style={styles.wrapper}>
        {data.activation.map(item => (
          <Order key={item.label} item={item} />
        ))}
      </View>
      <Text style={styles.title}>SKILLS</Text>

      <View style={styles.wrapper}>
        {data.skills.map(item => (
          <Order key={item.label} item={item} />
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.modal}>
          <View style={styles.footer}>
            <Text style={styles.headerText}>This is Half Modal</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.addButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
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
    marginBottom: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 18,
    padding: 12,
  },
  noteHeader: {
    backgroundColor: "#42f5aa",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: "#ddd",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "black",
    padding: 20,
    backgroundColor: "#ddd",
    borderTopWidth: 2,
    borderTopColor: "#ddd",
  },
  modal: {
    height: "50%",
    marginTop: "auto",
    backgroundColor: "blue",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#98B3B7",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
