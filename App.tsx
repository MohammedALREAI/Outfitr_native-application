import React from "react";

import NavigationScreen from "./src/Navigation/index";
import { LoadAssets, useTheme } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};
export default function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <NavigationScreen />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
