import React from 'react';
import useGeoLocation from './Component/Location/useGeoLocation';
import GoogleMaps from './Component/GoogleMap/GoogleMap';
import TapButton from './Component/TapButton/TapButton';

function Homepage() {
  const location = useGeoLocation();
  


//  function handleSubmit(e) {
//     e.preventDefault();

//       const registered ={
//         hospitalname:"KAILASH",
//         contactno:"9899820997",
//         pincode:"201301"
//       }

//       axios.post("http://localhost:3000/addHospital",registered).then(alert("Done"));     
//   }


  return (
    <div>

      {
        location.loaded ?
          <div>
            <GoogleMaps lat={location.coordinates.lat} long={location.coordinates.lng}
            />
          </div>
          : "MODULE BROKEN"
      }
      <TapButton pincode="201301" />

    </div>
  )
}

export default Homepage