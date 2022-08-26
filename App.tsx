import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppProvider from "./context/AppProvider";
import HomeScreen from "./screens/Home";
import EpochsListScreen from "./screens/EpochsListScreen/index";

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <Text>ProfileScreen Screen</Text>
    </View>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EpochsList">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EpochsList" component={EpochsListScreen} />
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
