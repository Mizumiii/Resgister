import * as React from "react";
import { DefaultColor } from '../constants/Colors';
import { Text, TextProps } from './Themed';

export default function CustomText(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: 'sans-regular', fontSize: 14, color: DefaultColor.dark }, props.style]} />;
}
