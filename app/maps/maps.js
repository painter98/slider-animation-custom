import React from "react";
import styles from "./page.module.css";
import { Loader } from "@googlemaps/js-api-loader";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "720px",
  height: "400px",
};

const center = {
  lat: 12.88277,
  lng: 77.59609,
};

function MyComponent() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_SECRET_KEY,
  });
  const loader = new Loader({
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    version: "weekly",
    id: "google-map-script",
    libraries: ["places"],
  });

  const list = [
    {
      place: "Brazil",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Gh8QtnFEh8LOj1a6-Q88FQHaFj&pid=Api&P=0&h=180",
      position: { lat: -22.90642, lng: -43.18223 },
    },
    {
      place: "Mauritius",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Gh8QtnFEh8LOj1a6-Q88FQHaFj&pid=Api&P=0&h=180",
      position: { lat: -20.348404, lng: 57.552152 },
    },
    {
      place: "India",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Gh8QtnFEh8LOj1a6-Q88FQHaFj&pid=Api&P=0&h=180",
      position: { lat: 28.6448, lng: 77.23149 },
    },
    {
      place: "Italy",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Gh8QtnFEh8LOj1a6-Q88FQHaFj&pid=Api&P=0&h=180",
      position: { lat: 41.89193, lng: 12.51133 },
    },
  ];

  return isLoaded ? (
    <GoogleMap
      className={styles.googlemaps}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      options={{
        disableDefaultUI: true,
        minZoom: 30,
        maxZoom: 60,
      }}
      draggable={true}
      scrollwheel={false}
      scaleControl={false}
      zoomControl={true}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {list.map((list, id) => {
        return (
          <Marker key={id} position={list.position} icon="none">
            <InfoWindow position={list.position} close="none">
              <div style={{ maxWidth: "30px", maxHeight: "30px" }}>
                <img src={list.image} alt="image" width="100%" height="100%" />
              </div>
            </InfoWindow>
          </Marker>
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyComponent;
