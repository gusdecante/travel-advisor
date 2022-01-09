import { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Coords, Bounds } from "google-map-react";

import { Header, List, Map } from "./components";
import { getPlaceData } from "./components/api/travelAdvisorApi";

import useStyles from "./styles/default";

export type Place = {
  name: string;
  num_reviews: string;
  rating: string;
  phone: string;
  address: string;
  latitude: string;
  longitude: string;
  photo: {
    images: {
      large: {
        url: string;
      };
    };
  };
};

function App() {
  const classes = useStyles();
  const [type, setType] = useState<any>("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState<Place[]>([]);
  const [coords, setCoords] = useState<Coords>();
  const [bounds, setBounds] = useState<Bounds>();
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlaceData(type, bounds.ne, bounds.sw).then((data) => {
        setPlaces(
          data?.filter((place) => place.name && parseInt(place.num_reviews) > 0)
        );
        setIsLoading(false);
      });
    }
  }, [type, setPlaces, bounds]);

  useEffect(() => {
    console.log(bounds);
  }, [bounds]);

  console.log(places);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container className={classes.listGrid}>
        <Grid xs={12} md={4}>
          <List
            type={type}
            setType={(type) => {
              setType(type);
            }}
            childClicked={childClicked}
            isLoading={isLoading}
            places={places}
          />
        </Grid>
        <Grid xs={12} md={8}>
          <Map
            coords={coords}
            places={places}
            setBounds={(bounds) => setBounds(bounds)}
            setCoords={(coordinates) => setCoords(coordinates)}
            setChildClicked={(child) => setChildClicked(child)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
