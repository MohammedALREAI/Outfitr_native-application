import React, { ReactNode } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Box, useTheme } from "./index";
const { width, height: Wheight } = Dimensions.get("window");
const image = require("../../assets/images/bg-pattern.png");
const aspectRation = 750 / 1125;
import Constants from "expo-constants";

import { useSafeAreaInsets } from "react-native-safe-area-context";
const assets = [
  require("../../assets/images/pattern/1.png"),
  require("../../assets/images/pattern/2.png"),
  require("../../assets/images/pattern/3.png"),
] as const;

const height = width * aspectRation;
interface PropsContainer {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: PropsContainer) => {
  const insets = useSafeAreaInsets();
  const myHeight = height * 0.61;
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <Box flex={1} backgroundColor="white">
      <KeyboardAvoidingView
        behavior="padding"
        contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      >
        <Box
          backgroundColor="white"
          height={
            Wheight + (Platform.OS = "android" ? Constants.statusBarHeight : 0)
          }
        >
          <Box borderBottomRightRadius="xl" overflow="hidden" height={myHeight}>
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomRightRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={image}
            style={{
              width,
              height,
              ...StyleSheet.absoluteFillObject,
              top: -height * 0.61,
            }}
          />
          <Box
            flex={1}
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
          >
            {children}
          </Box>
        </Box>

        {/* ---footer cotent  */}
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box paddingBottom={insets.bottom} />
        </Box>
      </KeyboardAvoidingView>
      {/* footercontent */}
    </Box>
  );
};

export default Container;
