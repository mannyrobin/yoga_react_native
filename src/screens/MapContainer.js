import React from 'react';
import { View,StyleSheet, Text , ActivityIndicator,TouchableOpacity} from 'react-native';
import MapInput from '../components/MapInput';
import MyMapView from '../components/MapView';
import { getLocation } from '../services/location-service';
import  Callout from 'react-native-maps';
import MyCarousel from "../components/CarouselStudio";
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import Geocoder from 'react-native-geocoding';
import { Marker } from 'react-native-maps';
import geolib from 'geolib'
import { getDistance } from 'geolib';

class MapContainer extends React.Component {
      static navigationOptions =
  {
      headerStyle: {
     display: 'none',
    },
  };
  state = {
    region: {},
      intAdress: [] ,
      places: [],
      endPlaces: [],
      markers: [],
  };

  componentDidMount() {
    this.getInitialState();
    this.getCoordsFromNameAll(  )
  
  }
    componentWillReceiveProps(newProps) {
      
             if (this.props.navigation.state.params !== newProps.navigation.state.params) {
                 
     this.getLocations(newProps.navigation.state.params.radius[1],newProps.navigation.state.params.price)
 } 
    }
geocodeLocationByName (locationName)     {
       let newArray = locationName.split(",");  
    let place = newArray.join(' + ')
      Geocoder.init("AIzaSyDAGUcqraur-2QZzMJsmcPJdpbzIICkVJo");
           
            Geocoder.from(locationName)
                .then(json => {
                    const addressComponent = json.results[0].geometry.location;
                   
                    this.state.endPlaces.push(
                            <Marker
                                key={addressComponent.lat}
                               coordinate={{
                                
                                latitude: addressComponent.lat,
                                longitude: addressComponent.lng
                       }}>
                            <SvgUri 

                                width="40" 
                                height="40" 
                                source={require('../assets/images/mapicon.svg')}/>
        
                                </Marker>
                   
                   )
       
            this.forceUpdate()
    
                })
                .catch(error => error);
    
}

  getInitialState() {
    getLocation().then(data => {
      this.updateState({
        latitude: data.latitude,
        longitude: data.longitude,
      });
    });
       
  }

  updateState(location) {
   
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });

  }
getLocations(radius,price   ) {
  let { region } = this.state;
  let { latitude, longitude } = region;
 

    let markers = this.state.endPlaces.map(feature =>  {
      let coords = feature.props.coordinate
       
      return {
        coordinate: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        }
      }
    }).filter(marker => {
      
       console.log(radius, 'rd')
      let distance = this.calculateDistance(latitude, longitude, marker.coordinate.latitude, marker.coordinate.longitude);
        
      return distance <=  radius ;
         
    });
  markers.map(item => {
    return    this.state.markers.push(
        <Marker
                                key={item.coordinate.longitude}
                               coordinate={{
                                
                                latitude: item.coordinate.latitude,
                                longitude: item.coordinate.longitude
                       }}>
                            <SvgUri 

                                width="40" 
                                height="40" 
                                source={require('../assets/images/mapicon.svg')}/>
        
                                </Marker>
                   
                   )
  })
       
}

// this function uses geolib to calculate the distance between the points
calculateDistance(origLat, origLon, markerLat, markerLon) {
    console.log(origLat, origLon, markerLat, markerLon, 'distance')
  return  getDistance(
    {latitude: origLat, longitude: origLon},
    {latitude: markerLat, longitude: markerLon}
  );
}
  getCoordsFromName(loc) {
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng,
    });
  }
  
  getCoordsPlaces(intAdress ) {
  
      intAdress.slice(0, 20).map(item => {
              
  return   this.geocodeLocationByName(item)
      
  })        
      
  } 
getCoordsFromNameAll() {
    let intAdress = this.props.studios.studios.studios.map(function(item, i){
              
  return    item.address
  })       
    this.getCoordsPlaces(intAdress) 
    
  
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }
OnClosePress = () => {
  this.props.navigation.navigate('SortScreen',{getLocations:this.getLocations});
}
  render() {
    
    return (
      <View style={{ flex: 1 }}>
  <View style={styles.maphead}> 
        <View style={styles.wrapmap} > 
          <MapInput notifyChange={loc => this.getCoordsFromName(loc)} />
</View>
      <TouchableOpacity style={styles.crest} onPress={this.OnClosePress} >
                        <SvgUri 

                                width="18" 
                                height="18" 
                                source={require('../assets/images/crest.svg')}
                        />
                  </TouchableOpacity> 
                                       
                                          </View>

        {this.state.region['latitude'] ? (
          <View style={styles.inputmap}>
            <MyMapView
            markers={this.state.markers}
                radius={this.props.navigation.state.params !== undefined ? this.props.navigation.state.params.radius : [0,0]}
              region={this.state.region}
            arrPlaces={this.state.endPlaces}
              onRegionChange={reg => this.onMapRegionChange(reg)}
            />
    
    <View style={styles.calloutView} >
      <MyCarousel 
        navigation={this.props.navigation}
        />
            
    </View>

          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  calloutView:{
      width: '100%',
        position: 'absolute',
      bottom: 25,
      textAlign: 'center',
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
},
    inputmap: {
        marginTop: -20,
        flex: 0.85
    } ,
    crest: {
        width: 38,
        height: 38,
        borderRadius: 100,
        marginTop: 10,
         backgroundColor: '#646F4F',
         justifyContent: 'center',
      alignItems: 'center',
    },
    maphead: {
        paddingTop: 18,
        paddingLeft: 18,
        paddingRight: 20,
         flex: 0.14,
    zIndex: 200,
    backgroundColor: '#BABF97'  ,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
     justifyContent: 'space-between',
    },
    wrapmap: {
        width: '83%'
    }
})
const mapStateToProps = state => {
  return {
    studios: state.studios
  }
}

const mapDispatchToProps = dispatch => {
  return {
 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
