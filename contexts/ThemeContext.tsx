import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import AppTheme from "@/types/AppTheme";
import { AppLightTheme } from "@/types/LightTheme";
import { AppDarkTheme } from "@/types/DarkTheme";

const ThemeContext = createContext<AppTheme>(AppLightTheme);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? AppDarkTheme : AppLightTheme;

  return (
    <ThemeContext.Provider value={AppLightTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
