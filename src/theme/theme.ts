import { ImageStyle } from "react-native";
import { TextStyle } from "react-native";
import { ViewStyle } from "react-native";
import {
  createText,
  createBox,
  useTheme as useReTheme,
} from "@shopify/restyle";

const Theme = {
  colors: {
    primary: "#2cb9b0",
    secondary: "#0C0D34",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "#f4f0ef",
    darkGrey: "#8A8D90",
    danger: "#FF0058",
    primaryLight: "#2CB9B0",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  textVariants: {
    hero: {
      textTransform: "capitalize",
      fontSize: 80,
      color: "white",
      fontWeight: 700,
      letterSpacing: -1,
      fontFamily: "SFProText-Bold",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontFamily: "SFProText-Semibold",
      fontSize: 28,
      color: "secondary",
      lineHeight: 30,
      textAlign: "center",
      marginBottom: 12,
    },
    title2: {
      fontFamily: "SFProText-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
      textAlign: "center",
    },
    body: {
      fontFamily: "SFProText-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "secondary",
      textAlign: "center",
    },
    button: {
      fontFamily: "SFProText-Regular",
      fontSize: 15,
      lineHeight: 24,
      color: "secondary",
    },
  },
  breakpoints: {},
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
};

type Theme = typeof Theme;
const Text = createText<Theme>();
const Box = createBox<Theme>();
const useTheme = () => useReTheme<Theme>() as Theme;

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

const makeStyle = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const myTheme = useTheme();
  return styles(myTheme);
};

export { Theme, Text, Box, useTheme, makeStyle };
