import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import { fontFamilies } from '../constants/fontFamilies';

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
    </Container>
  );
};

export default HomeScreen;
