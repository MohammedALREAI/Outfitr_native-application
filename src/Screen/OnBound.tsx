import React from "react";
import { View, StyleSheet, Dimensions, Image, Slider,  } from "react-native";
import { SubSlider, Dote, Box, makeStyle} from "../components";
import { StackNavigationProp } from '@react-navigation/stack';

import { sliders } from "../utils/constant"

import {
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash"
import Animated, { multiply, divide, interpolate, Extrapolate} from "react-native-reanimated"
import { Route } from "../components/Routes";
const { width } = Dimensions.get("window");



const useStyles = makeStyle((theme:Theme)=>({
  container: {
    flex: 1,
  },
  slider: {
       height: theme.borderRadii.xl,
    backgroundColor: "cyan",
       borderBottomEndRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContext: {
    flex: 1,
    backgroundColor: "white",
       borderBottomEndRadius: theme.borderRadii.xl,
  },
  pagination: {
    height: 45,
    ...StyleSheet.absoluteFillObject,

    backgroundColor: "blue",
    flexDirection: "row",
    width,
    justifyContent: "center",
  },
     underlay: {
          ...StyleSheet.absoluteFillObject,
          justifyContent: "flex-end",
          alignItems: "center",
          borderBottomEndRadius: theme.borderRadii.xl,
          overflow:"hidden"

     },
}));


 const OnBound = ({ navigation }: StackNavigationProp<Route,"OnBound">) => {

     const styles=useStyles();

  const { scrollHandler, x } = useScrollHandler();
  const onScroll = onScrollEvent({ x });
  const scroll = React.useRef<Animated.ScrollView>(null);

  const backgroundColor = interpolateColor(x, {
    inputRange: sliders.map((_, i) => i * width),
    outputRange: sliders.map((item) => item.color),
  });

  const render_Siders=()=>(
sliders.map(({ label, picture}, index) => (
                    <Slider
                      key={`index_${index}`}
                      label={label}
                      right={index % 2 == 0 ? false : true}
                 />
            )));
      const SubSliderContainer = (
           {
                sliders.map(({ title description }, index) => {
                     const last = index === sliders.length - 1
                     return (
                          <SubSlider
                               onPress={() => {
                                    if (last) {
                                         navigation.navigate("welcome")
                                    }
                                    if (scroll.current) {
                                         scroll.current.getNode.scrollTo({
                                              x: width * (index + 1),
                                              animated: true,
                                         });
                                    }
                               }}
                               key={`index_${index}`}
                               {...{ title, description, last }}
                          />
                     )
                }
                )
           }
      )

//  sepilit element to four subsite
 const renderSidlerBackground=()=>
 {
      sliders.map(({ picture},index)=>{
           const opacity = interpolate(x,{
                inputRange:[(index-1)*width,index*width,(index+1)*width],
                outputRange:[0,1,0],
                extrapolate: Extrapolate.CLAMP,
           })
           return(
                <Animated.View style={[styles.underlay, { opacity}]} key={`index${index}`}>
          <Image source={picture?.url}
                         style={{
                                    ...StyleSheet.absoluteFillObject,
                                    width: width - theme.borderRadii.xl,
                    height: ((width - BORDER_RADIUS) * picture?.height)/ picture?.width }}/>
                     </Animated.View>)})}





  return (
    <Box style={styles.container}>

      <Box style={[styles.slider,{backgroundColor} ]}>
                 {renderSidlerBackground}

          <Animated.ScrollView
            horizontal
            ref={scroll}
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            {...{ scrollHandler }}>


       </Animated.ScrollView>

        <Box style={styles.footer}>

                      <Box style={styles.footerContext}>

 <View style={styles.pagination}>
      {sliders.map((_, index) => (
        <Dote
          key={`index${index}`}
          currentIndex={divide(x, width)}
          {...{ index, x }}
        />
      ))}
    </View>
     <Animated.View  style={{
                     width:width*sliders.length,
                     flexDirection:'row',
                  transform: [
                    {
                      translateX: multiply(x, -1),
                    }
                  ]
                }}
              >

                      </Animated.View>
                      </Box>
                 </Box>
            </Box>
  );




export default OnBound
