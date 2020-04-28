import { StyleSheet } from "react-native";

interface Props {
  color: string;
  width: number | string;
  height: number | string;
  borderRadius: number;
  marginTop: number | string;
  marginBottom: number | string;
  marginLeft: number | string;
  marginRight: number | string;
}

const styles = (props: Props) =>
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

export default styles;
