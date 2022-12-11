import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabParamList } from '../types';
import { useEffect, useState } from 'react';
import { getPlantData } from '../service/services';

const Feeling: React.FC = () => {
    const { navigate, goBack } = useNavigation<NavigationProp<RootTabParamList>>();

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

    const PlantFeeling = () => {
        if (feel === 1) {
            return <Image style={styles.backimage} source={require('../assets/images/felizz.png')} />;
        }
        if (feel === 2) {
            return <Image style={styles.backimage} source={require('../assets/images/sedee.png')} />;
        }
        if (feel === 3) {
            return <Image style={styles.backimage} source={require('../assets/images/enjoadaa.png')} />;
        }
        if (feel === 4) {
            return <Image style={styles.backimage} source={require('../assets/images/calorr.png')} />;
        }
        if (feel === 5) {
            return <Image style={styles.backimage} source={require('../assets/images/frioo.png')} />;
        }
        if (feel === 6) {
            return <Image style={styles.backimage} source={require('../assets/images/vampiroo.png')} />;
        }
        if (feel === 7) {
            return <Image style={styles.backimage} source={require('../assets/images/oculoss.png')} />;
        }
    }

    const PlantText = () => {
        if (feel === 1) {
            return <Text style={styles.title}>Estou Feliz</Text>;
        }
        if (feel === 2) {
            return <Text style={styles.title}>Estou com Sede</Text>;
        }
        if (feel === 3) {
            return <Text style={styles.title}>Estou Enjoada</Text>;
        }
        if (feel === 4) {
            return <Text style={styles.title}>Estou com Calor</Text>;
        }
        if (feel === 5) {
            return <Text style={styles.title}>Estou com Frio</Text>;
        }
        if (feel === 6) {
            return <Text style={styles.title}>Estou no Escuro</Text>;
        }
        if (feel === 7) {
            return <Text style={styles.title}>Esta muito Claro</Text>;
        }
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.plantHeader}>
                    <TouchableOpacity onPress={() => navigate('Plants')}>
                        <Image source={require('../assets/images/home.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Planta Feeling</Text>
                </View>
                <View style={styles.plantContainer}>
                    {PlantFeeling()}
                    {PlantText()}
                </View>

                <View style={styles.viewCenter}>
                    <View style={styles.rectangle}>
                        <Image source={require('../assets/images/Water.png')} />
                        <View style={styles.box}>
                            <Text style={styles.textIcon}>{humi.toFixed()}%</Text>
                        </View>
                    </View>

                    <View style={styles.rectangle}>
                        <Image source={require('../assets/images/Thermal.png')} />

                        <View style={styles.box}>
                            <Text style={styles.textIcon}>{temp.toFixed()} ºC</Text>
                        </View>
                    </View>

                    <View style={styles.rectangle}>
                        <Image source={require('../assets/images/Sun.png')} />

                        <View style={styles.box}>
                            <Text style={styles.textIcon}>{lumi.toFixed()} lm</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={() => goBack()}>
                        <Text style={styles.buttonText}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    plantContainer: {
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 36,
        color: '#166423',
        fontWeight: '800',
    },
    backimage: {
        maxHeight: '60%',
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
    viewCenter: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    rectangle: {
        flex: 1,
        width: 250,
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
        marginBottom: 20,
        backgroundColor: '#DFE0E2',
    },
    box: {
        width: 89,
        height: 50,
        marginLeft: 60,
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
    scrollView: {
        backgroundColor: 'white',
    },
});