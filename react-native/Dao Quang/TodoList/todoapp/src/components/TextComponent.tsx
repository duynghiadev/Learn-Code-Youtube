import { Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { fontFamilies } from '../constants/fontFamilies';
import { colors } from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
}

const TextComponent = (props: Props) => {
  const { text, font, size, color } = props;

  return (
    <Text
      style={[
        globalStyles.text,
        {
          fontFamily: font ?? fontFamilies.regular,
          fontSize: size ?? 14,
          color: color ?? colors.desc,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
