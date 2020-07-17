import { StatusBar } from "expo-status-bar";
import React from "react";

import NavigationScreen from "./src/Navigation/index";
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
import { Theme as theme } from "./src/components/index";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <NavigationScreen />
      </LoadAssets>
    </ThemeProvider>
  );
}
