import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
