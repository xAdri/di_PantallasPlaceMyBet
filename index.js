/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './screens/partidos';
import inicio from './screens/inicio';
//import usuario from './screens/usuario';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => inicio);
