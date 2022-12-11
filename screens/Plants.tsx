import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';

const Plants: React.FC = () => {
  const {navigate} = useNavigation<NavigationProp<RootTabParamList>>();

  return (
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
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
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  plantContainer: {
    width: '80%',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 36,
    lineHeight: 44,
    color: '#166423',
    fontWeight: '800',
  },
  image: {
    justifyContent: "center",
  },
  button: {
    margin: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 19,
    marginVertical: 0,
    paddingVertical: 15,
    paddingHorizontal: 27,
    backgroundColor: '#DFE0E2',  
  },
  buttonText: {
    fontSize: 23,
    lineHeight: 28,
    color: 'black',
    fontWeight: '600',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
