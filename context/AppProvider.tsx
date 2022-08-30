import React from "react";

export enum Faction {
  vikings = "Vikings",
  angloDanish = "Anglo-Danish",
  normans = "Normans",
  welsh = "Welsh",
  angloSaxons = "Anglo-Saxons",
  bretons = "Bretons",
  jomsviking = "Jomsviking",
  scots = "Scots",
  skraelings = "skraelings",
}

export enum Epochs {
  darkAges = "Dark Ages",
  ageOfHannibal = "Age of Hannibal",
  ageOfMagic = "Age of Magic",
  ageOfInvasions = "Age of Invasions",
}

export const AppContext = React.createContext<{ faction: Faction }>({
  faction: Faction.vikings,
});

const AppProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const faction = Faction.vikings;

  return (
    <AppContext.Provider value={{ faction }}>{children}</AppContext.Provider>
  );
};

export function useApp() {
  return React.useContext(AppContext);
}

export default AppProvider;
