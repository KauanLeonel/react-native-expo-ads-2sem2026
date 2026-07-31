import { Text, Image, Pressable, StyleSheet } from 'react-native';


export default function ChoiceDisplay({ escolha, onPress }) {
    return (
        <Pressable style={styles.item} onPress={onPress}>
            <Image source={escolha.imagem} style= {styles.image} />
            <Text>{escolha.title}</Text>
        </Pressable>
    )


}
const styles = StyleSheet.create({

    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
},
})
