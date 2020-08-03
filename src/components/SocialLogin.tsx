import React, { ReactNode } from "react";
import { Box, useTheme } from "../theme/theme";
import { Image } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PropsSocialItem {
  children: ReactNode;
}
const facebookSvg = (
  <Svg width={44} height={44} viewBox="0 0 48 1">
    <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
  </Svg>
);
const GoogleSvg = () => (
  <Svg width={44} height={44} viewBox="0 0 19.767 20">
    <Path
      d="M19.767 10.209a11.777 11.777 0 00-.174-2.038h-9.476v3.862h5.427a4.642 4.642 0 01-2.009 3.048v2.506h3.238a9.787 9.787 0 002.994-7.378z"
      fill="#4285f4"
    />
    <Path
      data-name="Path"
      d="M10.07 20a9.641 9.641 0 006.662-2.417l-3.243-2.501a6.029 6.029 0 01-3.419.956 6.014 6.014 0 01-5.639-4.131H1.089v2.579A10.055 10.055 0 0010.07 20z"
      fill="#34a853"
    />
    <Path
      data-name="Path"
      d="M4.436 11.963a5.986 5.986 0 010-3.849V5.525h-3.36a10.005 10.005 0 000 9.027z"
      fill="#fbbc04"
    />
    <Path
      data-name="Path"
      d="M10.078 3.961a5.482 5.482 0 013.859 1.5L16.809 2.6A9.7 9.7 0 0010.078 0a10.063 10.063 0 00-8.989 5.516L4.43 8.093a6.013 6.013 0 015.648-4.132z"
      fill="#ea4335"
    />
  </Svg>
);

const appleSvg = () => (
  <Svg width={44} height={44} viewBox="0 0 17.273 20">
    <Path d="M3.716 19.193A10.365 10.365 0 012.23 17.46a11.9 11.9 0 01-1.57-3.043A10.9 10.9 0 010 10.79a6.494 6.494 0 01.892-3.465 5.195 5.195 0 014.392-2.537 6.077 6.077 0 011.953.443 6.392 6.392 0 001.55.445 9.414 9.414 0 001.713-.524 5.817 5.817 0 012.335-.4 4.994 4.994 0 013.884 1.994 4.2 4.2 0 00-2.29 3.827 4.172 4.172 0 001.421 3.182 4.687 4.687 0 001.42.909c-.114.322-.234.631-.362.927a10.864 10.864 0 01-1.1 1.933 9.877 9.877 0 01-1.42 1.674 2.787 2.787 0 01-1.825.784 4.678 4.678 0 01-1.687-.392 4.936 4.936 0 00-1.814-.391 5.1 5.1 0 00-1.867.391 5.128 5.128 0 01-1.612.41H5.5a2.673 2.673 0 01-1.784-.807zM8.659 4.727a3.009 3.009 0 01-.023-.38 4.327 4.327 0 011.19-2.828A4.558 4.558 0 0111.274.458 4.4 4.4 0 0112.932 0a3.524 3.524 0 01.022.4 4.206 4.206 0 01-1.121 2.8A3.961 3.961 0 018.9 4.736q-.119 0-.241-.009z" />
  </Svg>
);
const SocialItemImage = [facebookSvg, GoogleSvg, appleSvg];
const SocialItem = () => {
  return (
    <Box
      backgroundColor="white"
      width={44}
      height={44}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {SocialItemImage.map((item, index) => (
        <Box key={index}>{item}</Box>
      ))}
    </Box>
  );
};

const SocialLogin = () => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box flex={1} flexDirection="row">
      <Box
        marginHorizontal="s"
        backgroundColor="white"
        width={SIZE}
        height={SIZE}
        borderRadius="l"
        justifyContent="center"
        alignItems="center"
      >
        {SocialItem}
      </Box>
    </Box>
  );
};

export default SocialLogin;
