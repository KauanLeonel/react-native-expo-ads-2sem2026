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
    backgroundColor: '#b8abbb',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderRadius: 20,
  },

  image: {
    width: 80,
    height: 80,
},
})
