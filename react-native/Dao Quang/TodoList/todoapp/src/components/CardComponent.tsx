import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const CardComponent = (props: Props) => {
  const { children, styles, bgColor } = props;

  return <View style={[globalStyles.inputContainer, { padding: 12 }, styles]}>{children}</View>;
};

export default CardComponent;
