import React, { useState, useEffect, useMemo } from 'react';
import { Animated } from 'react-native';

import styles from './styles';

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
   * height container component
   */
  height?: number | string;
  /**
   * margin top component
   */
  marginTop?: number | string;
  /**
   * margin bottom component
   */
  marginBottom?: number | string;
  /**
   * margin left component
   */
  marginLeft?: number | string;
  /**
   * margin right component
   */
  marginRight?: number | string;
  /**
   * border radius component
   */
  borderRadius?: number;
}

export const SkeletonItem: React.FC<Props> = ({
  color = '#ccc',
  pulseTime = 1,
  width = '100%',
  height = 10,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  borderRadius = 0,
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

  function checkValue(value: string | number) {
    const regexPorcent = /^([0-9]{1,})%$/;
    const regex = /^([0-9]{1,})([a-zA-Z]{1,})$/;
    const regexNum = /(\d+(?:\.\d+)?)/;

    if (regexPorcent.test(String(value))) {
      return value;
    } else if (regex.test(String(value))) {
      return Number(String(value).replace(/[a-zA-Z]/g, ''));
    } else if (regexNum.test(String(value))) {
      return Number(value);
    }

    return value;
  }

  const formatStyles = useMemo(
    () =>
      styles({
        color: color,
        width: checkValue(width),
        height: checkValue(height),
        borderRadius: borderRadius,
        marginBottom: checkValue(marginBottom),
        marginTop: checkValue(marginTop),
        marginLeft: checkValue(marginLeft),
        marginRight: checkValue(marginRight),
      }),
    [
      color,
      width,
      height,
      borderRadius,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
    ],
  );

  return <Animated.View style={{ opacity, ...formatStyles?.loader }} />;
};
