import { useAppTheme } from '@/contexts/ThemeContext';
import React from 'react';
import { Text, TextProps } from 'react-native';

type Props = TextProps & {
  variant?: 'regular' | 'medium' | 'bold';
  color?: string;
  size?: number
};

export const ThemedText = ({ variant = 'regular', color, style, size, ...props }: Props) => {
  const theme = useAppTheme();
  const font = theme.fonts?.[variant] ?? theme.fonts?.regular;

  return (
    <Text
      style={[
        {
          fontFamily: font?.fontFamily,
          fontWeight: font?.weight,
          color: color || theme.colors.text,
          fontSize: size || 14,
        },
        style,
      ]}
      {...props}
    />
  );
};
