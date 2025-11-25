// BottomModal.tsx

import React, { ReactNode, useEffect } from 'react';
import { View, StyleSheet, Pressable, Modal, Dimensions, ColorValue } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/ThemeContext';

const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  visible: boolean;
  close: () => void;
  height?: number;
  backgroundColor?: ColorValue;
  children: (requestClose: () => void) => ReactNode;
};

const BottomModal = ({
  visible,
  close,
  height = WINDOW_HEIGHT * 0.4,
  backgroundColor = '#FFF',
  children,
}: Props) => {
  const translateY = useSharedValue(-1 * height);
  const theme = useAppTheme();

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, { duration: 300 });
    }
  }, [visible]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      bottom: translateY.value,
    };
  });

  const onClose = () => {
    translateY.value = withTiming(-1 * height, { duration: 300 }, (finished) => {
      if (finished) {
        runOnJS(close)();
      }
    });
  };

  const styles = StyleSheet.create({
    modal: {
      height,
      width: '100%',
      backgroundColor,
      position: 'absolute',
      left: 0,
      right: 0,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      padding: 16,
    },
  });

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
        {/* BACKDROP – full-screen, closes on tap */}
        <Pressable
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          onPress={onClose}
        />

        {/* SHEET – on top of the backdrop, taps here do NOT hit the backdrop */}
        <Animated.View style={[styles.modal, animatedStyles]}>
          {children(onClose)}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomModal;
