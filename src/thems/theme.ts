import { BaseTheme, createText, createBox } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

//     mainBackground: palette.white,
//     mainForeground: palette.black,
//     cardPrimaryBackground: palette.purplePrimary,
//     buttonPrimaryBackground: palette.purplePrimary,
//     ...palette,
const theme = {
  colors: {
    primary: "#2cb9b0",
    title: "#0C0D34",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
          grey:"rgba(12,13,52,0.5)"
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
      color: "#ffffff",
      fontWeight: 700,
      letterSpacing: -1,
      fontFamily: "SFProText-Bold",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontFamily: "SFProText-Semibold",
      fontSize: 28,
      color: "title",
      lineHeight: 30,
      textAlign: "center",
      marginBottom: 12,
    },
    title2: {
      fontFamily: "SFProText-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "title",
      textAlign: "center",
    },
    body: {
      fontFamily: "SFProText-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
      textAlign: "center",
    },
    button:{
         fontFamily: "SFProText-Regular",
         fontSize: 16,
         lineHeight: 24,



    }
  },
  breakpoints: {},
};

type Theme = typeof theme;
const Text = createText<Theme>();
const Box = createBox<Theme>();

export { Theme, Text, Box };
