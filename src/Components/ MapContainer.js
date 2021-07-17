import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapContainer()  {
  
  const mapStyles = {        
    height: "50vh",
    width: "50%"};
  
  const defaultCenter = {
    lat: 56.96630, lng: 23.744458
  }
  
  return (
     <LoadScript
       googleMapsApiKey=''>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;