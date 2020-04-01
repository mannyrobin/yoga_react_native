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
  Text,
    ActivityIndicator,
    TouchableHighlight,
    ImageBackground,
  TouchableOpacity,
  View,
   Dimensions
} from 'react-native';
import { MonoText, } from '../components/StyledText';
import { SearchBar } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import {getStudios} from '../redux/studioReducer'
import MiniStudio from '../components/MiniStudio'
import {getUserinfo} from '../redux/profileReducer'
import NavBar from '../components/NavBar';
import * as Font from 'expo-font';


class StudiesScreen extends Component {
  static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    search: '',
      like: false,
      tub1: true,
        fontLoaded: false,
      lengthstd: 20,
      loading: false
  };


    async componentDidMount() {
        await Font.loadAsync({
            'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
            'Gilroy-Bold': require('../assets/fonts/gilroy-extrabold.ttf')
        });
    
        this.setState({fontLoaded: true });
    }
   

componentWillReceiveProps(nextProps){
    console.log(nextProps, 'nextProps')
  if(nextProps.phone.phone !==this.props.phone.phone){
   const token = nextProps.phone.phone.token.token
           console.log(token, 'token')
          this.props.getStudio(token) 
    
      this.forceUpdate()
  }
}
  updateSearch = search => {
    this.setState({ search });
  };
 
 OnProfilePress = (id) =>
  {
          this.props.getUserinfo(this.props.phone.phone.token.token)
     this.props.navigation.navigate('Profile');
     
  }
 
  OnMapPress = (id) =>
  {
    
     this.props.navigation.navigate('MapScreen');
     
  }
 likeColor = () => {
       this.setState({ like: true })
     
 }
  moreStudios = () => {
      this.setState({
            lengthstd: this.state.lengthstd + 20,
      
      })
      this.renderStudios()
      
  }
  renderStudios = () => {
    if (this.props.studios.studios !== null) {
           const studiose = this.props.studios.studios.studios
            const nav = this.props.navigation
            
          return studiose.slice(0, this.state.lengthstd ).map(function(item, i){
              
  return     <MiniStudio
              key={item.id}
              name={item.name}
              id={item.id}
                navigation={nav}
              /> 
                
})
       console.log(studios,maped , 'formap')
      } else {
                                           return <View style={styles.preloader}><ActivityIndicator  size="large" color="#646F4F" /></View>
                                           }
      this.setState({ lengthstd: this.Setlengthstd  });

}
    
  render() {
      
      console.log(this.props, 'studiosprops')
      const { search,  } = this.state;
  
      
       return (
   <>
            {this.state.fontLoaded  ? 
  <ImageBackground
        style={styles.containerbg}
        source={require('../assets/images/studio.png')}
        imageStyle={{ resizeMode: 'cover' }}
      >
         
          <View 
 style={styles.header}
>  
     <SearchBar

 inputStyle={{ color: '#000'}}
          inputContainerStyle={{marginLeft: 9,backgroundColor: '#FFF', borderRadius: 50, height: 45 ,width: '100%' ,bottom: 10}}
          containerStyle={{backgroundColor: '#BABF97', borderBottomWidth: 0,borderTopWidth: 0,height: 45 , width: '75%' }}
        placeholder="Я ищу ..."
        onChangeText={this.updateSearch}
       
        value={search}
      />
          <View style={styles.iconheader}>
              <TouchableOpacity onPress={this.OnProfilePress} >
 
        <SvgUri 

width="80" 
height="80" 
source={require('../assets/images/user.svg')}/>
        
          </TouchableOpacity> 
         <TouchableOpacity onPress={this.OnMapPress}  >
         <TabBarIcon  name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}  />
            </TouchableOpacity> 
            
     </View>
     </View>

<Text
style={styles.texttitle}>
Выбери студию йоги</Text>



<ScrollView  
      onScroll={(e)=>{
    var windowHeight = Dimensions.get('window').height,
        height = e.nativeEvent.contentSize.height,
        offset = e.nativeEvent.contentOffset.y;
    if( windowHeight + offset >= height ){
                  this.setState({ loading: true }, function () {
                this.moreStudios()
      
        });
      
   
       
      console.log(this.state.loading    )
    }
}}
        style={styles.container}>
    <View style={styles.container1}>
{this.renderStudios()}
{this.state.loading ? 
<View style={styles.preloaderstd}><ActivityIndicator  size="large" color="#646F4F" /></View> : null
}

</View>

</ScrollView>
             

      
                   </ImageBackground >
: null }
</>
  ); 
  }

}


const mapStateToProps = state => {
  return {
      phone: state.phone,
    studios: state.studios
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStudio: (token) => {
      dispatch(getStudios(token))
    },
      getUserinfo: (token) => {
    dispatch(getUserinfo(token))
    }  
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudiesScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
 textAlign: 'center',
  
      fontFamily: 'Gilroy-Regular',
   
  },
    href: {
        marginTop: 25
      
    },
      containerbg: {
    flex: 1,
 textAlign: 'center',
  fontFamily: 'Gilroy-Regular',
      justifyContent: 'center', 
   
  },
      container1: {
    flex: 1,
 justifyContent: 'space-between',
          paddingBottom: 40,
    
      alignItems: 'center',
   
  },
     preloader: {
         marginTop: 150,
    
  
   
  },
  preloaderstd: {
      marginTop: 40,
  },
      authbutton: {
          width: 200,
         textAlign: 'center',
           display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
          marginTop: 40,
           fontFamily: 'Gilroy-Regular',
          height: 44,
      borderRadius: 100,
          letterSpacing: 0.05,
          fontSize: 14,
            color: "#fff",
      padding: 25,
      backgroundColor: '#646F4F'
   },
    text1: {
      color: "#BABF97",
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
      color: "#fff",
        fontSize: 18,
        textAlign: 'center',
    },
     texttitle: {
         top: 20,
        fontFamily: 'Gilroy-Bold',
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
          fontFamily: 'Gilroy-Regular',
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
    width: '18%',  
       alignItems: 'center',
     right: 16,
      
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
       top: 10,
       width: '60%',
         flexDirection: 'row',
           justifyContent: 'space-between',
    },
       footer: {
        flex: 1,
       top: 20,
           color: 'grey',
       justifyContent: 'space-between',
       flexDirection: 'row',
       fontFamily: 'Gilroy-Regular',
        
    
    },


});
