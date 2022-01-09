import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { useState, useEffect, createRef } from "react";

import { PlaceDetails } from "../";

import useStyles from "./styles";

// interface ListProps {
//   type: any;
//   setType: any;
//   isLoading: any;
//   childClicked: any;
//   places: any;
// }

export default function List({
  type,
  setType,
  isLoading,
  childClicked,
  places,
}) {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    console.log(type);
  });

  useEffect(() => {
    setElRefs((refs) => {
      return Array(places.length)
        .fill()
        .map((_, index) => refs[index] || createRef());
    });
  }, [places]);
  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type:</InputLabel>
            <Select
              id="placeType"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places &&
              places.map((place, index) => (
                <Grid ref={elRefs[index]} item xs={12}>
                  <PlaceDetails
                    selected={Number(childClicked) === index}
                    placeRef={elRefs[index]}
                    place={place}
                    key={index}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
