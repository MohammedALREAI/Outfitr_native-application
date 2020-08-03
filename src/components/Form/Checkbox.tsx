import React from "react";
import { Box, Text } from "../index";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <RectButton
      onPress={() => onChange(!checked)}
      style={{
        justifyContent: "center",
      }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          height={20}
          width={20}
          marginRight="s"
          justifyContent="center"
          borderColor="primary"
          borderWidth={1}
          alignItems="center"
          borderRadius="s"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button" color="primary">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
