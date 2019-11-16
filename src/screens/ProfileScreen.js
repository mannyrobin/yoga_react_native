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
  Text,
    TouchableHighlight,
    ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';


class ProfileScreen extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    search: '',
      notif: true,
      TextInputNameDiss: false,
      c: false,
      TextInputPhoneDiss: false,
      name: 'Владислав Вонсович',
      email: 'vlad.vonsovych88@gmail.com',
      phone: '+44 (555) 55-33',
  };



 onCloseNotif = () =>
  {
     this.setState({ notif: false })
     
  }

 onPressEditButton = () => {  
     this.state.TextInputNameDiss ?  this.setState({ TextInputNameDiss: false })   : this.setState({ TextInputNameDiss: true })  

}  
 onPressEditButtonEmail = () => {  
   
  this.state.TextInputEmailDiss ?  this.setState({ TextInputEmailDiss: false })   : this.setState({ TextInputEmailDiss: true })  
}  
  onPressEditButtonPhone = () => {  
     this.state.TextInputPhoneDiss ?  this.setState({ TextInputPhoneDiss: false })   : this.setState({ TextInputPhoneDiss: true })  

}  
   onGetSpots = () =>
  {
     
     this.props.navigation.navigate('ProfileGet');
     
  }
      onSaveSpots = () =>
  {
     
     this.props.navigation.navigate('ProfileSave');
     
  }
  render() {
      console.log(this.props, 'studiosprops')
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
              <View style={styles.arrowleft}>
                 <Icon
                    onPress={() => this.props.navigation.navigate('Four')}
                    name='chevron-left'
                    size = {20}
                    color='#fff'
                />
            <Text style={styles.text}>Мой профиль</Text>
            </View>
  
            <View style={styles.headericon}>
                    <Text style={styles.headersingleicon}>
                         <Icon

                            name='bell'
                            size = {25}
                            color='#fff'
                        />
                    </Text>
                    <View>
                       <SvgUri 

                            width="25" 
                            height="25" 
                            source={require('../assets/images/profileflt.svg')}
                    />
                    </View>
    
        
            </View>
        
          </View>
           <View style={styles.profileImage}>
                                
                   <Image
          style={{width: 120, height: 120, borderRadius: 100}}
          source={require('../assets/images/Profile.png')}
        />              
                                
                                
           </View>
         <View style={styles.prosfilenamewrap}>
         
                  <Text style={styles.prosfilename}>Владислав Вонсович</Text>

        
            </View>
 <View style={styles.wrap}>
           {this.state.notif ?  
               
               <View style={styles.freespotswrap}> 
               <View style={styles.freespots}> 
                      
                        <Text style={styles.freespotstext}>
                                Заполните всю информациюо себе
                                и получите 15 спотов
                        </Text>
                   <TouchableOpacity onPress={this.onCloseNotif} >
                        <SvgUri 

                                width="25" 
                                height="25" 
                                source={require('../assets/images/close.svg')}
                        />
                  </TouchableOpacity>
              </View>
              </View> : <Text> </Text>}
              </View>  
           <View style={styles.infowrap}> 
               <View style={styles.info}> 
               <Text style={styles.prosfileh2}>Личная информация </Text>
           <View style={styles.inputwrap} >
                <TextInput
                      style={{height: 40, fontSize: 14,   borderBottomWidth: 1,  borderRadius: 10, paddingLeft: 10,  borderColor: this.state.TextInputNameDiss ? '#FFF' : '#e6e6e6' , width: '85%' , backgroundColor: this.state.TextInputNameDiss ? '#FFF5EA' : '#FFF' }}
                      
                      onChangeText={(text) => this.setState({name})}
                      editable={this.state.TextInputNameDiss} 
                      value={this.state.name}
                />
                <TouchableOpacity onPress={this.onPressEditButton} >
                    <SvgUri 

                            width="20" 
                            height="20" 
                            source={require('../assets/images/editpen.svg')}
                    />
                </TouchableOpacity>
           </View>
           <View style={styles.inputwrap} >
                <TextInput
                      style={{height: 40, fontSize: 14,   borderBottomWidth: 1,  borderRadius: 10, paddingLeft: 10,  borderColor: this.state.TextInputEmailDiss ? '#FFF' : '#e6e6e6' , width: '85%' , backgroundColor: this.state.TextInputEmailDiss ? '#FFF5EA' : '#FFF' }}
                      
                      onChangeText={(text) => this.setState({email})}
                      editable={this.state.TextInputEmailDiss} 
                      value={this.state.email}
                />
                <TouchableOpacity onPress={this.onPressEditButtonEmail} >
                    <SvgUri 

                            width="20" 
                            height="20" 
                            source={require('../assets/images/editpen.svg')}
                    />
                </TouchableOpacity>
           </View>
       
           <View style={styles.inputwrap} >
                <TextInput
                      style={{height: 40, fontSize: 14,   borderBottomWidth: 1,  borderRadius: 10, paddingLeft: 10,  borderColor: this.state.TextInputPhoneDiss ? '#FFF' : '#e6e6e6' , width: '85%' , backgroundColor: this.state.TextInputPhoneDiss ? '#FFF5EA' : '#FFF' }}
                      
                      onChangeText={(text) => this.setState({text})}
                      editable={this.state.TextInputPhoneDiss} 
                      value={this.state.phone}
                />
                <TouchableOpacity onPress={this.onPressEditButtonPhone} >
                    <SvgUri 

                            width="20" 
                            height="20" 
                            source={require('../assets/images/editpen.svg')}
                    />
                </TouchableOpacity>
           </View>
               </View>
              </View>
                                    
                                      <View style={styles.bonuswrap}> 
               <View style={styles.info}> 
                      <Text style={styles.prosfileh2}>Бонусный баланс:<Text>500</Text>  спотов    </Text>
        
               
                <TouchableOpacity onPress={this.onGetSpots} >
                       <View style={styles.inputwrapspot} >
                    <Text>Как потратить споты?</Text>
                   <Icon
                    onPress={() => this.props.navigation.navigate('Four')}
                    name='chevron-right'
                    size = {20}
                    color='#0B1100'
                />
                             </View>
                </TouchableOpacity>
      
          
          
                <TouchableOpacity onPress={this.onSaveSpots} >
                     <View style={styles.inputwrapspot} >
                      <Text style={styles.textspot}>Как накопить споты?</Text>
                    <Icon
                    onPress={() => this.props.navigation.navigate('Four')}
                    name='chevron-right'
                    size = {20}
                    color='#0B1100'
                />
                         </View>
                </TouchableOpacity>
          
       
          
              
                <TouchableOpacity onPress={this.onPressEditButtonPhone} >
                     <View style={styles.inputwrapspot} >
                      <Text>Мои достижения</Text>
                    <Icon
                    onPress={() => this.props.navigation.navigate('Four')}
                    name='chevron-right'
                    size = {20}
                    color='#0B1100'
                />
                           </View>
                </TouchableOpacity>
        
                    </View>
              </View>
                                                 <View style={styles.settingwrap}> 
               <View style={styles.info}> 
                     
         
             
                <TouchableOpacity onPress={this.onPressEditButton} >
                      <View style={styles.inputwrapspot} >
                      <Text>Поддержка</Text>
                    <SvgUri 

                            width="20" 
                            height="20" 
                            source={require('../assets/images/setting.svg')}
                    />
                     </View>   
                </TouchableOpacity>
           
        
         
                <TouchableOpacity onPress={this.onPressEditButtonEmail} >
                                   <View style={styles.inputwrapspot} >
                       <Text style={styles.textgreen}>Ссылка на инстаграм</Text>
                   <SvgUri 

                            width="20" 
                            height="20" 
                            source={require('../assets/images/instagram.svg')}
                    />
                                        </View>
                </TouchableOpacity>
       
       
        
                    </View>
              </View>   
              
            <View style={styles.footerwrap}> 
                 <TouchableOpacity  style={styles.footerinfo} onPress={this.onPressEditButtonEmail} >
               
                         <Text style={styles.textgreen}>Настройка конфиденциальности </Text>   
                  </TouchableOpacity>

              </View>
              </View>
                 
 </ScrollView >
          </ImageBackground >

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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)


const styles = StyleSheet.create({
  container: {
 paddingTop: 10,
  
 textAlign: 'center',
       flex: 1,
  justifyContent: 'space-between',
     
   
  },
    textgreen: {
      color: '#646F4F'  
    },
      container1: {
 paddingTop: 10,
 paddingBottom: 65,     
 textAlign: 'center',
       flex: 1,
  justifyContent: 'space-between',
     
   
  },
 
     textspot: {
         fontSize: 12
     },
    text: {
      color: "#fff",
        fontSize: 18,
        textAlign: 'center',
        left: 10
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
 profileImage: {
     top: 30,
   flex: 0.3,
     alignItems: 'center',
        justifyContent: 'center',
 },
     prosfilenamewrap: {
          flex: 0.2,
        height: 40,
   
        justifyContent: 'center',
            bottom: 20,
          top: 30,
     },
    prosfilename: {
        textAlign: 'center',
        fontWeight: '600',
    fontSize: 30,
    textTransform: 'capitalize',  
    },
    wrap: {
        flex: 0.2,
        height: 40,
   
        justifyContent: 'center',
            bottom: 20,
          top: 40,
    },
  freespotswrap: {
       flex: 1,
    
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
       justifyContent: 'flex-end',
  },
 freespots: {
     paddingLeft: 25,
     paddingRight: 20,
     width: '75%',
     backgroundColor: '#fff', 
      flexDirection: 'row',
     justifyContent: 'space-between',
         alignItems: 'center',
      borderBottomLeftRadius: 50,
      borderTopLeftRadius: 50,
 },
    freespotstext: {
        width: '60%',
        lineHeight: 12,
        fontSize: 9,
    },
    prosfileh2: {
           fontSize: 16,
        fontWeight: '600',  
    },
    infowrap: {
        top: 50,
        bottom: 20,
        flex: 0.4,
        width: '100%',
        flexDirection: 'row',
       
        textAlign: 'center',
        justifyContent: 'center',
    },
      bonuswrap: {
        top: 50,
        bottom: 20,
        flex: 0.4,
        width: '100%',
        flexDirection: 'row',
       
        textAlign: 'center',
        justifyContent: 'center',
    },
      settingwrap: {
        top: 50,
        bottom: 20,
        flex: 0.4,
        width: '100%',
        flexDirection: 'row',
       
        textAlign: 'center',
        justifyContent: 'center',
    },
       footerwrap: {
        top: 50,
        bottom: 20,
        flex: 0.4,
        width: '100%',
        flexDirection: 'row',
       
        textAlign: 'center',
        justifyContent: 'center',
    },
      footerinfo: {
      marginTop: 20,
      shadowColor: "#8d7b67",

},
  info: {
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
      width: "90%",
      backgroundColor: '#fff',
      borderRadius: 20
    },

inputwrap: {
    width: '100%',
     marginTop: 10 ,
   
    flexDirection: 'row',
    justifyContent: 'space-between',
      alignItems: 'center',
},
    inputwrapspot: {
    width: '100%',
        paddingBottom: 10,
        paddingTop: 10,
     marginTop: 10 ,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
      alignItems: 'center',
},
   
});
