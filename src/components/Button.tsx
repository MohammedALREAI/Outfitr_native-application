import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { Text, Theme } from "./index";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 245,
  },
  label: {
    fontFamily: "SFProText-Semibold",
    fontSize: 15,
    textAlign: "center",
  },
});

const Button = (props: ButtonProps) => {
  const theme = useTheme<Theme>();
  const { variant, label, onPress } = props;
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.text;

  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      <Text variant="body" style={[styles.label, { color }]}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};
export default Button;
