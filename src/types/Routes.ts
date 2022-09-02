
import React, { ComponentType } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";

export enum Routes {
  home = "Home",
  profile = "Priofile",
  epochslist = "EpochsList",
  factionsList = "FactionsList",
  board = "Board",
}


export type StackParamList = {
  // main screens
  [Routes.home]: undefined;
  [Routes.profile]: undefined;
  [Routes.epochslist]: undefined;
  [Routes.factionsList]: undefined;
  [Routes.board]: undefined;
}

type NavigationProps<T extends Routes> = {
  navigation: StackNavigationProp<StackParamList>;
  route: RouteProp<StackParamList, T>;
};

export type ScreenProps<T extends Routes> = ComponentType<
  NavigationProps<T>
>;
