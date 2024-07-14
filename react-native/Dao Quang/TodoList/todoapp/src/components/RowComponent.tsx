import { ReactNode } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}

const RowComponent = (props: Props) => {
  const { children, justify } = props;

  return (
    <View style={[globalStyles.row, { justifyContent: justify ?? 'center' }]}>{children}</View>
  );
};

export default RowComponent;
