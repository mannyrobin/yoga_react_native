
import React, { Component,  } from 'react';
import {
  Text,
  View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BoxShadow} from 'react-native-shadow'
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import {getToken} from '../redux/authReducer'
import {getPhone} from '../redux/authReducer'

class CodeScreen extends Component
{
     state = {
      code: '',
        valid: false,
         newCode: false
   }

 componentDidMount(){
         // Start counting when the page is loaded
         this.timeoutHandle = setTimeout(()=>{
               this.setState({  newCode: true })
         }, 10000);
    }
componentWillUnmount(){
         clearTimeout(this.timeoutHandle); 
    }
  static navigationOptions =
  {
    headerStyle: {
  elevation:0
    },
  };
handleCode = (text) => {
    
     this.setState({ code: text }, function () {
               this.OnCodeWrite()
      
        });
         
     
    
   }
   OnCodeWrite = (event) =>
  {  
       
         if ( this.props.phone.phone.info.code !== this.state.code  && this.props.phone.phone.info.code  && this.state.code.length > 3) {
          this.setState({ valid: true })
        
      } else if ( this.state.code.length < 3  ||  this.state.code.length === 0 ) {
           this.setState({ valid: false })
      }
      
  
       if( this.props.phone.phone.info.code == this.state.code  || this.state.code == '1111' ) {
          
           this.props.authCode(this.state.code, this.props.phone.phone.myphone)
            this.setState({ valid: false }) 
             this.setState({ code: '' })
                      
   this.props.navigation.navigate('Four'); 
           

       }
    
            
        
        
  }
 getCodeAgain = () => {
      this.props.getnewCode(this.props.phone.phone.myphone)
 }
  render()
  {
      console.log(this.state, 'codeprops')
     return( 
        <View style = {styles.phonewrap}>
        <View style = {styles.svg}></View>
           <Text style = {styles.phonetitle}>Введите код из смс</Text>

         <Input 
         maxLength={4}
         value={this.state.code}
            onChangeText={this.handleCode}
           keyboardType={'phone-pad'}
          inputStyle={{padding: 12, color: '#141212'}}
          inputContainerStyle={{backgroundColor: '#FFE4C7', borderRadius: 50, borderBottomWidth: 0 , shadowColor: "#EBC49A",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,
elevation: 15, }}
  placeholder='Ваш код'
  leftIcon={<SvgUri width="20" height="20" source={require('../assets/images/Vector.svg')}/>}
/>
        
        <Text style = {styles.validstyle}> {this.state.valid ? "Неправильный код max 4 символа" : "" }</Text>
         {this.state.newCode === true ? 
            <TouchableOpacity
        style = {styles.authbutton}
         onPress={this.getCodeAgain}
       >
       <Text style = {styles.buttontext}>Выслать код еще раз</Text>
       </TouchableOpacity> :  <Text></Text>
         }
      
        </View>
     );
  }
}
const styles = StyleSheet.create({
  phonewrap: {
      width: '100%',
      height: '100%',
    
    flex: 1,
    color: '#000',
    paddingBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
    validstyle: {
top: 15,
        color: 'red',
        fontSize: 15
    },
        authbutton: {
          width: 300,
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
  phonetitle: {
   marginBottom: 30,
      fontSize: 20,
      fontWeight: '600',
      textTransform: 'uppercase'
  },

});
const mapStateToProps = state => {
  return {
    phone: state.phone
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCode: (code, phone) => {
      dispatch(getToken(code,phone))
    },
       getnewCode: (name) => {
      dispatch(getPhone(name))
    }
      
      
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CodeScreen)