import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import GoogleMapReact from "google-map-react";
import { LocationOnOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  paper: {
    width: 100,
    diplay: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  cardImage: {
    height: 80,
    width: 80,
    cursor: "pointer",
  },
}));

export default function Map({
  coords,
  places,
  setBounds,
  setCoords,
  setChildClicked,
}) {
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
            <div
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
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
                  alt="place photo"
                />
                <Rating readOnly size="small" value={Number(place.rating)} />
              </Paper>
            </div>
          ))}
      </GoogleMapReact>
    </Box>
  );
}
