import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppProvider from "./context/AppProvider";
import HomeScreen from "./src/screens/Home";
import EpochsListScreen from "./src/screens/EpochsListScreen/index";
import FactionsListScreen from "./src/screens/FactionsListScreen/index";
import BoardScreen from "./src/screens/BoardScreen";

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <Text>ProfileScreen Screen</Text>
    </View>
  );
};

export enum Routes {
  home = "Home",
  profile = "Priofile",
  epochslist = "EpochsList",
  factionsList = "FactionsList",
  board = "Board",
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.epochslist}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name={Routes.epochslist} component={EpochsListScreen} />
        <Stack.Screen name={Routes.board} component={BoardScreen} />
        <Stack.Screen
          name={Routes.factionsList}
          component={FactionsListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MyStack />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});
