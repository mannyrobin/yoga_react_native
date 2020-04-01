import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState , Component} from 'react';
import { Platform, StatusBar, StyleSheet, View , Text,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'
import NavBar from './NavBar'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PhoneScreen from '../screens/PhoneScreen'
import CodeScreen from '../screens/CodeScreen'
import StudiesScreen from '../screens/StudiesScreen'
import SingleStudio from '../screens/SingleStudio'
import ProfileScreen from '../screens/ProfileScreen'
import SortScreen from '../screens/SortScreen'
import ProfileScreenGet from '../screens/ProfileScreenGet'
import ReviewScreen from '../screens/ReviewScreen'
import ProfileScreenSave from '../screens/ProfileScreenSave'
import achievementsScreen from '../screens/achievementsScreen'
import MapScreen from '../screens/MapContainer'





function Main(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}




 

 
 const Project = createStackNavigator(
{
 First: { screen:  HomeScreen },
 MapScreen: { screen: MapScreen  },
 SortScreen: { screen: SortScreen  },
 ReviewScreen: { screen: ReviewScreen  },
 
 Second: { screen: PhoneScreen },
 Three: { screen: CodeScreen },
 NavBar: { screen: NavBar },
    Four: { screen: StudiesScreen },
    Five: { screen: SingleStudio },
    Profile: { screen: ProfileScreen },
     ProfileGet: { screen: ProfileScreenGet },
     ProfileSave: { screen: ProfileScreenSave },
     achievementsScreen: { screen: achievementsScreen },
});
 
const AppContainer = createAppContainer(Project);



async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



export default Main