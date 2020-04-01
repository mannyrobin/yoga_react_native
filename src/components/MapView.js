import React from 'react';
import MapView,{ Marker, Circle } from 'react-native-maps';
import SvgUri from 'react-native-svg-uri';


const MyMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            >
               <Circle
                key = {1}
                center = { props.region }
                radius = {props.radius[1] }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }
               
        />
            <Marker coordinate={props.region} > 
       
          <SvgUri 

width="40" 
height="40" 
source={require('../assets/images/mapicon.svg')}/>
        
        </Marker>
{props.radius[1] !== 0 ? props.markers :  props.arrPlaces}
        </MapView>
    )
}
export default MyMapView;