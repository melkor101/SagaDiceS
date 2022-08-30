import * as React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { Epochs, Faction, useApp } from "../../context/AppProvider";
const boards = {
  [Faction.vikings]: [{}],
};
const renderItem = () => (
  <View>
    <Text>text</Text>
  </View>
);

const BoardScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const { faction } = useApp();
  const data = boards[faction];

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.epoch}
      /> */}

      <View style={styles.header}>
        <Text style={styles.headerText}>Test Half Modal</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.addButtonText}>Open</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Click"
        onPress={() => {
          setModalVisible(true);
        }}></Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}>
        <View
          style={{
            height: "50%",
            marginTop: "auto",
            backgroundColor: "blue",
          }}>
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
    </View>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  epoch: {
    flex: 1,
    paddingHorizontal: 24,
  },

  container: {
    flex: 1,
    backgroundColor: "#98B3B7",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 18,
    padding: 26,
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
