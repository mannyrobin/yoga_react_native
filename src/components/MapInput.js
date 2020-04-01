  
  
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


class MapInput extends React.Component {

    render() {
        return (
<>
            <GooglePlacesAutocomplete
            leftIcon={{ type: 'font-awesome', name: 'mobile',color: '#203200' }}
                placeholder='Search'
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'} 
               listViewDisplayed='auto' 
                fetchDetails={true}
                onPress={(data, details = null) => { 
                    this.props.notifyChange(details.geometry.location);
                  }
                }
                query={{
                    key: 'AIzaSyDAGUcqraur-2QZzMJsmcPJdpbzIICkVJo',
                    language: 'ru'
                }}
                styles={{
                        container: {
                          
                       },
                        textInputContainer: {
                            backgroundColor: 'transparent'   ,
                            
                 
       
                        },
                        description: {
                          fontWeight: 'bold'
                                    },
                        textInput: {
                                shadowColor: "#EBC49A",
                                shadowOffset: {
                                    width: 0,
                                    height: 7,
                                },
                                shadowOpacity: 0.43,
                                shadowRadius: 9.51,

                                elevation: 15,
                                borderRadius: 50,
                                height: 38,
                                color: '#5d5d5d',
                                fontSize: 16
                            },
                            listView: {
                                position: 'absolute',
                                    top: 70,
                                  backgroundColor: '#fff' ,
                                    color: '#000',

                            },
                            predefinedPlacesDescription: {
                              color: '#000',

                            }
      }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={200}
            />
                
          </>  
        );
    }
}
export default MapInput;