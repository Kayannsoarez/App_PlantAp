import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Plants: {
            screens: {
              PlantsScreen: 'plants',
            },
          },
          Monitor: {
            screens: {
              MonitorScreen: 'monitor',
            },
          },
          Feeling: {
            screens: {
              FeelingScreen: 'feeling',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
