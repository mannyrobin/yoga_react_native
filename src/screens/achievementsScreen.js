
import React, { Component } from 'react';
import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavBar from '../components/NavBar';


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


class achievementsScreen extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
          show: false
    },
  };
  state = {
        tub3: true 
  };

OnShowMore = () => {
   if (this.state.show) {
       
       this.setState({ show: false })
   } else {
        this.setState({ show: true }) 
   }
    
}
  render() {
    
      const { search,  } = this.state;
  
      
       return (
            
  <ImageBackground
        style={styles.container}
        source={require('../assets/images/studio.png')}
        imageStyle={{ resizeMode: 'cover' }}
      >
 <ScrollView  style={styles.containerscrl} >
     <View style={styles.container1}>
           <View style={styles.header}> 
              <TouchableOpacity  activeOpacity={.8} style={styles.arrowleft} onPress={() => this.props.navigation.navigate('Profile')}>
                 <Icon
                    
                    name='chevron-left'
                    size = {20}
                    color='#fff'
                />
            <Text style={styles.textheader}>Мои достижения</Text>
            </TouchableOpacity>
       </View>
    
           <View style={styles.infowrap}> 
           
               <View style={styles.info}> 
                   <View style={styles.inputwrap} >
                       
              <View style={styles.wrapsave}>
                       <Text style={styles.prosfileh2}>Ваш текущий статус</Text>
                               <SvgUri 

                            width="80" 
                            height="80" 
                            source={require('../assets/images/status.svg')}
                    />
                                    
                     <Text style={styles.prosfileh2}>Профи Йог</Text>
</View>
                        <View style={styles.wrapachi}>
                        
                            <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/pro.svg')}
                                />
                                             <Text style={styles.text}>Pro Yog</Text>
                            </View>
                         
                           <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/master.svg')}
                                />
                                             <Text style={styles.text}>Stretching girl</Text>
                            </View>
                          
                            <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/pro.svg')}
                                />
                                             <Text style={styles.text}>Master</Text>
                            </View>
  <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/master.svg')}
                                />
                                             <Text style={styles.text}>VIP Sensay</Text>
                            </View>
                        <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/pro.svg')}
                                />
                                             <Text style={styles.text}>Active Guest</Text>
                        </View>
                        <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/pro.svg')}
                                />
                                             <Text style={styles.text}>Rookie</Text>
                            </View>

                            {this.state.show ?  <> 
                        <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/pro.svg')}
                                />
                                             <Text style={styles.text}>Rookie</Text>
                        </View>
                   
                        <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/pro.svg')}
                                />
                                             <Text style={styles.text}>Rookie</Text>
                        </View> 
                            <View style={styles.singleachi}>
                                
                                <SvgUri 

                                    width="80" 
                                    height="80" 
                                    source={require('../assets/images/master.svg')}
                                />
                                             <Text style={styles.text}>VIP Sensay</Text>
                        </View>
                               </> : null}

                        <TouchableOpacity 
                                    activeOpacity={.6}
                                    onPress = {this.OnShowMore}
                                    style = {styles.button}>
                                <Text style = {styles.buttontext}>
                                  {this.state.show ? 'Скрыть награды': 'Посмотреть все награды'}
                                </Text>
                        </TouchableOpacity>
                        </View> 
                         
                         
                         </View>
               </View>
              </View>
 
              </View>
           
            
                 
   </ScrollView >
            <NavBar
                tub3={this.state.tub3}
navigation = {this.props.navigation}

/>
          </ImageBackground >

  ); 
  }

}


export default achievementsScreen


const styles = StyleSheet.create({
  container: {
 paddingTop: 10,
  
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
       button: {
          width: '100%',
         textAlign: 'center',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
          marginTop: 40,
          height: 44,
      borderRadius: 100,
          letterSpacing: 0.05,
          fontSize: 14,
            color: "#fff",
      padding: 25,
      backgroundColor: '#646F4F'
   },
     buttontext: {
      color: "#fff",
        fontSize: 14,
       
    },
      container1: {
 paddingTop: 10,
 paddingBottom: 65,     
 textAlign: 'center',
       flex: 1,
  justifyContent: 'space-between',
     
   
  },

  
    text: {
  
      color: "#141212",
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 22,
     
        
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
       
        flexDirection: 'row',
        justifyContent: 'space-between',
         alignItems: 'center',
       backgroundColor: 'transparent'
        
    
    },

    
    prosfileh2: {
      paddingTop: 20,
        paddingBottom: 20,
           fontSize: 17,
        fontWeight: '600', 
        textAlign: 'center',
    },
    infowrap: {
      
        top: 40,
       
        flex: 0.95,
        width: '100%',
        alignItems: 'center',
       
        textAlign: 'left',
        justifyContent: 'center',
    },


  info: {
       flex: 1,
       flexDirection: 'row',
      
      shadowColor: "#8d7b67",
   paddingBottom: 30,
shadowOffset: {
	
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
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
  
      alignItems: 'center',
},
wrapsave: {
      flex: 0.45,
   
    width: '100%',
    alignItems: 'center',
     backgroundColor: '#FFE4C7',
    borderRadius: 20,
    shadowOpacity: 0.43,
shadowRadius: 9.51,
shadowColor: "#8d7b67",
elevation: 15,
},
   wrapachi: {
        width: '90%',
       top: 15,
       flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
         alignItems: 'center',
   },
    singleachi: {
        marginTop: 10,
           width: '33%',
    },
});
