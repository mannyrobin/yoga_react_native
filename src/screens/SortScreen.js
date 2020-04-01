
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
   
    ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import * as Font from 'expo-font';
import Slider from '../components/Slider'






class SortScreen extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
tub3: true,
       fontLoaded: false,
      rangeLow: '',
      rangeHigh: '',
      MultiSliderValueFirst: [0, 5000],
      MultiSliderValueSecond: [0, 2500],
      low: true,
      middle: false,
      hire: false
  };

    async componentDidMount() {
        await Font.loadAsync({
            'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
            'Gilroy-Bold': require('../assets/fonts/gilroy-extrabold.ttf')
        });
    
        this.setState({fontLoaded: true });
    }
getStarLow = () => {
         this.setState({ low: true,
                          middle: false,
                        hire: false
                        
                       })
}
getStarMiddle = () => {
         this.setState({ low: false,
                          middle: true,
                        hire: false
                        
                       })
}
getStarHire = () => {
         this.setState({ low: false,
                          middle: false,
                        hire: true
                        
                       })
}
   nonCollidingMultiSliderValuesChange = values => {
     
        this.setState({
           MultiSliderValueFirst: values,
        });
       
    };
nonCollidingMultiSliderValuesChangePrice = values => {
   
        this.setState({
          MultiSliderValueSecond: values,
        });
       
    };
  render() {
    console.log(this.props , 'sortprops')
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
                    onPress={() => this.props.navigation.navigate('MapScreen',{radius:this.state.MultiSliderValueFirst, price:this.state.MultiSliderValueSecond})}
                    name='chevron-left'
                    size = {20}
                    color='#fff'
                />
            <Text style={styles.textheader}>Студия йоги</Text>
            </View>
       </View>
    <View style={styles.topaction} >   
            <TouchableOpacity    onPress={() => this.props.navigation.navigate('MapScreen',{radius:this.state.MultiSliderValueFirst, price:this.state.MultiSliderValueSecond})} >
                          <Text style={styles.prosfileh2}>Сортировка</Text>
                  </TouchableOpacity> 
                    
                       <Text style={styles.filterclear}>очистить</Text>

                    </View>
           <View style={styles.infowrap}> 
             
               <View style={styles.info}> 
                  
                   <View style={styles.inputwrap} >
                     <Text style={styles.inputtext}> Расстояние </Text>
                       
                <View style={styles.sliderOne}>
                 <Slider
                    nonCollidingMultiSliderValuesChange={this.nonCollidingMultiSliderValuesChange}
                    value={this.state.MultiSliderValueFirst}
                    sufix={true}
        />
                   
                </View>
         
                             
               </View>
              </View>
              </View>
               <View style={styles.infowrap}> 
             
               <View style={styles.info}> 
                  
                   <View style={styles.inputwrap} >
                     <Text style={styles.inputtext}>Цена</Text>
                       
                <View style={styles.sliderOne}>
                 <Slider
nonCollidingMultiSliderValuesChange={this.nonCollidingMultiSliderValuesChangePrice}
 value={this.state.MultiSliderValueSecond}
 sufix={false}
        />
                   
                </View>
         
                             
               </View>
              </View>
              </View>
   <View style={styles.infowrap}> 
             
               <View style={styles.info}> 
                  
                   <View style={styles.inputwrap} >
                     <Text style={styles.inputtext}>Оценка</Text>
                       
                <View style={styles.starwrap}>
                 <TouchableOpacity
        style = {this.state.low ? styles.authbuttonactive : styles.authbutton}
         onPress={this.getStarLow}
       >
       <Text style = {this.state.low ? styles.buttontextactive  : styles.buttontext}>Низкая</Text>
       </TouchableOpacity>
                                  <TouchableOpacity
        style = {this.state.middle ? styles.authbuttonactive : styles.authbutton}
         onPress={this.getStarMiddle}
       >
       <Text style = {this.state.middle ? styles.buttontextactive  : styles.buttontext}>Средняя</Text>
       </TouchableOpacity>
               <TouchableOpacity
        style = {this.state.hire ? styles.authbuttonactive  : styles.authbutton}
         onPress={this.getStarHire}
       >
       <Text style = {this.state.hire ? styles.buttontextactive  : styles.buttontext}>Високая</Text>
       </TouchableOpacity>
                   
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


export default SortScreen


const styles = StyleSheet.create({
  container: {
 paddingTop: 10,
  fontFamily: 'Gilroy-Regular',
 textAlign: 'center',
       flex: 1,
  justifyContent: 'space-between',
     
   
  },
    buttontext: {
      color: '#000'
    },
      buttontextactive: {
      color: '#fff'
    },
  starwrap: {
       flexDirection: 'row',
      alignItems: 'center',
        justifyContent: 'space-between',
  },
         authbutton: {
             borderWidth: 0.5,
             borderColor: '#646F4F',
          width: "30%",
         textAlign: 'center',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
          marginTop: 20,
             marginRight: 5,
          height: 34,
      borderRadius: 80,
          letterSpacing: 0.05,
          fontSize: 12,
            color: "#fff",
      padding: 5,
      backgroundColor: 'transparent'
   },
     authbuttonactive: {
             borderWidth: 0.5,
             borderColor: '#646F4F',
          width: "30%",
         textAlign: 'center',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
          marginTop: 20,
             marginRight: 5,
          height: 34,
      borderRadius: 80,
          letterSpacing: 0.05,
          fontSize: 12,
            color: "#fff",
      padding: 5,
          backgroundColor: '#646F4F'
     },
    inputtext: {
         fontSize: 17,
        color: '#000',
        marginBottom: 10,
        fontWeight: '600',
    },
    topaction: {
        width: '100%',
         marginTop: 40,
           marginBottom: 10,
     paddingRight: 20,
     paddingLeft: 20,
                flexDirection: 'row',
      alignItems: 'center',
        justifyContent: 'space-between',
    },
    textheader: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '600',
        paddingLeft: 15
    } ,
  

      container1: {

 paddingBottom: 65,     
 textAlign: 'center',
       flex: 1,
  
     
   
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

    filterclear: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#fff'
        
    },
    prosfileh2: {
        color: '#fff',
           fontSize: 17,
       
    },
    infowrap: {
      fontFamily: 'Gilroy-Regular',
        
        
       marginTop: 20,
        bottom: 20,
        flex: 0.3,
        width: '100%',
        alignItems: 'center',
       
        textAlign: 'left',
        justifyContent: 'center',
    },


  info: {
       flex: 1,
       flexDirection: 'row',
      paddingTop: 30,
      shadowColor: "#8d7b67",
   
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
    paddingTop: 10,
    paddingBottom: 15,
  
     marginTop: 10 ,
      alignItems: 'flex-start',
},

   
});
