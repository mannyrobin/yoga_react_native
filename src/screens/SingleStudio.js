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
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import { MonoText, } from '../components/StyledText';
import { SearchBar } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import NavBar from '../components/NavBar';
import {  AirbnbRating } from 'react-native-ratings';


class SingleStudio  extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    search: '',
      tub1: true
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
renderReviews = () => {
    if (this.props.review !== null ) {
        return  <View style={styles.singlerewiev}> 
                         <View style={styles.imagerewiev}> 
                            <Image
                              style={{width: 40, height: 40, borderRadius: 100}}
                              source={require('../assets/images/Profile.png')}
                            />    
                             
                        </View>
                        <View style={styles.inforeview}> 
                            <Text style = {styles.reviewh2}>Владислав Вонсович</Text> 
                            <AirbnbRating
                                  showRating={false}
                                  count={5}
                                  isDisabled={true} 
                                  defaultRating={this.props.review.info.data.rating}
                                  selectedColor="#646F4F"
                                  size={12}
                                  starContainerStyle={{marginRight: 200}}


                            />
                            <Text style = {styles.reviewtext}>{this.props.review.info.data.text}</Text> 
                        </View>
                    </View>
                   
    }
}
  render() {
      const { search } = this.state;
      console.log(this.props  , 'singlestudioprops')
       return (
            <View style={styles.container}>
           <ScrollView  style={styles.containerscrl}>
             <View
          style={{
            height: 300,
            
       
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
                 <View style={styles.contactinfowrap}>  
     <Text  style={styles.texttitle2}>Контактная информация </Text>
                
    <View style={styles.contactinfo}>  
        <View style={styles.image}>
            <Image
          style={{width: 80, height: 90}}
          source={require('../assets/images/s1.png')}
        />
        </View>
                 <View style={styles.rightcmpscontact}>    
               <Text  style={styles.texttitle2}>Elite Fitness</Text>
                        <View style={styles.infocmps}> 
                                 <View style={styles.infoicon}>
  <Icon5
          name='home'
          size = {20}
          color='#0B1100' />
          </View>
<TouchableOpacity style={styles.infotouch} onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query='+this.props.singleStudios.singleStudios.data.address )}>
                            <Text style={styles.infotext}> {this.props.singleStudios !== null ? this.props.singleStudios.singleStudios.data.address : null} </Text>

</TouchableOpacity>
      
                </View>
                   <View style={styles.infocmps}> 
                            <View style={styles.infoicon}>
  <Icon
          name='mobile'
          size = {20}
           color='#0B1100' />
                 </View>
<TouchableOpacity style={styles.infotouch} onPress={()=>{Linking.openURL('tel:8005662216');}}>
                            <Text style={styles.infotext}> (800) 566-22-16 </Text>

</TouchableOpacity>
      
                </View>
                   <View style={styles.infocmps}> 
                       <View style={styles.infoicon}>
                <SvgUri 

width="20" 
height="20" 
source={require('../assets/images/inter.svg')}/>
          </View>
        <TouchableOpacity style={styles.infotouch} onPress={()=>{Linking.openURL(this.props.singleStudios.singleStudios.data.website);}}>
                            <Text style={styles.infotext}> {this.props.singleStudios !== null ? this.props.singleStudios.singleStudios.data.website : null}</Text>

</TouchableOpacity>
      
                </View>
                   <View style={styles.infocmps}>
                            <View style={styles.infoicon}>
               <Icon
          name='instagram'
         size = {20}
        color='#0B1100' />
              </View>
<TouchableOpacity style={styles.infotouch} onPress={()=>{Linking.openURL(this.props.singleStudios.singleStudios.data.instagram );}}>
              <Text style={styles.infotext}> {this.props.singleStudios !== null ? this.props.singleStudios.singleStudios.data.instagram : null}</Text>

</TouchableOpacity>
      
                </View>
                </View>
                </View>
                </View>
             
                 </View>
       <View style={styles.mapimage}>
                      <Image
          style={{width: '100%'}}
          source={require('../assets/images/mapstudio.png')}
        />
                  
                  <View style={styles.starwrapper}>  
                  <View style={styles.starinfo}>  
                         <Text  style={styles.texttitle2}>Оценка и отзыв</Text>
                         <Text  style={styles.textcontentstar}>
                             Поделитесь своими впечатлениями
                         </Text> 
    <AirbnbRating
            showRating={false}
              count={5}
              isDisabled={true} 
              defaultRating={3}
              selectedColor="#646F4F"
              size={40}
             
            />
                        <TouchableOpacity
                            style = {styles.authbutton}
                             onPress={() => this.props.navigation.navigate('ReviewScreen', {id:this.props.singleStudios.singleStudios.data.id})}
                        >
                                 <Text style = {styles.buttontext}>Написать отзыв</Text>
                        </TouchableOpacity>
                      </View>  

                  </View>

                    <View style={styles.rewievinfo}> 
                    <View style={styles.flextext}> 
                            <Text  style={styles.texttitle3}>
                            Отзывы
                         </Text> 
<Text  style={styles.hreftext}>
                            Просмотреть все отзывы
                         </Text> 
                    </View>
                    <>
                                {this.props.review  !== null && this.props.review.info.data.author_id  ? this.renderReviews() : <Text>Еще нет отзывов </Text>}
                    </>
                   
                    </View>
                    </View>
                 </View>
         
</ScrollView>
 
      
                  </View>
  ); 
  }

}


const mapStateToProps = state => {
  return {
    singleStudios: state.studios.singleStudios,
   review: state.review.review
  }
}

const mapDispatchToProps = dispatch => {
  return {
  
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleStudio)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EA',

  }, 
    infotouch: {
             width: '70%'                    
    },
    containerscrl: {
    flex: 1,
    backgroundColor: '#FFF5EA',
  
  },
    reviewtext: {
        top: 10,
        width: '85%',
        fontSize: 11
    },
    inforeview: {
        textAlign: 'left',
    },
  
     reviewh2: {
         bottom: 10,
           fontSize: 14,
        fontWeight: '600',  
    },
    imagerewiev: {
      marginRight: 20,  
    },
    singlerewiev: {
         backgroundColor: '#fff',
        paddingBottom: 50,
        width: '90%',
         padding: 20,
        paddingTop: 0,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    flextext: {
        width: '90%',
        padding: 20,
         paddingBottom: 5,
         flexDirection: 'row',
        justifyContent: 'space-between',
         alignItems: 'center',
          paddingBottom: 50,
          backgroundColor: '#fff'
    },
    hreftext: {
        color: '#646F4F',
         fontSize: 10  ,
    },
    wrapper: {
       alignItems: 'center',
         flex: 1,
        top: -70,
      
       
    }, 
    starwrapper: {
           alignItems: 'center',
         flex: 1,
    },
    infoicon: {
      width: '15%',
           alignItems: 'center',
    justifyContent: 'center',
    },
    infotext: {
       
      fontSize: 10  ,
        marginLeft: 15
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
    textcontentstar: {
     color: "#000",
         lineHeight: 18,
        fontSize: 12,
        marginBottom: 15,
        textAlign: 'left',
},
     textcontent: {
      color: "#000",
         lineHeight: 18,
        fontSize: 10,
        textAlign: 'left',
    },
    texttitle2: {
        bottom: 15,
      color: "#000",
        fontSize: 16,
        fontWeight: '600',
       
    }, 
        texttitle3: {
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
      flex: 1,
        padding: 20,
        flexDirection: 'row',
        zIndex: 50,
       top: -50,
         borderRadius: 20,
        width: '100%',
       backgroundColor: '#fff',
        justifyContent: 'space-between',
        shadowColor: "#8d7b67",
   
shadowOffset: {
	
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
    },
    headerstudiowrap: {
       bottom: 10,
         
         alignItems: 'center',
        justifyContent: 'space-between',
    flexDirection: 'row',
        
    },
     iconstar: {
    
       width: '30%',
         flexDirection: 'row',
           justifyContent: 'space-between',
    },
    starwrap: {
       top: 25,
       width: '100%',
        paddingBottom: 20,
         flexDirection: 'row',
           justifyContent: 'space-between',
         alignItems: 'center',
    },
      contenttext: {
         zIndex: 0,
        display: 'flex',
          flex: 1,
          lineHeight: 18,
          width: '90%',
          padding: 20,
           paddingTop: 60,
          backgroundColor: '#fff'
      },
    starinfo: {
           zIndex: 0,
        display: 'flex',
          flex: 1,
          lineHeight: 18,
          width: '90%',
          padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
           paddingTop: 60,
          paddingBottom: 50,
          backgroundColor: '#fff'
    },
        rewievinfo: {
            
           zIndex: 0,
        display: 'flex',
          flex: 1,
          lineHeight: 18,
          width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    contactinfowrap: {
      top: 30  ,
        paddingBottom: 50
    },
contactinfo: {
        
     flexDirection: 'row',
           justifyContent: 'space-between',
         alignItems: 'center',
},
    infocmps: {
        marginBottom: 10,
         flexDirection: 'row',
           justifyContent: 'flex-start',
         alignItems: 'center',
    },
rightcmpscontact: {
    top: 20,
  paddingLeft: 3 
},
    mapimage: {
      width: '100%',
    borderRadius: 25 ,
   
       
    },
    
        authbutton: {
          width: 180,
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
});
