import * as React from "react";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";
import { StyleSheet } from "react-native";

interface DoteProps {
  index: number;
  currentIndex: Animated.Node<number>;
}
const styles = StyleSheet.create({
  dote: {
    backgroundColor: "#2cb6b0",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

const Dote = (props: DoteProps) => {
  const { index, currentIndex } = props;
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={[
        styles.dote,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    ></Animated.View>
  );
};

export default Dote;
