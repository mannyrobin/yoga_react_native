import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import TabBarIcon from '../components/TabBarIcon';
import {getSingleStudios} from '../redux/studioReducer'
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
import { SearchBar } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import {getStudios} from '../redux/studioReducer'
import {getReview} from '../redux/ReviewReducer'


class MiniStudio extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    search: '',
      like: false,
  };


 
 OnStudioPress = () =>
  {
     this.props.getSingleStudio(this.props.phone.phone.token.token, this.props.id)
     this.props.getReview(this.props.phone.phone.token.token, this.props.id)
     this.props.navigation.navigate('Five');
     
  }
 likeColor = () => {
      if (this.state.like === false) {
           this.setState({ like: true })
      } else {
          this.setState({ like: false })
      }
     
 }
 
  render() {
//      console.log(this.props, 'studiomini')
      const { search,  } = this.state;
  
      
       return (
   <TouchableOpacity  activeOpacity={0.7} style={styles.wrapstudio} onPress={this.OnStudioPress}> 
         <View style={styles.image} >
    
    <Image
          style={{width: 100, height: 100}}
          source={require('../assets/images/title.png')}
        />
          </View>
                  
        <View  style={styles.rightcmps}> 
                                        <View style={styles.headerstudiowrap}> 
                <Text
style={styles.textstudio}>
    {this.props.name}</Text>
            
        </View>   

   <Text> 
        Расстояние от вас - 2.0км
        </Text>  


<View style={styles.footer}> 
              <View style={styles.iconstar}> 
      <Icon
          name='star'
          size = {15}
          color='#646F4F' />
               <Icon
          name='star'
          size = {15}
          color='#646F4F' />
               <Icon
          name='star'
          size = {15}
          color='#646F4F' />
               <Icon
          name='star'
          size = {15}
          color='#646F4F' />
               <Icon
          name='star'
          size = {15}
          color='#646F4F' />
        </View> 
               {this.state.like ?   <Icon
          name='heart'
      onPress={this.likeColor}
          size = {20}
          color='red' /> : <Icon5
          name='heart'
      onPress={this.likeColor}
          size = {20}
          color='red' /> }
              </View>
              </View>
       

            </TouchableOpacity>
  ); 
  }

}



const mapStateToProps = state => {
  return {
      phone: state.phone,
      review: state.review,
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleStudio: (token,id) => {
      dispatch(getSingleStudios(token, id))
    } ,
      getReview: (token,id) => {
      dispatch(getReview(token, id))
    }
      
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MiniStudio)



const styles = StyleSheet.create({
  container: {
    flex: 1,
 textAlign: 'center'
    
      
   
  },
      container1: {
    flex: 1,
 justifyContent: 'center',
          
    
      alignItems: 'center',
   
  },
      authbutton: {
          width: 200,
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
    text: {
      color: "#fff",
        fontSize: 18,
        textAlign: 'center',
    },
     texttitle: {
         top: 20,
      
         fontWeight: '600',
         fontSize: 18,
      color: "#fff",
        textAlign: 'center',
    },
      textstudio: {
         width: '100%',
         fontWeight: '600',
      color: "#000",
        fontSize: 15,
        textAlign: 'left',
    },
      buttontext: {
      color: "#fff",
        fontSize: 14,
       
    },
    image: {
     
        flex: 0.3,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
         rightcmps: {
       flex: 0.7,
            paddingLeft: 15,
            paddingTop : 15,
         width: '100%',
        
    },
    header: {
        flex: 0.15,
       top: 20,
       width: '90%',
        flexDirection: 'row',
         alignItems: 'center',
      
       backgroundColor: 'transparent'
        
    
    },
  iconheader: {
    width: '20%',  
       alignItems: 'center',
     right: 20,
      
      flexDirection: 'row',
  },
    wrapstudio: {
      flex: 0.4,
     
        marginBottom: 20,
        padding: 20,
        paddingBottom: 20,
    flexDirection: 'row',
        top: 40,
         borderRadius: 20,
        width: '90%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    headerstudiowrap: {
       bottom: 10,
         alignItems: 'center',
        justifyContent: 'space-between',
    flexDirection: 'row',
    },
     iconstar: {
       width: '60%',
         flexDirection: 'row',
           justifyContent: 'space-between',
    },
       footer: {
        flex: 1,
       top: 20,
           paddingBottom: 20,   
           color: 'grey',
            justifyContent: 'space-between',
             alignItems: 'center',
       flexDirection: 'row',
      
        
    
    },


});
