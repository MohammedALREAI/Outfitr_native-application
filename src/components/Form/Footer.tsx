import SocialLogin from "../SocialLogin";
import { Box, Text } from "../../components/index";

import React from "react";
import { TouchableWithoutFeedback } from "react-native";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

// Don’t have an ?
//      Sign Up here ?
function Footer({ onPress, action, title }: FooterProps) {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <TouchableWithoutFeedback {...{ onPress }}>
          <Box flex={1} flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              <Text>{title}</Text>
              <Text color="primary">{action} </Text>
            </Text>
          </Box>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
}
export default Footer;
