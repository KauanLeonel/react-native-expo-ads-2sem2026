import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, FlatList, Pressable, Alert, } from 'react-native';
import { Image } from 'react-native';
import { useState } from 'react';
import ChoiceDisplay from './components/ChoiceDisplay';

const DATA = [
  {
    id: '0',
    title: 'Pedra',
    imagem: require('./assets/pedra.png')
  },
  {
    id: '1',
    title: 'Papel',
    imagem: require('./assets/papel.png')

  },
  {
    id: '2',
    title: 'Tesoura',
    imagem: require('./assets/tesoura.png')

  },
];

export default function App() {
  const [choice, setChoice] = useState(DATA[0]);

  function escolherOpcao(opcao) {
    setChoice(opcao);
  }
  return (
    <View style={styles.main}>
      <View style={styles.game}>
        <View style={styles.choice}>
          <Image source={choice.imagem}
            style={{
              width: 80,
              height: 80,
            }} />
          <Text style={styles.title}>Sua escolha: {choice.title}</Text>

        </View>
        <View style={styles.options}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <Text style={styles.title}>
                Escolha uma opção
              </Text>
              <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <ChoiceDisplay escolha={item}
                  onPress={() => escolherOpcao(item)}
                  />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}

              />

            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#15171a',

  },
  options: {
    flex: 4
  },
  choice: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#a16594',
  },
  container: {
    flex: 1,
    backgroundColor: '#c58bbb',
  },

  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  list: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  itemPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },

  game: {
    padding: '5%'
  }
});