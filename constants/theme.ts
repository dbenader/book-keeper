import { Theme } from "@react-navigation/native";

interface ExtendedTheme extends Theme {
  spacing: any,
  secondaryText: string
}


export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    primary: "#efba6e",         // Buttons / highlights
    background: "#FFF",      // Matches your landing screen background
    card: "#ffffff",            // Nav bar / card background
    text: "#0f172a",            // Default text color
    border: "#e0d6c2",          // Soft beige border
    notification: "#ffb347",    // Accent (e.g., alerts)
  },
  secondaryText: '',
  fonts: {
    regular: {
      fontFamily: "InterTight",
      fontWeight: "400"
    },
    medium: {
      fontFamily: "InterTight",
      fontWeight: "500"
    },
    bold: {
      fontFamily: "InterTight",
      fontWeight: "700"
    },
    heavy: {
      fontFamily: "InterTight",
      fontWeight: "900"
    }
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 56
  },
}


export const DarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    primary: "#efba6e",         // Accent color reversed
    background: "#fff",      // Dark background
    card: "#2c2c2c",            // Cards / headers
    text: "#0f172a",            // Text on dark
    border: "#444",             // Border on dark
    notification: "#ffb347",    // Accent
  },
  secondaryText: '',
  fonts: {
    regular: {
      fontFamily: "InterTight",
      fontWeight: "400"
    },
    medium: {
      fontFamily: "InterTight",
      fontWeight: "500"
    },
    bold: {
      fontFamily: "InterTight",
      fontWeight: "700"
    },
    heavy: {
      fontFamily: "InterTight",
      fontWeight: "900"
    }
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 56
  },
}
