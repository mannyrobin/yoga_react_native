import React , {Component} from 'react';

import Carousel from 'react-native-snap-carousel';
import {
StyleSheet,
  Text,

  View,
} from 'react-native';
import MiniStudio from './MiniStudio'
import { connect } from 'react-redux';


 class MyCarousel extends Component {

    _renderItem = ({item, index}) => {
        if (this.props.navigation !== undefined) {
             const nav = this.props.navigation
        return (
            
            <View style={styles.item}>
 <MiniStudio
              key={item.id}
              name={item.name}
              id={item.id}
                 navigation={nav}
              /> 
            </View> 
        );
            } else {
                                           return <View style={styles.preloader}><ActivityIndicator  size="large" color="#646F4F" /></View>
                                           }
    }
  
     
    render () {
       const ENTRIES1 = this.props.studios.studios !== null ? this.props.studios.studios.studios.slice(0, 5) : ''
    
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={ENTRIES1}
              renderItem={this._renderItem}
              sliderWidth={350}
sliderHeight={100}
              itemWidth={350}
            />
        );
    }
}
const styles = StyleSheet.create({
 item:{
     width: '100%',
     paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
},
    preloader: {
        top: 150,
         paddingTop: 150,
    flex: 1,
        position: 'absolute',
        backgroundColor: '#fff'
  
   
  },
})
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
export default connect(mapStateToProps, mapDispatchToProps)(MyCarousel)