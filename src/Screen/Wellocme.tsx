import React from "react";
import { Image, Dimensions } from "react-native";
import { Box, Text, Button, useTheme } from "../components";
const { width } = Dimensions.get("window");
interface Props {}

interface firsProps={
          src: string
          width: number,
          height: number,

}

const picater = {
     src: require("../../assets//images/bg-pattern.png"),
     width: 3383,
     height: 5074,
};
const Welcome  = (props: Props) => {

  const theme = useTheme();


  const first= ({src,width,height}:firsProps)=>{


    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        justifyContent="flex-end"
        alignItems="center"
        borderBottomRightRadius={theme.borderRadii.xl}
        backgroundColor={theme.colors.slide.grey}
      >
        <Image
          source={src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * height) / width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
        >
          <Box
            backgroundColor="white"
            justifyContent="space-evenly"
            borderTopLeftRadius={theme.borderRadii.xl}
            alignItems="center"
            flex={1}
            padding="xl"
          >
            <Text variant="title2" >
              Let’s get started
            </Text>
            <Text variant="body">
              Login to your account below or signup for an amazing experience
            </Text>

            {/* //bootn  */}

            <Button
              label="Have an account? Login"
              variant="primary"
              onPress={}
            />
            <Button label="Join us, it’s Free" onPress={} />
            <Button variant="transparent" label="Forgot password?" onPress={} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
     }
  return (
    <View>
      <Text>
                 <first {...picater} />

      </Text>
    </View>
  )


export default Wellocme;
