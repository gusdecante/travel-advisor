import { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header, List, Map } from "./components";
import { getPlaceData } from "./components/api/travelAdvisorApi";

function App() {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getPlaceData(type).then((data) => {
      setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
      setIsLoading(false);
    });
  }, [type, setPlaces]);

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
          <Map places={places} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
