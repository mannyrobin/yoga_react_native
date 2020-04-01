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
Linking,
TouchableHighlight,
ImageBackground,
  TouchableOpacity,
  View,
    Share,
} from 'react-native';
import * as Font from 'expo-font';
import SvgUri from 'react-native-svg-uri';
import {updateUserinfo} from '../redux/profileReducer'
import NavBar from '../components/NavBar';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';



class ProfileScreen extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    search: '',
      tub3: true,
      notif: true,
      image: null,
      TextInputNameDiss: false,
      c: false,
      TextInputPhoneDiss: false,
      name: '',
      email: '',
      phone: '',
        fontLoaded: false,
  };

    async componentDidMount() {
        await Font.loadAsync({
            'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf')
        });
    
        this.setState({fontLoaded: true });
    }
componentWillReceiveProps(nextProps){
    console.log(nextProps, 'nextProps')
  if(nextProps.userinfo.userinfo!==this.props.userinfo.userInfo){
    this.setState({ phone:  nextProps.userinfo.userinfo.info.phone == null ? '' : nextProps.userinfo.userinfo.info.phone })
    this.setState({ name: nextProps.userinfo.userinfo.info.name == null ? '' : nextProps.userinfo.userinfo.info.name })
    this.setState({ email: nextProps.userinfo.userinfo.info.email })
  }
}
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
      console.log( this.props.phone.phone.token.token,
         this.state.name,
         this.state.email,
         this.state.phone, 'wtf')
      let name = this.state.name == 'null' || this.state.name == null ? 'Your Name' : this.state.name
      let email = this.state.email == 'null' || this.state.email == null ? 'Your Email' : this.state.email
     this.state.TextInputPhoneDiss ?  
         this.setState({ TextInputPhoneDiss: false })

     : this.setState({ TextInputPhoneDiss: true })  
     this.props.updateUserinfo(
     this.props.phone.phone.token.token,
          name,
          email,
         this.state.phone)
}  
 onGetSpots = () =>
  {
     
     this.props.navigation.navigate('ProfileGet');
     
  }
 onSaveSpots = () =>
  {
     
     this.props.navigation.navigate('ProfileSave');
     
  }
     
 onAchievements = () =>
  {
     
     this.props.navigation.navigate('achievementsScreen');
     
  }

pickImage = async () => {
       await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Привет.Заходи ко мне в приложения http://spot43.ru/',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
      console.log(this.props,this.props.userinfo.userinfo, 'Profileprops')
      const { search,  } = this.state;
  
      
       return (<> 
                {this.state.fontLoaded  ? 
            
  <ImageBackground
        style={styles.container}
        source={require('../assets/images/studio.png')}
        imageStyle={{ resizeMode: 'cover' }}
      >
 <ScrollView  style={styles.containerscrl} >
     <View style={styles.container1}>
          <View style={styles.header}> 
              <TouchableOpacity style={styles.arrowleft}    onPress={() => this.props.navigation.navigate('Four')}>
                 <Icon
                 
                    name='chevron-left'
                    size = {20}
                    color='#fff'
                />
            <Text style={styles.text}>Мой профиль</Text>
            </TouchableOpacity>
  
            <View style={styles.headericon}>
                 <TouchableOpacity onPress={this.onShare}>
                    <Text style={styles.headersingleicon}>
                        
                         <Icon

                            name='bell'
                            size = {25}
                            color='#fff'
                        />
                                
                    </Text>
 </TouchableOpacity>
                    <View>
                                <TouchableOpacity onPress={this.onShare}>
                       <SvgUri 

                            width="25" 
                            height="25" 
                            source={require('../assets/images/profileflt.svg')}
                    />
                                     </TouchableOpacity>
                    </View>
    
        
            </View>
        
          </View>
           <View style={styles.profileImage}>
                      <TouchableOpacity onPress={this.pickImage }>          
                   <Image

          style={{width: 120, height: 120, borderRadius: 100}}
         
           source={this.state.image !== null ? { uri: this.state.image } : require('../assets/images/title.png')}
        />              
                                
               </TouchableOpacity >                   
           </View>
         <View style={styles.prosfilenamewrap}>
         
                  <Text style={styles.prosfilename}>{this.state.name }</Text>

        
            </View>

           {this.state.notif ?  
                <View style={styles.wrap}>
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
              </View></View>   : null}
              
           <View style={styles.infowrap}> 
               <View style={styles.info}> 
               <Text style={styles.prosfileh2}>Личная информация </Text>
           <View style={styles.inputwrap} >
                <TextInput
                      style={{height: 40, fontSize: 14,   borderBottomWidth: 1,  borderRadius: 10, paddingLeft: 10,  borderColor: this.state.TextInputNameDiss ? '#FFF' : '#e6e6e6' , width: '85%' , backgroundColor: this.state.TextInputNameDiss ? '#FFF5EA' : '#FFF' }}
                      
                      onChangeText={(name) => this.setState({name})}
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
                      
                      onChangeText={(email) => this.setState({email})}
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
                      
                      onChangeText={(phone) => this.setState({phone})}
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
                      <Text>Как накопить споты?</Text>
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
                     
         
             
                <TouchableOpacity onPress={()=>{ 
  Linking.openURL('mailto:hello@spot43.ru ');
                            }} >
                      <View style={styles.inputwrapspot} >
                      <Text>Поддержка</Text>
                    <Icon
                    onPress={() => this.props.navigation.navigate('Four')}
                    name='cog'
                    size = {20}
                    />
                     </View>   
                </TouchableOpacity>
           
        
         
                <TouchableOpacity onPress={this.onPressEditButtonEmail}  onPress={() => Linking.openURL('https://instagram.com/spot43app?igshid=houi8uy7qj31')}>
                                   <View style={styles.inputwrapspot} >
                       <Text style={styles.textgreen}>Ссылка на инстаграм</Text>
                    <Icon
                    onPress={() => this.props.navigation.navigate('Four')}
                    name='instagram'
                    size = {20}
                    color='#0B1100'
                />
                                        </View>
                </TouchableOpacity>
       
       
        
                    </View>
              </View>   
              
            <View style={styles.footerwrap}> 
                 <TouchableOpacity  style={styles.footerinfo} >
               
                         <Text style={styles.textgreen}>Настройка конфиденциальности </Text>   
                  </TouchableOpacity>

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
        userinfo: state.userinfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserinfo: (token,name,email,phone) => {
    dispatch(updateUserinfo(token,name,email,phone))
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
         fontSize: 12,
         fontFamily: 'Gilroy-Regular',
     },
    text: {
      color: "#fff",
        fontSize: 18,
        fontFamily: 'Gilroy-Regular',
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
    fontFamily: 'Gilroy-Regular',
        justifyContent: 'center',
            bottom: 20,
          top: 30,
     },
    prosfilename: {
        fontFamily: 'Gilroy-Regular',
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
        fontFamily: 'Gilroy-Regular',
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
