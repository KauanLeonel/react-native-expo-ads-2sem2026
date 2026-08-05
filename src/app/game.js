import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, FlatList, Pressable, Alert, } from 'react-native';
import { Image } from 'react-native';
import { useState } from 'react';
import ChoiceDisplay from '../../components/ChoiceDisplay';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useRouter} from 'expo-router'

const DATA = [
  {
    id: '0',
    title: 'Pedra',
    imagem: require('../../assets/pedra.png')
  },
  {
    id: '1',
    title: 'Papel',
    imagem: require('../../assets/papel.png')

  },
  {
    id: '2',
    title: 'Tesoura',
    imagem: require('../../assets/tesoura.png')

  },
];

function gerarNumeroIntervalo(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function App() {
  const [choice, setChoice] = useState(DATA[0]);

  function escolherOpcao(opcao) {
    setChoice(opcao);

    const numeroAleatorio = gerarNumeroIntervalo(0, 2);
    setOponentChoice(DATA[numeroAleatorio]);
  }

  const [oponent_Choice, setOponentChoice] = useState(DATA[0]);

  function opcaoInimigo(opcao) {
    setOponentChoice(opcao);
  }

  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
                <AntDesign name="rollback" size={24} color="white" onPress={() => router.push('/')}/>


          <View style={styles.game}>
            <View style={styles.oponent}>
              <Image source={oponent_Choice.imagem}
                style={{
                  width: 80,
                  height: 80,

                }} />
              <Text style={styles.title}>Oponente: {oponent_Choice.title}</Text>
            </View>
            <View style={styles.choice}>
              <Image source={choice.imagem}
                style={{
                  width: 80,
                  height: 80,

                }} />
              <Text style={styles.title}>Sua escolha: {choice.title}</Text>

            </View>
            <View style={styles.options}>

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


            </View>
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#15171a',

  },
  oponent: {
    backgroundColor: '#5a5359',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 3
  },
  options: {
    flex: 4,
  },
  choice: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#443e44',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#5a5359',
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
    padding: '5%',
    borderRadius: 20,
    flex: 1

  },

});