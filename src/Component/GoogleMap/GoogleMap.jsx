import React from 'react'
import { GoogleMap, useJsApiLoader ,Marker, Autocomplete } from '@react-google-maps/api';
import InputPlace from '../inputPlace/InputPlace';

const containerStyle = {
  width: '100%',
  height: '10em'
};
const center = {
    lat: 28.6588928,
    lng: 77.266944
  };

function GoogleMaps() {
      
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDzgvwYozkab8Gi4T_u9HxSU22yMWiPQ2w",
    libraries:['places']
  })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
      <div>
          <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
            zoomControl:false,
            streetViewControl:false,
            mapTypeControl:false
        }}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
      <Marker position={center}/>
      </GoogleMap>
      {/* <Autocomplete>
       <InputPlace placeHolder={Location}/>
      </Autocomplete> */}
     
      </div>
  ) : <></>
}

export default React.memo(GoogleMaps)