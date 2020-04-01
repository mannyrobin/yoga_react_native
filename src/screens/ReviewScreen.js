import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavBar from '../components/NavBar';
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
import {  AirbnbRating } from 'react-native-ratings';
import { connect } from 'react-redux';
import {addReview} from '../redux/ReviewReducer'
class ReviewScreen extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
tub3: true,
       fontLoaded: false,
      text: '',
      ratingStar: '',
      textArea: ''
  };

 
    async componentDidMount() {
        await Font.loadAsync({
            'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
            'Gilroy-Bold': require('../assets/fonts/gilroy-extrabold.ttf')
        });
    
        this.setState({fontLoaded: true });
    }
      ratingCompleted = (rating) => {
  this.setState({ ratingStar: rating });
         
}
handleArea = (text) => {
    
     this.setState({ textArea: text });
     
    
   }
        OnReviewPress = () => {
                this.props.addReview(this.props.phone.phone.token.token, this.state.ratingStar,this.state.textArea,this.props.navigation.state.params.id)
            this.props.navigation.navigate('Five')
        }
  
  render() {
    console.log(this.props , 'addreviewprops')
      const { search,  } = this.state;
  
      
       return (
            <> 
                {this.state.fontLoaded  ? 


     <View style={styles.container1}>
           <View style={styles.header}> 
              <View style={styles.arrowleft}>
                 <Icon
                    onPress={() => this.props.navigation.navigate('Five')}
                    name='chevron-left'
                    size = {20}
                    color='#fff'
                />
            <Text style={styles.textheader}>Elite Fitness</Text>
             <TouchableOpacity
                            style = {styles.href}
                            onPress={this.OnReviewPress}
                        >
                                 <Text style = {styles.text}>Опубликовать</Text>
            </TouchableOpacity>
            </View>
       </View>
 
           <View style={styles.infowrap}> 
               
             
               <View style={styles.inforeview}> 
                         <View style={styles.profileImage}>
                                
                   <Image
          style={{width: 40, height: 40, borderRadius: 100}}
          source={require('../assets/images/Profile.png')}
        />              
                                
                                
           </View>
                        <View style={styles.profileinfo}>
                            <Text style = {styles.reviewh2}>Владислав Вонсович</Text>
                            <Text style = {styles.textblack}>Публикуется для всех</Text>
                                  
                                
                                
           </View>
              </View>
                <View style={styles.rewievstar}>
                                
                                    <AirbnbRating
            showRating={false}
              count={5}
              defaultRating={0}
              selectedColor="#646F4F"
              size={40}
            onFinishRating={this.ratingCompleted}
             value={this.state.ratingStar}
            />
                                </View>
 <View style={styles.textAreaContainer} >
  <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
     placeholder='Поделитесь своими впечатлениями...'
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
 onChangeText={this.handleArea}
 value={this.state.textArea}
    />
      </View>
              </View>

              
              </View>
                 
        
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
      addReview: (token,rating,text,id) => {
      dispatch(addReview(token,rating,text,id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)( ReviewScreen)



const styles = StyleSheet.create({
  container: {
 paddingTop: 10,
  fontFamily: 'Gilroy-Regular',
 textAlign: 'center',
       flex: 1,
    
     
   
  },
      textAreaContainer: {
    padding: 5
  },
    textArea: {
        backgroundColor: '#FFF5EA',
        marginTop: 20,
        height: 150,
    padding: 20,
        borderRadius: 10,
        textAlignVertical: 'top'
    },
    href: {
     left: 80,
        justifyContent: 'flex-end',
         
    },
    inforeview: {
   
        flexDirection: 'row',
    marginBottom: 15,
        justifyContent: 'flex-start',
    },
    profileImage: {
       
        marginRight: 15,
    },

    textheader: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '600',
        paddingLeft: 15
    } ,
  
      container1: { 
 paddingBottom: 65,     
       flex: 1,
  justifyContent: 'space-between',
     
   
  },
 textblack: {
     color: "#000",
      fontSize: 13,
      textAlign: 'left',
        lineHeight: 22,
 },
    text: {
        
      color: "#fff",
      
        textTransform: 'uppercase',
        fontSize: 13,
        lineHeight: 22,
      marginLeft: 11
        
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
            shadowColor: "#8d7b67",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
        flex: 0.15,
       paddingTop: 10,
       width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
       fontFamily: 'Gilroy-Regular',
        flexDirection: 'row',
        justifyContent: 'space-between',
         alignItems: 'center',
       backgroundColor: '#BABF97',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        
    
    },

    
    prosfileh2: {
      paddingTop: 20,
           fontSize: 17,
        fontWeight: '600',  
    }, 
    reviewh2: {
           fontSize: 17,
        fontWeight: '600',  
    },
    infowrap: {
      fontFamily: 'Gilroy-Regular',
        top: -50,
       padding: 20,
        bottom: 20,
        flex: 0.7,
        width: '100%',
      
       
        textAlign: 'left',
        justifyContent: 'flex-start',
    },




inputwrap: {
    width: '100%',
    paddingBottom: 15,
     marginTop: 10 ,
      alignItems: 'flex-start',
},
wrapsave: {
    marginTop: 18,
      flex: 0.2,
    fontFamily: 'Gilroy-Regular',
       top: 20,
    bottom: 20,
       width: '100%',
        flexDirection: 'row',
         alignItems: 'center',
       backgroundColor: 'transparent'
},
   
});
