import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';

const Feeling: React.FC = () => {
    const { navigate } = useNavigation<NavigationProp<RootTabParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.plantHeader}>
                <TouchableOpacity onPress={() => navigate('Plants')}>
                    <Image source={require('../assets/images/home.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Planta Feeling</Text>
            </View>
            <View style={styles.plantContainer}>
                <Image style={styles.backimage} source={require('../assets/images/felizz.png')} />
                <Text style={styles.title}>Estou Feliz</Text>
            </View>

            <View style={styles.viewCenter}>
                <View style={styles.rectangle}>
                    <Image source={require('../assets/images/Water.png')} />
                    <View style={styles.box}>
                        <Text style={styles.textIcon}>30</Text>
                    </View>
                </View>

                <View style={styles.rectangle}>
                    <Image source={require('../assets/images/Thermal.png')} />

                    <View style={styles.box}>
                        <Text style={styles.textIcon}>30</Text>
                    </View>
                </View>

                <View style={styles.rectangle}>
                    <Image source={require('../assets/images/Sun.png')} />

                    <View style={styles.box}>
                        <Text style={styles.textIcon}>30</Text>
                    </View>
                </View>
            </View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Monitor')}>
                    <Text style={styles.buttonText}>VOLTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );;
}

export default Feeling;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    plantHeader: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    plantContainer: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 36,
        color: '#166423',
        fontWeight: '800',
    },
    textIcon: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
    backimage: {
        height: '80%',
        maxHeight: 200,
        resizeMode: 'contain',
    },
    button: {
        margin: 5,
        width: 292,
        borderWidth: 1,
        marginBottom: 40,
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 27,
        backgroundColor: '#3A8221',
    },
    buttonText: {
        fontSize: 23,
        lineHeight: 28,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangle: {
        marginBottom: 40,
        flexDirection: 'row',
        backgroundColor: 'transparent',

    },
    viewButton: {
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
    },
    box: {
        width: 89,
        height: 50,
        marginLeft: 60,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: '#3A8221',
    },
    viewCenter: {
        flex: 1,
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
});