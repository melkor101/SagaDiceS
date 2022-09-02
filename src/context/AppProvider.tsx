import vikings from "data/darkAge/vikings";
import React, { useState } from "react";
import { Dice } from "../types";

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

export const AppContext = React.createContext<{
  faction: Faction;
  availableDices: Dice[];
  onRollDices: () => void;
  removeDice: (dice: Dice) => void;
}>({
  faction: Faction.vikings,
  availableDices: [],
  onRollDices: () => {},
  removeDice: () => {},
});

const AppProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const faction = Faction.vikings;
  const [availableDices, setAvailableDices] = useState<Dice[]>([]);

  const rollDice = () => Math.floor(6 * Math.random()) + 1;

  const onRollDices = () => {
    console.log("onRollDices");
    const newDices = [1, 2, 3, 4, 5, 6, 7, 8].map(d => {
      const number = rollDice();

      if (number === 6) {
        return Dice.big;
      } else if (number === 4 || number === 5) {
        return Dice.middle;
      } else {
        return Dice.small;
      }
    });

    setAvailableDices(newDices);
  };

  const removeDice = (dice: Dice) =>
    setAvailableDices(availableDices.filter(d => d === dice));

  return (
    <AppContext.Provider
      value={{ faction, availableDices, onRollDices, removeDice }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  return React.useContext(AppContext);
}

export default AppProvider;
