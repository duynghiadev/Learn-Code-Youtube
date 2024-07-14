import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="Home Screen" />
          <TextComponent text="Home Screen" />
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent text="Hi, Jason" />
        <TitleComponent text="Be Productive today" />
      </SectionComponent>

      <SectionComponent>
        <RowComponent styles={[globalStyles.inputContainer]} onPress={() => console.log('Say hi')}>
          <TextComponent text="Search" />
          <Text>S</Text>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent text="CircleChar" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
