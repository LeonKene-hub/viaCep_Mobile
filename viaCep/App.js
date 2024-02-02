import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

//import fonts
import { useFonts, Roboto_500Medium, Roboto_700Bold} from 'expo-font';
import { Header } from './src/components/Header';
import { Container } from './styles';
import { Home } from './src/screens/Home/Home';

export default function App() {

  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })
  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <Container >

      <Header/>

      <Home/>

      <StatusBar style="auto" />
    </Container>
  );
}