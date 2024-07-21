import { View } from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

const SpaceComponent = (props: Props) => {
  const { width, height } = props;

  return <View style={{ width, height }} />;
};

export default SpaceComponent;
