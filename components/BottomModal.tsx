
import React, { Children, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Keyboard, Pressable, Text, Modal, Dimensions, ColorValue } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ThemedText } from './ThemedText';
import { useTheme } from '@react-navigation/native';
import { useAppTheme } from '@/contexts/ThemeContext';

const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
    visible: boolean,
    close: ()=>void,
    height?: number,
    backgroundColor?: ColorValue,
    children: ReactNode
}


const BottomModal = ({visible, close, height=WINDOW_HEIGHT*0.40, backgroundColor, children}: Props) => {
    const translateY = useSharedValue(-1*height);
    const theme = useAppTheme();

    useEffect(() => {
        if (visible) {
            translateY.value = withTiming(0, {duration: 300});
        }
    }, [visible])

    const animatedStyles = useAnimatedStyle(() => {
        return {
          bottom: translateY.value
        };
    });

    const onClose = () => {
        translateY.value = withTiming(-1*height, {duration: 300}, (finished) => {
            if (finished) {
                runOnJS(close)();
            }
        });
    }

    const styles = StyleSheet.create({
      root: {
      },
      modal: {
          height: height, 
          width: '100%', 
          backgroundColor: '#FFF', 
          position: 'absolute', 
          borderTopLeftRadius: 8, 
          borderTopRightRadius: 8,
          padding: 16
      }
  });

    return (
        <Modal visible={visible} transparent={true} animationType='fade'>
            <Pressable style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}} onPress={onClose}>
                <Animated.View style={[styles.modal, animatedStyles]}>
                    {children}
                </Animated.View>
            </Pressable>
        </Modal>
    );
}

export default BottomModal;