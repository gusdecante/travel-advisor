import { Box, Typography, Paper } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import GoogleMapReact, { Coords } from "google-map-react";
import { LocationOnOutlined } from "@material-ui/icons";

import { ContainerMap } from "../";

import useStyles from "./styles";

type Place = {
  name: string;
  latitude: string;
  longitude: string;
  photo: {
    images: {
      large: {
        url: string;
      };
    };
  };
  rating: string;
};

interface MapProps {
  coords: Coords | undefined;
  places: Place[];
  setBounds: any;
  setCoords: any;
  setChildClicked: any;
}

export default function Map({
  coords,
  places,
  setBounds,
  setCoords,
  setChildClicked,
}: MapProps) {
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
          key: "AIzaSyDwyeLKve7vBrj2b1-mHOgM9UKvsqP8Z-c",
          language: "pt-BR",
        }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(event) => {
          setCoords({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length > 0 &&
          places.map((place, index) => (
            <ContainerMap
              lat={parseInt(place.latitude)}
              lng={parseInt(place.longitude)}
              key={index}
            >
              <LocationOnOutlined color="primary" fontSize="large" />
              <Paper className={classes.paper}>
                <Typography>{place.name}</Typography>
                <img
                  className={classes.cardImage}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt="place"
                />
                <Rating readOnly size="small" value={Number(place.rating)} />
              </Paper>
            </ContainerMap>
          ))}
      </GoogleMapReact>
    </Box>
  );
}
