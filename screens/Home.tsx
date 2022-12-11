import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProp<RootTabParamList>>();

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/back.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>PlantAp - Plants in Apartment</Text>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Plants')}>
            <Text style={styles.buttonText}>  Iniciar    </Text>
            
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    </ScrollView>
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
    left: 25,
    fontSize: 36,
    lineHeight: 44,
    marginTop: 450,
    color: '#166423',
    fontWeight: '800',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'white',
  },
  button: {
    width: 354,
    padding: 10,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 19,
    shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowRadius: 2.22,
  shadowOpacity: 0.22,
  backgroundColor: '#DFE0E2',
  },
  buttonText: {
    fontSize: 23,
    lineHeight: 28,
    color: 'black',
    fontWeight: '600',
  },
  viewButton: {
    flex: 1,
    marginVertical: 150,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
