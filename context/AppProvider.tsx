import React from "react";

export enum Fraction {
  vikings = "vikings",
}

export enum Epochs {
  darkAges = "Dark Ages",
  ageOfHannibal = "Age of Hannibal",
  ageOfMagic = "Age of Magic",
  ageOfInvasions = "Age of Invasions",
}

const defaultApp = {
  fraction: Fraction.vikings,
};

export const AppContext = React.createContext<{}>({
  fraction: Fraction,
});

const AppProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const fraction = Fraction.vikings;

  return (
    <AppContext.Provider value={{ fraction }}>{children}</AppContext.Provider>
  );
};

export function useApp() {
  return React.useContext(AppContext);
}

export default AppProvider;
