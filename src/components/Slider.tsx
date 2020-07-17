import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { BORDER_RADIUS } from "../Screen/OnBound";
const { width, height } = Dimensions.get("window");
const SLIDE_HEIGHT = 0.61 * height;
import { Text } from "./index";
const styles = StyleSheet.create({
  container: {
    width,
    overflow: "hidden",
  },

  textContainer: {
    height: 100,
    justifyContent: "center",
  },
  iconContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },

  icon: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomEndRadius: BORDER_RADIUS,
  },
});
interface SliderProps {
  label: string;
  right?: boolean;
  icon: number;
}

const Slider = ({ label, right, icon }: SliderProps) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    { translateX: ((right ? width / 2 - 50 : -width / 2 + 50) * width) / 2 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View
        style={[
          styles.textContainer,
          {
            transform,
          },
        ]}
      >
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  );
};

export { Slider, SLIDE_HEIGHT };
