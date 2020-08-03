import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
import { theme, Text } from "./index";
const styles = StyleSheet.create({
  container: {
    width,
    overflow: "hidden",
  },

  textContainer: {
    height: 100,
    justifyContent: "center",
  },
});

interface SliderProps {
  label: string;
  right: string;
}

const SliderComponent = (props: SliderProps) => {
  const transform = [
    {
      translateY: (theme.borderRadii.xl - 100) / 2,
    },
    {
      translateX:
        ((props.right ? width / 2 - 50 : -width / 2 + 50) * width) / 2,
    },
    { rotate: props.right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textContainer,
          {
            transform,
          },
        ]}
      >
        <Text variant="hero" >{props.label}</Text>
      </View>
    </View>
  );
};

export default SliderComponent;
