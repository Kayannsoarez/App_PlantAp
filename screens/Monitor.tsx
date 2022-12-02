import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';

const Monitor: React.FC = () => {
    const { navigate } = useNavigation<NavigationProp<RootTabParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.plantHeader}>
                <TouchableOpacity onPress={() => navigate('Plants')}>
                    <Image source={require('../assets/images/home.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Planta Monitor</Text>
            </View>
            <View style={styles.plantContainer}>
                <Image style={styles.backimage} source={require('../assets/images/Ellipse.png')} />

                <TouchableOpacity onPress={() => navigate('Feeling')}>
                    <Image style={styles.image} source={require('../assets/images/espada.png')} />
                </TouchableOpacity>

            </View>

            <View style={styles.viewCenter}>
                <View style={styles.rectangle}>
                    <Image source={require('../assets/images/Water.png')} />
                    <Text style={styles.textRetangle}>Umidade {'\n'} do Solo</Text>

                    <View style={styles.box}>
                        <Text style={styles.textIcon}>30</Text>
                    </View>
                </View>
                <View style={styles.rectangle}>
                    <Image source={require('../assets/images/Thermal.png')} />
                    <Text style={styles.textRetangle}>Temperatura</Text>
                    <View style={styles.box}>
                        <Text style={styles.textIcon}>30</Text>
                    </View>
                </View>
                <View style={styles.rectangle}>
                    <Image source={require('../assets/images/Sun.png')} />
                    <Text style={styles.textRetangle}>Luminosidade</Text>
                    <View style={styles.box}>
                        <Text style={styles.textIcon}>30</Text>
                    </View>
                </View>
            </View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Plants')}>
                    <Text style={styles.buttonText}>ATUALIZAR</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default Monitor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    plantHeader: {
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    plantContainer: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontWeight: '800',
        fontSize: 36,
        color: '#166423',
    },
    textIcon: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    backimage: {
        maxHeight: '80%',
        resizeMode: 'contain',
        position: 'absolute',

    },
    image: {
        maxHeight: '65%',
        resizeMode: 'contain',
        marginTop: 35,
        marginBottom: 20

    },
    button: {
        backgroundColor: '#3A8221',
        width: 292,
        margin: 5,
        borderRadius: 30,
        borderWidth: 1,
        paddingHorizontal: 27,
        paddingVertical: 15,
        marginBottom: 40,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 23,
        lineHeight: 28,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    rectangle: {
        flex: 1,
        flexDirection: 'row',
        width: '88%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderRadius: 10,
        marginBottom: 30,
        backgroundColor: '#DFE0E2',

    },
    viewButton: {
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
    },
    box: {
        width: 89,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: '#3A8221',
        marginLeft: 10,

    },
    viewCenter: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'transparent',
    },
    textRetangle: {
        fontSize: 22,
        color: 'black',
    }
});