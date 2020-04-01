import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
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
import NavBar from '../components/NavBar';


class ProfileScreenGet extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    search: '',
      notif: true,
      TextInputYogaDiss: true,
      TextInputMoscowDiss: false,
      TextInputinDiss: false,
      TextInputPromoDiss: false,
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
 onCloseNotif = () =>
  {
     this.setState({ notif: false })
     
  }

 onShowYogsButton = () => {  
     this.state.TextInputYogaDiss ?  this.setState({ TextInputYogaDiss: false })   : this.setState({ TextInputYogaDiss: true })  

}  
 onShowMoscowButton = () => {  
     this.state.TextInputMoscowDiss ?  this.setState({ TextInputMoscowDiss: false })   : this.setState({ TextInputMoscowDiss: true })  

}  
  onShowInButton = () => {  
     this.state.TextInputinDiss ?  this.setState({ TextInputinDiss: false })   : this.setState({ TextInputinDiss: true })  

}  
   onShowPromoButton = () => {  
     this.state.TextInputPromoDiss ?  this.setState({ TextInputPromoDiss: false })   : this.setState({ TextInputPromoDiss: true })  

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
 <ScrollView  style={styles.containerscrl} >
     <View style={styles.container1}>
           <View style={styles.header}> 
              <View style={styles.arrowleft}>
                 <Icon
                    onPress={() => this.props.navigation.navigate('Profile')}
                    name='chevron-left'
                    size = {20}
                    color='#fff'
                />
            <Text style={styles.textheader}>Как потратить споты?</Text>
            </View>
       </View>
 
           <View style={styles.infowrap}> 
               
               <View style={styles.info}> 
                   <View style={styles.inputwrap} >
                        <Text style={styles.prosfileh2}>Йога-фотосессия </Text>
                        <Text style={styles.greentext}> 20 спотов</Text>
           
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.onShowYogsButton} >
                              {this.state.TextInputYogaDiss ?           <Icon
                 
                    name='chevron-up'
                    
                    size = {20}
                    color='#646F4F'
                /> :  <Icon
                  
                    name='chevron-down'
                    
                    size = {20}
                    color='#646F4F'
                />  }
                     
                          <Text style={styles.textgreenmargin}>{this.state.TextInputYogaDiss ? 'Скрыть описание ' : 'Показать Описание'}</Text>

                        </TouchableOpacity>
                {this.state.TextInputYogaDiss ?    <View style={styles.showblock} >
             
                            <Text style={{marginBottom: 15}}> Здесь будет короткое описание мероприятия товара на три, четыре строки.</Text>     
 <TouchableOpacity   onPress={() => Linking.openURL('http://google.com')} >
                            <Text style={styles.textgreen}>Сайт партнера </Text>      
    </TouchableOpacity>
                            <View style={{flexDirection: 'row'}}    >
                                
                              
                              <Icon
                                      name='mobile-alt'
                                      size = {20}
                            color='#000'
                             />
                                <Text style={styles.textmargin}> (800) 566-22-16</Text>
                            </View>  

                            <TouchableOpacity style={styles.spotbutton} onPress={this.onPressEditButton} >
                                    <Text style={styles.text}>Компенсировать</Text>
                            </TouchableOpacity>
                      
                           </View> : <Text> </Text>}
                     

                    </View>
                    
                    <View style={styles.imagewrap} > 
                       {this.state.TextInputYogaDiss ?     <Image
                style={{height: '100%'}}
          source={require('../assets/images/yogaspots.png')}
        />     :      <Image
                style={{height: '100%'}}
          source={require('../assets/images/yogaspots.png')}
        />      }
                
                    </View>
   
       
         
               </View>
              </View>
                                    
                 <View style={styles.infowrap}> 
               
               <View style={styles.info}> 
                   <View style={styles.inputwrap} >
                        <Text style={styles.prosfileh2}>Москва-Сити </Text>
                        <Text style={styles.greentext}> 50 спотов</Text>
           
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.onShowMoscowButton} >
                              {this.state.TextInputMoscowDiss ?           <Icon
                 
                    name='chevron-up'
                    
                    size = {20}
                    color='#646F4F'
                /> :  <Icon
                  
                    name='chevron-down'
                    
                    size = {20}
                    color='#646F4F'
                />  }
                     
                          <Text style={styles.textgreenmargin}>{this.state.TextInputMoscowDiss ? 'Скрыть описание ' : 'Показать Описание'}</Text>

                        </TouchableOpacity>
                {this.state.TextInputMoscowDiss ?    <View style={styles.showblock} >
             
                            <Text style={{marginBottom: 15}}> Здесь будет короткое описание мероприятия товара на три, четыре строки.</Text>     
 <TouchableOpacity   onPress={() => Linking.openURL('http://google.com')} >
                            <Text style={styles.textgreen}>Сайт партнера </Text>      
    </TouchableOpacity>
                            <View style={{flexDirection: 'row', marginTop: 10}}    >
                                
                              
                              <Icon
                                      name='mobile-alt'
                                      size = {20}
                            color='#000'
                             />
                                <Text style={styles.textmargin}> (800) 566-22-16</Text>
                            </View>  

                            <TouchableOpacity style={styles.spotbutton} onPress={this.onPressEditButton} >
                                    <Text style={styles.text}>Компенсировать</Text>
                            </TouchableOpacity>
                      
                           </View> : <Text> </Text>}
                     

                    </View>
                    
                    <View style={styles.imagewrap} > 
                       {this.state.TextInputMoscowDiss ?     <Image
                style={{height: '100%'}}
          source={require('../assets/images/yogaspots.png')}
        />     :      <Image
                style={{height: '100%'}}
          source={require('../assets/images/moscow.png')}
        />      }
                
                    </View>
   
       
         
               </View>
              </View>
                    <View style={styles.infowrap}> 
               
               <View style={styles.info}> 
                   <View style={styles.inputwrap} >
                        <Text style={styles.prosfileh2}>Инь-йога</Text>
                        <Text style={styles.greentext}> 35 спотов</Text>
           
                        <TouchableOpacity style={{flexDirection: 'row', marginTop: 10}} onPress={this.onShowInButton} >
                              {this.state.TextInputinDiss ?           <Icon
                 
                    name='chevron-up'
                    
                    size = {20}
                    color='#646F4F'
                /> :  <Icon
                  
                    name='chevron-down'
                    
                    size = {20}
                    color='#646F4F'
                />  }
                     
                          <Text style={styles.textgreenmargin}>{this.state.TextInputinDiss ? 'Скрыть описание ' : 'Показать Описание'}</Text>

                        </TouchableOpacity>
                {this.state.TextInputinDiss ?    <View style={styles.showblock} >
             
                            <Text style={{marginBottom: 15}}> Здесь будет короткое описание мероприятия товара на три, четыре строки.</Text>     
 <TouchableOpacity   onPress={() => Linking.openURL('http://google.com')} >
                            <Text style={styles.textgreen}>Сайт партнера </Text>      
    </TouchableOpacity>
                            <View style={{flexDirection: 'row'}}    >
                                
                              
                              <Icon
                                      name='mobile-alt'
                                      size = {20}
                            color='#000'
                             />
                                <Text style={styles.textmargin}> (800) 566-22-16</Text>
                            </View>  

                            <TouchableOpacity style={styles.spotbutton} onPress={this.onPressEditButton} >
                                    <Text style={styles.text}>Компенсировать</Text>
                            </TouchableOpacity>
                      
                           </View> : <Text> </Text>}
                     

                    </View>
                    
                    <View style={styles.imagewrap} > 
                       {this.state.TextInputinDiss ?     <Image
                style={{height: '100%'}}
          source={require('../assets/images/yogaspots.png')}
        />     :      <Image
                style={{height: '100%'}}
          source={require('../assets/images/inyoga.png')}
        />      }
                
                    </View>
   
       
         
               </View>
              </View>
                  
                  
                    <View style={styles.infowrap}> 
               
               <View style={styles.info}> 
                   <View style={styles.inputwrapLast} >
                        <Text style={styles.prosfileh2}>20% промокод
на массаж</Text>
                        <Text style={styles.greentext}> 35 спотов</Text>
           
                        <TouchableOpacity style={{flexDirection: 'row', marginTop: 10 }} onPress={this.onShowPromoButton} >
                              {this.state.TextInputPromoDiss?           <Icon
                 
                    name='chevron-up'
                    
                    size = {20}
                    color='#646F4F'
                /> :  <Icon
                  
                    name='chevron-down'
                    
                    size = {20}
                    color='#646F4F'
                />  }
                     
                          <Text style={styles.textgreenmargin}>{this.state.TextInputPromoDiss ? 'Скрыть описание ' : 'Показать Описание'}</Text>

                        </TouchableOpacity>
                {this.state.TextInputPromoDiss ?    <View style={styles.showblock} >
             
                            <Text style={{marginBottom: 15}}> Здесь будет короткое описание мероприятия товара на три, четыре строки.</Text>     
 <TouchableOpacity   onPress={() => Linking.openURL('http://google.com')} >
                            <Text style={styles.textgreen}>Сайт партнера </Text>      
    </TouchableOpacity>
                            <View style={{flexDirection: 'row'}}    >
                                
                              
                              <Icon
                                      name='mobile-alt'
                                      size = {20}
                            color='#000'
                             />
                                <Text style={styles.textmargin}> (800) 566-22-16</Text>
                            </View>  

                            <TouchableOpacity style={styles.spotbutton} onPress={this.onPressEditButton} >
                                    <Text style={styles.text}>Компенсировать</Text>
                            </TouchableOpacity>
                      
                           </View> : <Text> </Text>}
                     

                    </View>
                    
                    <View style={styles.imagewrap} > 
                       {this.state.TextInputPromoDiss ?     <Image
                style={{height: '100%'}}
          source={require('../assets/images/yogaspots.png')}
        />     :      <Image
                style={{height: '100%'}}
          source={require('../assets/images/promo.png')}
        />      }
                
                    </View>
   
       
         
               </View>
              </View>
              </View>
                 
 </ScrollView >
       
          </ImageBackground >
: null }
</>
  ); 
  }

}


const mapStateToProps = state => {
  return {
      phone: state.phone,
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStudio: (token) => {
    
    }
      
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreenGet)


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
        fontFamily: 'Gilroy-Bold',
        paddingLeft: 15
    } ,
    textmargin: {
      left: 10 
    },
     greentext: {
      
        fontSize: 16,
        marginBottom: 11,
       fontFamily: 'Gilroy-Bold',
      color: '#BABF97'  
    },
     textgreenmargin: {
       fontFamily: 'Gilroy-Regular',
             marginBottom: 10,
      color: '#646F4F'  ,
          left: 10 
     },
    textgreen: {
        fontFamily: 'Gilroy-Regular',
          marginBottom: 10,
      color: '#646F4F'  
    },
showblock: {
    
},
      container1: {
 paddingTop: 10,
 paddingBottom: 65,     
 textAlign: 'center',
       flex: 1,
  justifyContent: 'space-between',
     
   
  },
 spotbutton: {
          width: 165,
        fontFamily: 'Gilroy-Regular',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
          marginTop: 20,
          height: 35,
      borderRadius: 100,
          letterSpacing: 0.05,
          fontSize: 14,
            color: "#fff",
      padding: 15,
      backgroundColor: '#646F4F'
   },
     textspot: {
         fontFamily: 'Gilroy-Regular',
         fontSize: 12
     },
    text: {
      color: "#fff",
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
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
        marginBottom: 10,
           fontSize: 20,
        fontFamily: 'Gilroy-Bold',
    },
    infowrap: {
        top: 50,
        bottom: 20,
        flex: 0.4,
        width: '100%',
        alignItems: 'center',
       
        textAlign: 'left',
        justifyContent: 'center',
    },


  info: {
       flexDirection: 'row',
      marginTop: 20,
      shadowColor: "#8d7b67",
shadowOffset: {
	width: 0,
	height: 7,
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
    width: '60%',
    paddingBottom: 10,
     marginTop: 10 ,
      alignItems: 'flex-start',
},
inputwrapLast
   : {
    width: '60%',
    paddingBottom: 0,
     marginTop: 10 ,
      alignItems: 'flex-start',
},
});
