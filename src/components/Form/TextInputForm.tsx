import * as React from "react";

import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Box, useTheme } from "../../theme/theme";
import { Feather as Icon } from "@expo/vector-icons";
interface PropsTextInput extends TextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
  type: string;
}

const MyTextInput = React.forwardRef(({ icon, error, touched, ...props }: PropsTextInput,ref) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2.5;

  const reColor = !touched ? "text" : error ? "danger" : "danger";
  const color = theme.colors[reColor];

  return (
    <Box
      flex={1}
      height={48}
      marginBottom="m"
      borderRadius="s"
      borderColor={reColor}
      flexDirection="row"
      alignItems="center"
      borderWidth={StyleSheet.hairlineWidth}
    >
      <Box padding="s" {...{ color }}>
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
          <TextInput
          underlineColorAndroid="transparent"
          keyboardAppearance="dark"
          autoFocus={true}
          {...props}
          {...{ref}}
          placeholderTextColor={theme.colors.darkGrey}
        />
      </Box>

      {touched && (
        <Box
          height={48}
          width={48}
          alignItems="center"
          justifyContent="center"
          backgroundColor={!error ? "primary" : "danger"}
          style={{ borderRadius: SIZE / 2 }}
        >
          <Icon
            height={SIZE}
            width={16}
            name={!error ? "check" : "x"}
            style={{ textAlign: "center" }}
          />
        </Box>
      )}
    </Box>
  );
)};

export default MyTextInput;
