import React, { ReactNode } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Box, useTheme } from "./index";
const { width } = Dimensions.get("window");
const image = require("../../assets/images/bg-pattern.png");
const aspectRation = 750 / 1125;
import { useSafeAreaInsets } from "react-native-safe-area-context";
const height = width * aspectRation;
interface PropsContainer {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: PropsContainer) => {
  const insets = useSafeAreaInsets();
  const myHeight = height * 0.61;
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box borderBottomRightRadius="xl" overflow="hidden" height={myHeight}>
          <Image
            source={image}
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
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            {children}
          </KeyboardAvoidingView>
        </Box>
      </Box>

      {/* ---footer cotent  */}
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box paddingBottom={insets.bottom} />
      </Box>

      {/* footercontent */}
    </Box>
  );
};

export default Container;
