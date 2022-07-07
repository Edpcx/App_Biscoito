import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

function App() {
  //Criando uma useState
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Tudo posso naquele que me fortalece',
    'Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.',
    'Até aqui o Senhor nos ajudou',
    'O Senhor lutará por vocês; tão somente acalmem-se.',
    'Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós? ',
    'Bendiga o Senhor a minha alma! Não esqueça nenhuma de suas bênçãos!',
    'Embora esteja nas alturas, o Senhor olha para os humildes, e de longe reconhece os arrogantes.',
    'No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus',
    'Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio',
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase('"' + frases[numeroAleatorio] + '"');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/image-background.jpg')}
        style={styles.imageBackground}>
        <Image source={img} style={styles.img} />
        <Text style={styles.textofrase}>{textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, {marginTop: 15, borderColor: '#FFFFFF'}]}
          onPress={reiniciar}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, {color: '#FFFFFF'}]}>
              Reiniciar Biscoito
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#FFFFFF',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default App;
