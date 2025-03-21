import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCNhsU6R9HsP40Xu9QTwvWKCeWAZdpSRfM",
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: location?.lat || 0, // Fallback to prevent crash
    lng: location?.lng || 0,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    map.setCenter(center);
    map.setZoom(15); // Explicit zoom level
    
  setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  if (!location || !location.lat || !location.lng) {
    return <p className="text-gray-500">Location data unavailable</p>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={center}
        icon={{
          url: "https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png",
          anchor: new google.maps.Point(16, 32), // Adjust for marker alignment
        }}
      />
    </GoogleMap>
  ) : (
    <p className="text-gray-500">Loading map...</p>
  );
};

export default React.memo(Map);
