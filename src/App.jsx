import { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header, List, Map } from "./components";
import { getPlaceData } from "./components/api/travelAdvisorApi";

function App() {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlaceData(type, bounds.ne, bounds.sw).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
      });
    }
  }, [type, setPlaces, bounds]);

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
      <Grid container styles={{ width: "100%" }}>
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
