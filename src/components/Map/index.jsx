import { makeStyles, Box } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import { LocationOnOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
}));

export default function Map({ places }) {
  const classes = useStyles();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
          language: "pt-BR",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
        {places.length > 0 &&
          places.map((place, index) => (
            <div
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}
            >
              <LocationOnOutlined color="primary" fontSize="large" />
            </div>
          ))}
      </GoogleMapReact>
    </Box>
  );
}
