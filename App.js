import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default function App(){
  return (
    <View style ={styles.container}>
    <Text style ={styles.titulo}>Meu primeiro App React Native</Text>
    <TextInput style ={styles.campo} placeholder="Digite algo..."/>
    <View style={styles.row}>
    <TouchableOpacity style={styles.botao}>
    <Text>Entrar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao}>
    <Text>Sair</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row', // Coloca os itens lado a lado
    justifyContent: 'space-between', // Espaço entre os botões
  },
  botao: {
    backgroundColor: "cyan",
    margin: 15,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    width: 100,
    height: 50,
    borderStyle: "#1b3432"
  },

  titulo: {
    fontSize: 20,
    color: "blue",
    margin: 10,
    fontWeight: 'bold',
  },
  campo: {
    height: 25,
    borderWidth: 1,         // Grossura da borda
    borderColor: 'black',    // Cor da borda
    borderRadius: 8,        // Cantos arredondados
    paddingHorizontal: 10,  // Espaço interno lateral
  }
})
