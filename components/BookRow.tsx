import React, { useEffect } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

type BookRowProps = {
  images: ImageSourcePropType[];
  direction: "left" | "right";
  /** Height of the row; each image roughly matches this height */
  rowHeight: number;
  /** Duration in seconds for one full scroll */
  durationSec?: number;
};

export default function BookRow({
  images,
  direction,
  rowHeight,
  durationSec = 40,
}: BookRowProps) {
  const translateX = useSharedValue(0);

  // Width of a single image set
  const singleSetWidth = images.length * (rowHeight * 0.75 + 30); // width ~ height*0.75 + margin
  const totalWidth = singleSetWidth * 2;

  // Start/end positions based on direction
  const [startX, endX] =
    direction === "left"
      ? [0, -singleSetWidth]
      : [-singleSetWidth, 0];

  useEffect(() => {
    translateX.value = startX;
    translateX.value = withRepeat(
      withTiming(endX, {
        duration: durationSec * 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, [startX, endX, durationSec]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={[styles.container, { height: rowHeight }]}>
      <Animated.View style={[styles.row, { width: totalWidth }, animatedStyle]}>
        {[...images, ...images].map((src, idx) => (
          <Image
            key={idx}
            source={src}
            style={[styles.bookImage, { height: rowHeight, width: rowHeight * 0.75 }]}
            resizeMode="contain"
          />
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookImage: {
    marginHorizontal: 15,
    opacity: 1,
  },
});
