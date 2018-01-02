import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GOOGLE_API_KEY = 'AIzaSyC9NoROpZXAgKMhlhIfTspvyZrjuuNS9Bg';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div id="map"><div id="map-overlay"></div></div>,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return ( 
    <div>
     {props.weather ?
        <div>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: props.user.lat, lng: props.user.lng }}
            center={{ lat: props.weather.latitude, lng: props.weather.longitude }}
          >
            {props.isMarkerShown && <Marker position={{ lat: props.weather.latitude, lng: props.weather.longitude }} />}
          </GoogleMap>
        </div>
        :
        <div>
          <GoogleMap
            defaultZoom={8}
            center={{ lat: props.user.lat, lng: props.user.lng }}
          >
            {props.isMarkerShown && <Marker position={{ lat: props.user.lat, lng: props.user.lng }} />}
          </GoogleMap>
        </div>
      }
    </div>

    );
  }
);

export default Map;
