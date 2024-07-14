import { fontFamilies } from '../constants/fontFamilies';
import TextComponent from './TextComponent';

interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
}

const TitleComponent = (props: Props) => {
  const { text, color, font, size } = props;

  return (
    <TextComponent
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color}
      text={text}
    />
  );
};

export default TitleComponent;
