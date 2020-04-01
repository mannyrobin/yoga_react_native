
import React, { Component,  } from 'react';
import {
  Text,
  View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview'
import { connect } from 'react-redux';
import {getPhone} from '../redux/authReducer'


class PhoneScreen extends Component
{
       state = {
      phone: '+7',
           value:'',
           disable: false
   }
  static navigationOptions =
  {  
    
     headerStyle: {
  elevation:0
    },
   
  };
   OnSigninPress = () =>
  {
         if(this.state.phone.length === 12) {
          
        this.props.add(this.state.phone)
     this.props.navigation.navigate('Three');
         
             this.timeoutHandle = setTimeout(()=>{
                  this.setState({ disable:  true }) 
         }, 2000);
                console.log(this.state.disable ,'disable')
            
         }
       
   
  }
   handleCode = (text) => {

    this.setState({ phone: text }, function () {
                this.OnSigninPress()
        });
         
     
    
   }
   
  render()
    
  {
     
     return(
        <View style = {styles.phonewrap}>
 
           <Text style = {styles.phonetitle}>Введите номер телефона</Text>

         <Input 
         maxLength={12}
           onChangeText={this.handleCode}
         disabled={this.state.disable}
         keyboardType={'phone-pad'}
         value={this.state.phone}
          inputStyle={{padding: 12, color: '#141212', }}
          inputContainerStyle={{backgroundColor: '#FFE4C7', borderRadius: 50,borderBottomWidth: 0,shadowColor: "#EBC49A",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
}}
 
  leftIcon={{ type: 'font-awesome', name: 'mobile',color: '#203200' }}
/>
       
        {this.state.disable ? <View style = {styles.buttonwrap}>
            <TouchableOpacity
        style = {styles.authbutton}
         onPress={() => this.props.navigation.navigate('Three')}
       >
       <Text style = {styles.buttontext}>Ввести код</Text>
       </TouchableOpacity> 
       
        <TouchableOpacity
        style = {styles.authbutton}
         onPress={() => this.setState({disable:  false})}
       >
       <Text style = {styles.buttontext}>Изменить номер</Text>
       </TouchableOpacity></View>
       : null
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
    
    paddingBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phonetitle: {
   marginBottom: 30,
      color: '#000',
      fontSize: 20,
      fontWeight: '600',
      textTransform: 'uppercase'
  },
    buttonwrap: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
     authbutton: {
          width: 150,
         textAlign: 'center',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
          marginTop: 20,
          height: 44,
      borderRadius: 100,
          letterSpacing: 0.05,
          fontSize: 14,
      padding: 15,
      backgroundColor: '#646F4F'
   },
    buttontext: {
      color: "#fff",
        fontSize: 14,
       
    }, 
    svg: {
      backgroundColor: 'green',
     
        
    },

});

const mapStateToProps = state => {
  return {
    phone: state.phone
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(getPhone(name))
    }
      
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhoneScreen)