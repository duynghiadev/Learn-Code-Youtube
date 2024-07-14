import { StatusBar } from 'react-native';
import HomeScreen from './src/homes/HomeScreen';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar translucent barStyle={'light-content'} backgroundColor="transparent" />
      <HomeScreen />
    </>
  );
}

export default App;
