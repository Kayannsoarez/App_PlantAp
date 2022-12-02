import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProp<RootTabParamList>>();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/back.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>PlantAp - Plants in Apartment</Text>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Plants')}>
            <Text style={styles.buttonText}>  Iniciar                                    {'>'}{'>'}{'>'} </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontWeight: '800',
    fontSize: 36,
    lineHeight: 44,
    left: 25,
    marginTop: 450,
    color: '#166423',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DFE0E2',
    width: '80%',
    marginTop: 50,
    borderRadius: 19,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 23,
    lineHeight: 28,
    color: 'black',
  },
  viewButton: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    marginVertical: 60,
},
});
