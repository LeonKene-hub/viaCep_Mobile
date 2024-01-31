import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Text>Consumo da API ViaCep</Text>
      </View>

      <View>

        <View style={styles.infoInput}>
          <Text>Informar CEP:</Text>
          <TextInput placeholder='Cep...'/>
        </View>
        
        <View style={styles.infoInput}>
          <Text>Logradouro</Text>
          <TextInput placeholder='Logradouro...'/>
        </View>
        
        <View style={styles.infoInput}>
          <Text>Bairro</Text>
          <TextInput placeholder='Bairro...'/>
        </View>
        
        <View style={styles.infoInput}>
          <Text>Cidade</Text>
          <TextInput placeholder='Cidade...'/>
        </View>
        
        <View style={styles.infoInput}>
          <Text>Estado</Text>
          <TextInput placeholder='Estado...'/>

          <Text>UF</Text>
          <TextInput placeholder='UF'/>
        </View>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoInput: {
    height: 350,
    width: `90%`
  }
});
