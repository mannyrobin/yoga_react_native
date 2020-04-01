import * as WebBrowser from 'expo-web-browser';

import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
    TouchableHighlight,
    ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import { MonoText, } from '../components/StyledText';



class HomeScreen extends Component {
 static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
 
  OnSigninPress = () =>
  {
     this.props.navigation.navigate('Second');
     
  }
  render() {
       return (
  <ImageBackground
        style={styles.container}
        source={require('../assets/images/auth-bg.png')}
        imageStyle={{ resizeMode: 'cover' }}
      >
          <View 
 style={styles.shadow}
/>
     <Text style={styles.text}>  
     Привет! 
     </Text>
 <Text style={styles.text}>  
    Тебя ждут самые лучшие
     </Text>
          <Text
style={styles.text}>
 

места спорта и красоты в городе.</Text>

  <TouchableOpacity 

onPress = {this.OnSigninPress }
style = {styles.authbutton}>
            <Text style = {styles.buttontext}>
               Войти
            </Text>
         </TouchableOpacity>
          </ImageBackground >
  ); 
  }

}


export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
      authbutton: {
          width: 300,
         textAlign: 'center',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
          marginTop: 30,
          height: 44,
      borderRadius: 100,
          letterSpacing: 0.05,
          fontSize: 14,
            color: "#fff",
      padding: 25,
      backgroundColor: '#646F4F'
   },
    text: {
        
      color: "#fff",
        fontSize: 18,
        textAlign: 'center',
    },
      buttontext: {
      color: "#fff",
        fontSize: 14,
       
    },
    shadow: {
         position: 'absolute',
        backgroundColor: '#040404',
        opacity: 0.5,
        left: 0,
        top: 0,
     width: "100%",
     height: "100%",
       
        
     backgroundColor: '#000',
    },

});
