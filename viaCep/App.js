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
      {/* <View style={styles.banner}>
        <Text style={styles.bannerText}>Consumo da API ViaCep</Text>
      </View> */}

      <Home/>
      {/* <View style={styles.form}>

        <View style={styles.infoInput}>
          <Text>Informar CEP:</Text>
          <TextInput placeholder='Cep...' style={styles.input}/>
        </View>

        <View style={styles.infoInput}>
          <Text>Logradouro</Text>
          <TextInput placeholder='Logradouro...' style={styles.input}/>
        </View>

        <View style={styles.infoInput}>
          <Text>Bairro</Text>
          <TextInput placeholder='Bairro...' style={styles.input}/>
        </View>

        <View style={styles.infoInput}>
          <Text>Cidade</Text>
          <TextInput placeholder='Cidade...' style={styles.input}/>
        </View>

        <View style={styles.inputLine}>
          <View style={styles.inputEstado}>
            <Text>Estado</Text>
            <TextInput placeholder='Estado...' style={styles.litteInput}/>
          </View>

          <View style={styles.inputUF}>
            <Text>UF</Text>
            <TextInput placeholder='UF' style={styles.litteInput}/>
          </View>
        </View>

      </View> */}

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoInput: {
    width: "100%",
    //borderWidth: 1,
    flex: 0.2
  },
  input: {
    borderWidth: 1,
    flex: 0.8,
    paddingLeft: 15,
    borderRadius: 10
  },
  inputEstado:{
    //borderWidth: 1,
    width: '60%'
  },
  inputUF:{
    //borderWidth: 1,
    width: '30%'
  },
  banner: {
    backgroundColor: "yellow",
    flex: 0.3,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  form: {
    flex: 0.65,
    width: "85%",
    marginBottom: "8%",
    justifyContent: "space-between"
  },
  inputLine:{
    flex: 0.2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  litteInput: {
    flex: 0.8,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
  },
  bannerText: {
    fontSize: 24
  }
});
