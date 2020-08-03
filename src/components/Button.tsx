import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Text, Theme } from "./index";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 245,
  },
});

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const backgroundColor =
    variant === "primary"
      ? Theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : Theme.colors.grey;
  const color =
    variant === "primary" ? Theme.colors.white : Theme.colors.secondary;

  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};
export default Button;
