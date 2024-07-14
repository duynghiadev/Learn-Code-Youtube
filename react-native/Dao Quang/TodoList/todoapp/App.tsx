import { Button, StyleSheet, Text, View } from 'react-native';
import { fontFamilies } from './src/constants/fontFamilies';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fafafa',
          fontSize: 18,
          // fontFamily: fontFamilies.regular,
        }}
      >
        Welcome to my first app
      </Text>
      <Text style={styles.title}>Todo List</Text>
      <Text style={{ fontSize: 32, color: '#fff' }}>Todo List</Text>
      <Button title="Hello" onPress={() => {}} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: fontFamilies.bold,
    fontSize: 32,
    color: '#fff',
  },
});
