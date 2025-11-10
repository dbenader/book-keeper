import React, { useEffect } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

type BookColumnProps = {
  images: ImageSourcePropType[];
  direction: "up" | "down";
  /** Width of the column, also roughly each book’s width */
  columnWidth: number;
  /** How many seconds for one full scroll */
  durationSec?: number;
};

export default function BookColumn({
  images,
  direction,
  columnWidth,
  durationSec = 40,
}: BookColumnProps) {
  const translateY = useSharedValue(0);

  // Height of one image stack
  const singleSetHeight = images.length * 170; // 140 height + ~30 margin
  const totalHeight = singleSetHeight * 2;

  // Determine direction: moving up or down
  const [startY, endY] =
    direction === "up"
      ? [0, -singleSetHeight]
      : [-singleSetHeight, 0];

  useEffect(() => {
    translateY.value = startY;
    translateY.value = withRepeat(
      withTiming(endY, {
        duration: durationSec * 1000,
        easing: Easing.linear,
      }),
      -1, // infinite
      false
    );
  }, [startY, endY, durationSec]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={[styles.container, { width: columnWidth }]}>
      <Animated.View style={[styles.column, { height: totalHeight }, animatedStyle]}>
        {[...images, ...images].map((src, idx) => (
          <Image
            key={idx}
            source={src}
            style={styles.bookImage}
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
    height: "100%",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  bookImage: {
    width: 100,
    height: 140,
    marginVertical: 15,
    opacity: 1.0,
  },
});
