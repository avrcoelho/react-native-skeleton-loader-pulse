import { StyleSheet } from 'react-native';

interface PropsContainer {
  width: number | string;
  direction: 'column' | 'row';
  align: 'center' | 'left' | 'right';
}

interface PropsLoader {
  color: string;
  width: number | string;
  height: number | string;
  borderRadius: number;
  marginTop: number | string;
  marginBottom: number | string;
  marginLeft: number | string;
  marginRight: number | string;
}

const alignItems = (align: string) => {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
};

export const container = (props: PropsContainer) =>
  StyleSheet.create({
    container: {
      width: props.width,
      flexDirection: props.direction,
      alignItems: alignItems(props.align),
    },
  });

export const loader = (props: PropsLoader) =>
  StyleSheet.create({
    loader: {
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      marginRight: props.marginRight,
      backgroundColor: props.color,
    },
  });
