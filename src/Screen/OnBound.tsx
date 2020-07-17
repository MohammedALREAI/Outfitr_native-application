import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Slider, SLIDE_HEIGHT, SubSlider, Dote } from "../components";

import {
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash";
import { sliders } from "../utils/constant";

import Animated, { multiply, divide } from "react-native-reanimated";
const { width } = Dimensions.get("window");
  export const BORDER_RADIUS = 75;

interface OnBoundProps {}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomEndRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContext: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    height: 45,
    ...StyleSheet.absoluteFillObject,

    backgroundColor: "blue",
    flexDirection: "row",
    width,
    justifyContent: "center",
  },
});

 export const OnBound = (props: OnBoundProps) => {
  const { scrollHandler, x } = useScrollHandler();
  const onScroll = onScrollEvent({ x });
  const scroll = React.useRef<Animated.ScrollView>(null);

  const backgroundColor = interpolateColor(x, {
    inputRange: sliders.map((_, i) => i * width),
    outputRange: sliders.map((item) => item.color),
  });

  const pagination = () => (
    <View style={styles.pagination}>
      {sliders.map((_, index) => (
        <Dote
          key={`index${index}`}
          currentIndex={divide(x, width)}
          {...{ index, x }}
        />
      ))}
    </View>
  );
     const ScrollViewElement=()=>(
       <Animated.ScrollView
            horizontal
            ref={scroll}
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            {...{ scrollHandler }}
       >
            {sliders.map((item, index) => (
                 <Slider
                      key={`index_${index}`}
                      label={item.label}
                      right={index % 2 == 0 ? false : true}
                 />
            ))}
       </Animated.ScrollView>
  )
  const SubSlidersItems = () => {
    return sliders.map(({ title, description }, index) => (
      <SubSlider
        onPress={() => {
          if (scroll.current) {
            scroll.current.getNode.scrollTo({
              x: width * (index + 1),
              animated: true,
            });
          }
        }}
        key={`index_${index}`}
        {...{ title, description }}
        last={index === sliders.length - 1}
      />
    ));
  };

  return (
    <View style={styles.container}>

      <View style={[styles.slider, {backgroundColor }]}>
                 {ScrollViewElement}

        <View style={styles.footer}>

             <View style={styles.footerContext}>

                           {pagination}
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
                                {SubSlidersItems}
                           </Animated.View>
        </View>
      </View>
    </View>
  );
};

