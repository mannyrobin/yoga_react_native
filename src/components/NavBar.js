import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
import SvgUri from 'react-native-svg-uri';
import {getUserinfo} from '../redux/profileReducer'
import { connect } from 'react-redux';
class NavBar extends Component {
  state = {
        tub1: this.props.tub1,
        tub2: false ,
        tub3: this.props.tub3,
        tub4: false ,
  };
    
  OnProfilePress = (id) =>
      {
         console.log('press')
         this.props.getUserinfo(this.props.phone.phone.token.token)
         this.props.navigation.navigate('Profile');

      }
  render() {
      console.log(this.props, 'nav')

  
   
      
   return (
      <View style={this.props.newstyle ? styles.navwrapnew : styles.navwrap}>
              <View style={this.state.tub1 ? styles.tubactive : styles.tub}>
        <TouchableOpacity activeOpacity={1} style={this.state.tub1 ? styles.wrapactive : styles.wrap}  onPress={() => this.props.navigation.navigate('Four')} >
       
         <SvgUri 

            width="25" 
            height="25" 
            source={require('../assets/images/tub1.svg')}
        />

       </TouchableOpacity>
  </View>
 <View style={styles.tub}>
        <TouchableOpacity activeOpacity={1} style={styles.wrap} >
       
         <SvgUri 

            width="25" 
            height="25" 
            source={require('../assets/images/tub2.svg')}
        />
       </TouchableOpacity>
                     </View>
                     <View style={this.state.tub3 ? styles.tubactive : styles.tub}>
        <TouchableOpacity activeOpacity={1} style={this.state.tub3 ? styles.wrapactive : styles.wrap} onPress={this.OnProfilePress} >
        
         <SvgUri 

            width="25" 
            height="25" 
            source={require('../assets/images/tub3.svg')}
        />
       </TouchableOpacity>
                     </View>
                     <View style={styles.tub}>
        <TouchableOpacity activeOpacity={1} style={styles.wrap}>
       
         <SvgUri 

            width="25" 
            height="25" 
            source={require('../assets/images/tub4.svg')}
        />
       </TouchableOpacity>
         </View>
            </View>
          )
  }

}
const mapStateToProps = state => {
  return {
      phone: state.phone,
  }
}

const mapDispatchToProps = dispatch => {
  return {

      getUserinfo: (token) => {
    dispatch(getUserinfo(token))
    }  
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)



const styles = StyleSheet.create({
  navwrap: {
      flex: .15,
      backgroundColor: '#BABF97',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
  },
      navwrapnew: {
      flex: .18,
      backgroundColor: '#BABF97',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
  },
    tub: {
      width: '25%',
        height: '100%',
         alignItems: 'center',
      justifyContent: 'space-between',
          backgroundColor: '#BABF97',
        paddingBottom: 5,
        paddingTop: 5,
    },
      tubactive: {
      width: '25%',
        height: '120%',
         
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
         alignItems: 'center',
      justifyContent: 'space-between',
          backgroundColor: '#BABF97',
        paddingBottom: 5,
        paddingTop: 25,
    },
        wrap: {
    padding: 20,
    borderRadius: 100,
    },
wrapactive: {
    padding: 20,
    borderRadius: 100,
      backgroundColor: '#646F4F',
}
});
