import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';

const Plants: React.FC = () => {
  const {navigate} = useNavigation<NavigationProp<RootTabParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.plantHeader}>
        
        <Text style={styles.title}>Escolha sua Planta</Text>
      </View>
      <View style={styles.plantContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/espada.png')}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigate('Monitor', {plant: 'esp'})}>
          <Text style={styles.buttonText}>Espada de São Jorge</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.plantContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/cacto.png')}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigate('Monitor', {plant: 'cac'})}>
          <Text style={styles.buttonText}>Cacto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.plantContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/suculenta.png')}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigate('Monitor', {plant: 'suc'})}>
          <Text style={styles.buttonText}>Suculenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Plants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  plantHeader: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 60,
  },
  plantContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
    width: '80%',
  },
  title: {
    fontWeight: '800',
    fontSize: 36,
    lineHeight: 44,
    color: '#166423',
  },
  image: {
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#DFE0E2',
    width: '100%',
    margin: 5,
    borderRadius: 19,
    borderWidth: 1,
    paddingHorizontal: 27,
    paddingVertical: 15,
    marginVertical: 0,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 23,
    lineHeight: 28,
    color: 'black',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
