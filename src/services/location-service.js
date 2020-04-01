  
import Geocoder from 'react-native-geocoding';

export const getLocation = () => {
    return new Promise(
        (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (data) => resolve(data.coords),
                (err) => reject(err)
            );
        }
    );
}

export const geocodeLocationByName = (locationName) => {
   let newArray = locationName.split(",");  
    let place = newArray.join(' + ')
    
        
            Geocoder.init("AIzaSyDAGUcqraur-2QZzMJsmcPJdpbzIICkVJo");
           
            Geocoder.from(place)
                .then(json => {
                    const addressComponent = json.results[0].geometry.location;
                   this.setState({
                endPlaces: addressComponent
                   })
                console.log(addressComponent , 'hello')
                })
                .catch(error => error);
    
}

export const geocodeLocationByCoords = (lat, long) => {
    return new Promise(
        (resolve, reject) => {
            Geocoder.from(lat, long)
                .then(json => {
                    const addressComponent = json.results[0].address_components[0];
                    resolve(addressComponent);
                })
                .catch(error => reject(error));
        }
    );
}