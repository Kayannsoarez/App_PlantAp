import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';
import { useEffect, useState } from 'react';
import { getPlantData } from '../service/services';

export type MonitorProps = NativeStackScreenProps<
    RootTabParamList,
    'Monitor'
>

const Monitor: React.FC<MonitorProps> = ({ navigation, route }) => {
    const { navigate } = useNavigation<NavigationProp<RootTabParamList>>();

    const [showFeeling, setShowFeeling] = useState<boolean>(false);
    const [temp, setTemp] = useState<number>(0);
    const [feel, setFeel] = useState<number>(0);
    const [lumi, setLumi] = useState<number>(0);
    const [humi, setHumi] = useState<number>(0);

    const setData = (async () => {
        const response = await getPlantData();

        if (response.isSuccess) {
            const values = response.getValue();

            values.forEach((value) => {
                if (value.variable === 'temp') {
                    setTemp(value.value);
                }
                if (value.variable === 'humi') {
                    setHumi(value.value);
                }
                if (value.variable === 'feel') {
                    setFeel(value.value);
                }
                if (value.variable === 'lumi') {
                    setLumi(value.value);
                }
            })
        }
    })

    useEffect(() => {
        setData();
    }, [])

    const PlantImage = () => {
        if (route.params.plant === 'esp') {
            return <Image style={styles.image} source={require('../assets/images/espada.png')} />;
        }
        if (route.params.plant === 'cac') {
            return <Image style={styles.image} source={require('../assets/images/cacto.png')} />;
        }
        if (route.params.plant === 'suc') {
            return <Image style={styles.image} source={require('../assets/images/suculenta.png')} />;
        }
    }

    return (
        <ScrollView style={styles.scrollView}>
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
                        {PlantImage()}
                    </TouchableOpacity>
                </View>

                <View style={styles.viewCenter}>
                    <View style={styles.rectangle}>
                        <Image source={require('../assets/images/Water.png')} />
                        <Text style={styles.textRetangle}>Umidade {'\n'} do Solo</Text>

                        <View style={styles.box}>
                            <Text style={styles.textIcon}>{humi.toFixed()}%</Text>
                        </View>
                    </View>
                    <View style={styles.rectangle}>
                        <Image source={require('../assets/images/Thermal.png')} />
                        <Text style={styles.textRetangle}>Temperatura</Text>
                        <View style={styles.box}>
                            <Text style={styles.textIcon}>{temp.toFixed()} ºC</Text>
                        </View>
                    </View>
                    <View style={styles.rectangle}>
                        <Image source={require('../assets/images/Sun.png')} />
                        <Text style={styles.textRetangle}>Luminosidade</Text>
                        <View style={styles.box}>
                            <Text style={styles.textIcon}>{lumi.toFixed()} lm</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={() => setData()}>
                        <Text style={styles.buttonText}>ATUALIZAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
        fontSize: 36,
        color: '#166423',
        fontWeight: '800',
    },
    backimage: {
        maxHeight: '80%',
        position: 'absolute',
        resizeMode: 'contain',
    },
    image: {
        marginTop: 35,
        maxHeight: '65%',
        marginBottom: 20,
        resizeMode: 'contain',
    },
    viewCenter: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    rectangle: {
        flex: 1,
        width: 348,
        height: 100,
        flexDirection: 'row',
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
    textRetangle: {
        fontSize: 22,
        color: 'black',
    },
    box: {
        width: 89,
        height: 50,
        marginLeft: 10,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: '#3A8221',
    },
    textIcon: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
    viewButton: {
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
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
    scrollView: {
        backgroundColor: 'white',
    },
});