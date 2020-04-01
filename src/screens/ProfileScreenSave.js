import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavBar from '../components/NavBar';
import React, { Component } from 'react';
import TabBarIcon from '../components/TabBarIcon';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
    TextInput,
    Linking,
  Text,
    TouchableHighlight,
    ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import * as Font from 'expo-font';


class ProfileScreenSave extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
tub3: true,
       fontLoaded: false,
  };

 
    async componentDidMount() {
        await Font.loadAsync({
            'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
            'Gilroy-Bold': require('../assets/fonts/gilroy-extrabold.ttf')
        });
    
        this.setState({fontLoaded: true });
    }
  render() {
    
      const { search,  } = this.state;
  
      
       return (
            <> 
                {this.state.fontLoaded  ? 
  <ImageBackground
        style={styles.container}
        source={require('../assets/images/studio.png')}
        imageStyle={{ resizeMode: 'cover' }}
      >

     <View style={styles.container1}>
           <View style={styles.header}> 
              <View style={styles.arrowleft}>
                 <Icon
                    onPress={() => this.props.navigation.navigate('Profile')}
                    name='chevron-left'
                    size = {20}
                    color='#fff'
                />
            <Text style={styles.textheader}>Как накопить споты?</Text>
            </View>
       </View>
 
           <View style={styles.infowrap}> 
               
               <View style={styles.info}> 
                   <View style={styles.inputwrap} >
                        <Text style={styles.prosfileh2}>Возможности накопления спотов.</Text>
                       
            <View style={styles.wrapsave}>
                             <View style={styles.iconText}>
                            <Text  style={styles.iconTextnum}> 1</Text>   
                        </View>
                             
                            <Text style={styles.text} > За внесение полной информации
в профиль о себе - <Text style={styles.iconTexspot}>15 спотов</Text></Text> 
                        </View>
              <View style={styles.wrapsave}>
                           <View style={styles.iconText}>
                            <Text  style={styles.iconTextnum}> 2</Text>   
                        </View>
                            <Text style={styles.text}>При рекоменрации приложения
друзьям - <Text style={styles.iconTexspot}>10 спотов</Text> </Text> 
                        </View>
     <View style={styles.wrapsave}>
                          <View style={styles.iconText}>
                            <Text  style={styles.iconTextnum}> 3</Text>   
                        </View>   
                            <Text style={styles.text}> Оставьте отзыв о студии
и вы получите -<Text style={styles.iconTexspot}>25 спотов</Text></Text> 
                        </View>
     <View style={styles.wrapsave}>
                            <View style={styles.iconText}>
                            <Text  style={styles.iconTextnum}> 4</Text>   
                        </View>  
                            <Text style={styles.text}>Чем больше вы ходите в студии
и оставляете отзывов, тем больше баланс ваших спотов </Text> 
                        </View>
               </View>
              </View>
              </View>
              
              </View>
                 
  
          </ImageBackground >
: null }
</>
  ); 
  }

}


export default ProfileScreenSave


const styles = StyleSheet.create({
  container: {
 paddingTop: 10,
  fontFamily: 'Gilroy-Regular',
 textAlign: 'center',
       flex: 1,
  justifyContent: 'space-between',
     
   
  },
    textheader: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '600',
        paddingLeft: 15
    } ,
  
iconTexspot: {
  color: '#BABF97',
    fontWeight: '600'
},
      container1: {
 paddingTop: 10,
 paddingBottom: 65,     
 textAlign: 'center',
       flex: 1,
  justifyContent: 'space-between',
     
   
  },
iconText: {
width: 35,
    height: 35,
   fontFamily: 'Gilroy-Regular',
    borderRadius: 100,
    alignItems: 'center',
        justifyContent: 'center',
    backgroundColor: '#BABF97',
},
    iconTextnum: {
         color: '#fff',
        right: 3
    },
    text: {
        width: '70%',
      color: "#000",
        textAlign: 'left',
        fontSize: 12,
        lineHeight: 22,
      marginLeft: 11
        
    },
    headersingleicon: {
      marginRight: 25,  
    },
       containerscrl: {
  flex: 1,
  
  
  },
    
  headericon: {
      display: 'flex',
      
        flex: 0.25,
          flexDirection: 'row',
      alignItems: 'center',
        justifyContent: 'flex-end',
},
    
      arrowleft: {
          flex: 0.65,
          flexDirection: 'row',
      alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
     
        flex: 0.3,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
       
    },

    header: {
        flex: 0.1,
       top: 10,
       width: '90%',
        paddingLeft: 20,
       fontFamily: 'Gilroy-Regular',
        flexDirection: 'row',
        justifyContent: 'space-between',
         alignItems: 'center',
       backgroundColor: 'transparent'
        
    
    },

    
    prosfileh2: {
      paddingTop: 20,
           fontSize: 17,
        fontWeight: '600',  
    },
    infowrap: {
      fontFamily: 'Gilroy-Regular',
        top: -50,
       
        bottom: 20,
        flex: 0.7,
        width: '100%',
        alignItems: 'center',
       
        textAlign: 'left',
        justifyContent: 'center',
    },


  info: {
       flex: 1,
       flexDirection: 'row',
      paddingTop: 20,
      shadowColor: "#8d7b67",
   paddingBottom: 30,
shadowOffset: {
	
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
      padding: 20,
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      width: "90%",
      backgroundColor: '#fff',
      borderRadius: 20
    },

inputwrap: {
    width: '100%',
    paddingBottom: 15,
     marginTop: 10 ,
      alignItems: 'flex-start',
},
wrapsave: {
    marginTop: 18,
      flex: 0.2,
    fontFamily: 'Gilroy-Regular',
       top: 20,
    bottom: 20,
       width: '100%',
        flexDirection: 'row',
         alignItems: 'center',
       backgroundColor: 'transparent'
},
   
});
