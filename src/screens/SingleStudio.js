import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import { connect } from 'react-redux';
import { MonoText, } from '../components/StyledText';
import { SearchBar } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import Icon5 from 'react-native-vector-icons/FontAwesome5';


class SingleStudio  extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    search: '',
  };

 renderStudioinfo = () => {
     if (this.props.singleStudios !== null) {
         return      <Text
style={styles.textstudio}>
    {this.props.singleStudios.singleStudios.data.name}</Text>
     }
 }
 likeColor = () => {
      if (this.state.like === false) {
           this.setState({ like: true })
      } else {
          this.setState({ like: false })
      }
     
 }
  render() {
      const { search } = this.state;
      console.log(this.props.singleStudios  , 'singlestudioprops')
       return (
           <ScrollView  style={styles.containerscrl}>
             <View
          style={{
            height: '40%',
            
       
            justifyContent: 'center',
          }}>
           <ImageBackground
        style={styles.container}
        source={require('../assets/images/single1.png')}
        imageStyle={{ resizeMode: 'cover' }}
      >
          <View style={styles.arrowleft}> 
             <Icon
 onPress={() => this.props.navigation.navigate('Four')}
          name='chevron-left'
          size = {20}
color='#646F4F'
         />
          </View>
        
         
          </ImageBackground>
        </View>
               <View  style={styles.wrapstudio} > 
                  
        <View  style={styles.rightcmps}> 
            
             <View style={styles.headerstudiowrap}> 
                                            
                <Text style={styles.othertext}
>
Фитнес-клуб</Text>
  <Text
>

      {this.state.like ?   <Icon
          name='heart'
      onPress={this.likeColor}
          size = {20}
          color='#646F4F' /> : <Icon5
          name='heart'
      onPress={this.likeColor}
          size = {20}
          color='#646F4F' /> }
</Text>
            
        </View>   
                                        <View style={styles.headerstudiowrap}> 
                                            
           
{this.renderStudioinfo()}
            
        </View>   

   <Text style={styles.othertext}> 
        Время работы: 9:00-22:00
        </Text> 
<Text style={styles.othertextday}> 
       Дни рабочие: Пн-Сб 
        </Text>  
  <View style={styles.starwrap}> 
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
              
        </View> 


              </View>
    
            
            </View>
<View  style={styles.wrapper}> 

    <View  style={styles.contenttext}> 
                 <Text  style={styles.texttitle2}>Описание </Text>
                 <Text  style={styles.textcontent}>Фитнес-клуб — место, сочетающее в себе спортивный зал, тренажерный зал, бассейн (не во всех фитнес-клубах), кардио-зону, залы аэробики, студии сайкла, студии пилатесана большом оборудовании, студии единоборств, студии йоги, групповые 
и танцевальные программы, а также аквааэробика. </Text> 
                 
                 </View>
                 </View>
         
</ScrollView>
  ); 
  }

}


const mapStateToProps = state => {
  return {
    singleStudios: state.studios.singleStudios,
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStudio: (token) => {
      dispatch(getSingleStudios(token))
    }
      
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleStudio)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EA',

  }, 
    containerscrl: {
    flex: 1,
  
    backgroundColor: '#FFF5EA',
  
  },
    wrapper: {
       alignItems: 'center',
        top: -20,
    }, 
    arrowleft: {
       top: 30,
        left: 20,
    },
      authbutton: {
          width: 143,
         textAlign: 'center',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
            
          height: 24,
      borderRadius: 100,
          letterSpacing: 0.05,
          fontSize: 10,
            color: "#fff",
      backgroundColor: '#646F4F'
   },
    text: {
      color: "#000",
        fontSize: 8,
        textAlign: 'center',
    },  
     textcontent: {
      color: "#000",
        fontSize: 12,
        textAlign: 'left',
    },
    texttitle2: {
        bottom: 15,
      color: "#000",
        fontSize: 16,
        fontWeight: '600',
       
    }, 
    othertext: {
      color: "#424141",
        opacity: 0.8,
        fontSize: 12,
       
    }, 
    othertextday: {
        top: 13,
       
      color: "#424141",
        opacity: 0.8,
        fontSize: 12,
       
    },
     texttitle: {
         
         
         fontWeight: '600',
         fontSize: 18,
      color: "#fff",
        fontSize: 18,
        textAlign: 'center',
    },
      textstudio: {
         
         fontWeight: '600',
         fontSize: 25,
      color: "#000",
        textAlign: 'left',
    },
    pricetext: {
         
         fontSize: 16,
      color: "#000",
        textAlign: 'center',
    },
      buttontext: {
      color: "#fff",
        fontSize: 10,
       
    },
  
         rightcmps: {
       flex: 1,
          
            paddingTop : 15,
         width: '100%',
        
    },
 
    wrapstudio: {
      flex: 0.8,
        padding: 20,
        flexDirection: 'row',
        zIndex: 50,
       top: -50,
         borderRadius: 20,
        width: '100%',
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
    paddingBottom: 20,
       width: '30%',
         flexDirection: 'row',
           justifyContent: 'space-between',
    },
    starwrap: {
       top: 25,
       width: '100%',
         flexDirection: 'row',
           justifyContent: 'space-between',
         alignItems: 'center',
    },
      contenttext: {
          top: 20,
        display: 'flex',
          height: 700,
          lineHeight: 18,
          width: '90%',
          padding: 25,
          backgroundColor: '#fff'
      }


});
