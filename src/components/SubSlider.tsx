import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "./index";
interface SubSliderProps {
  title: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    justifyContent: "center",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    marginBottom: 40,
    textAlign: "center",
  },
});

const SubSlider = (props: SubSliderProps) => {
  const { onPress, description, title, last } = props;

  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {title}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "let 's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlider;
