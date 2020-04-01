import React, { Component } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  Image,
  Text,
} from 'react-native';



class Slider extends Component {

  
 CustomMarkerLeft  = () =>{

    return (<>
      <Image
         style={{height: 18, width: 18, marginTop: 11}}
        source={
          require('../assets/images/elipce1.png') 
        }
        resizeMode="contain"
      />
            <Text>{this.props.value[0]} {this.props.sufix ? 'м' : 'руб'}</Text>
</>
    );
  }
CustomMarkerRight  = () =>{

    return (<>
      <Image
        style={{height: 18, width: 18, marginTop: 11}}
        source={
          require('../assets/images/elipce1.png') 
        }
        resizeMode="contain"
      />
            <Text>{this.props.value[1]}{this.props.sufix ? 'м' : 'руб'}</Text>
</>
    );
  }
 

  render() {
   
  
  
      
       return (
               
                <MultiSlider
                    values={[
                        this.props.value[0],
                        this.props.value[1],
                    ]}
                    trackStyle={{
                        backgroundColor: '#646F4F',
                        height: 4,
           marginBottom: 5
                    }}      
                   markerContainerStyle={{
                        marginTop: 7,
           width: 60
              
           }}     
                    sliderLength={280}
                    onValuesChange={this.props.nonCollidingMultiSliderValuesChange}
                    min={0}
                    max={this.props.value[1]}
                    step={1}
                    allowOverlap={false}
                    snapped
                    minMarkerOverlapDistance={40}
                   isMarkersSeparated={true}
                  customMarkerLeft={this.CustomMarkerLeft}
                  customMarkerRight={this.CustomMarkerRight}
                />
            
  ); 
  }

}


export default Slider
