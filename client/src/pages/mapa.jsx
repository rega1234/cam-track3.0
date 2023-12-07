import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useParams } from 'react-router-dom';

const MapWithMarker = (props) => {
  // Obtén los parámetros de la URL
  const { lat, lon } = useParams();

  // Convierte los valores de cadena a números
  const latitude = parseFloat(lat);
  const longitude = parseFloat(lon);

  return (
    <div>
      <h1>Mi Aplicación con Mapa</h1>
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{
          lat: latitude,
          lng: longitude,
        }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIPsxGN1OLEKkLBo7YOf92E-TJmP9spko',
})(MapWithMarker);
