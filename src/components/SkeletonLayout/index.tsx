import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Animated, View } from 'react-native';

import { container, loader } from './styles';

interface Item {
  width?: number | string;
  height: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  borderRadius?: number;
}

interface Props {
  /**
   * Skeleton color
   */
  color?: string;
  /**
   * pulse time
   */
  pulseTime?: number;
  /**
   * width container component
   */
  width?: number | string;

  /**
   * flex-direction of layout
   */
  direction?: 'column' | 'row';

  /**
   * align items of layout
   */
  align?: 'center' | 'left' | 'right';

  /**
   * Array of Items:
   *  height: {string|number} - Required
   *  width: {string|number} - Default: 100% - Optional
   *  borderRadius: {number} - Default: 0 - Optional
   *  marginTop: {number|string} - Default: 3px - Optional
   *  marginBottom: {number|string} - Default: 3px - Optional
   *  marginLeft: {number|string} - Default: 0 - Optional
   *  marginRight: {number|string} - Default: 0 - Optional
   */
  items: Item[];
}

export const SkeletonLayout: React.FC<Props> = ({
  color = '#ccc',
  pulseTime = 1,
  width = '100%',
  align = 'left',
  direction = 'column',
  items,
}) => {
  const [opacity] = useState<Animated.Value>(new Animated.Value(0.1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: Number(`${pulseTime}000`) / 2,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.1,
          duration: Number(`${pulseTime}000`) / 2,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacity, pulseTime]);

  const checkValue = useCallback((value: string | number) => {
    const regexPorcent = /^([0-9]{1,})%$/;
    const regex = /^([0-9]{1,})([a-zA-Z]{1,})$/;
    const regexNum = /^([0-9]{1,})$/;

    if (regexPorcent.test(String(value))) {
      return value;
    } else if (regex.test(String(value))) {
      return Number(String(value).replace(/[a-zA-Z]/g, ''));
    } else if (regexNum.test(String(value))) {
      return value;
    }

    return value;
  }, []);

  const formatStylesContaoner = useMemo(
    () =>
      container({
        width: checkValue(width),
        align,
        direction,
      }),
    [width, width, direction],
  );

  return (
    <View style={{ ...formatStylesContaoner?.container }}>
      {items.map((item, index) => (
        <Animated.View
          key={index}
          style={{
            opacity,
            ...loader({
              color: color,
              width: item.width ? checkValue(item.width) : '100%',
              height: checkValue(item.height),
              borderRadius: item.borderRadius || 0,
              marginBottom: item.marginBottom
                ? checkValue(item.marginBottom)
                : 3,
              marginTop: item.marginTop ? checkValue(item.marginTop) : 3,
              marginLeft: item.marginLeft ? checkValue(item.marginLeft) : 0,
              marginRight: item.marginRight ? checkValue(item.marginRight) : 0,
            })?.loader,
          }}
        />
      ))}
    </View>
  );
};
